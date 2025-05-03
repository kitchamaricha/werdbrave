
    import { useState, useEffect, useCallback } from 'react';
    import useLocalStorage from '@/hooks/useLocalStorage';
    import {
        calculateEstimatedDays,
        calculateWirdEndPosition,
        getNextWirdStartPosition,
        WIRD_TYPES,
        getAbsoluteAyahIndex, // Import needed for remaining days calculation
        TOTAL_AYAH
    } from '@/lib/quranUtils';
    import { getCompletionDate } from '@/lib/dateUtils';

    const useWirdState = () => {
      const [wirdType, setWirdTypeState] = useLocalStorage('wirdType', 'AYAH');

      const [wirdAmounts, setWirdAmounts] = useLocalStorage('wirdAmounts', {
        AYAH: 10, RUB: 1, HIZB: 1, JUZ: 1,
      });

      const [currentPositions, setCurrentPositions] = useLocalStorage('currentPositions', {
        AYAH: { surah: 1, ayah: 1 }, RUB: { surah: 1, ayah: 1 }, HIZB: { surah: 1, ayah: 1 }, JUZ: { surah: 1, ayah: 1 },
      });

      // Store remaining days per type
      const [remainingDaysData, setRemainingDaysData] = useLocalStorage('remainingDaysData', {});

      const [wirdResult, setWirdResult] = useState({
        startSurah: null, startAyah: null,
        endSurah: null, endAyah: null,
        estimatedDays: 0, completionDate: 'غير محدد',
        remainingDays: 0, // Added remaining days state
      });

      const getCurrentWirdAmount = useCallback(() => {
        return wirdAmounts[wirdType] || (wirdType === 'AYAH' ? 10 : 1);
      }, [wirdAmounts, wirdType]);

      const getCurrentPosition = useCallback(() => {
        return currentPositions[wirdType] || { surah: 1, ayah: 1 };
      }, [currentPositions, wirdType]);

      // Function to calculate remaining days based on current position and amount
      const calculateRemainingDays = useCallback((type, amount, position) => {
          if (amount <= 0) return 0;
          const startAbsoluteIndex = getAbsoluteAyahIndex(position.surah, position.ayah);
          const remainingAyahs = TOTAL_AYAH - startAbsoluteIndex + 1;

          if (type === 'AYAH') {
              return Math.max(0, Math.ceil(remainingAyahs / amount));
          } else {
              // For units, calculate remaining units approximately based on remaining ayahs
              // This is an estimation, could be refined further if needed
              let ayahsPerUnit;
              if (type === 'RUB') ayahsPerUnit = TOTAL_AYAH / 240;
              else if (type === 'HIZB') ayahsPerUnit = TOTAL_AYAH / 60;
              else if (type === 'JUZ') ayahsPerUnit = TOTAL_AYAH / 30;
              else ayahsPerUnit = TOTAL_AYAH; // Fallback

              const remainingUnitsApprox = remainingAyahs / ayahsPerUnit;
              return Math.max(0, Math.ceil(remainingUnitsApprox / amount));
          }
      }, [getAbsoluteAyahIndex, TOTAL_AYAH]);


      const setWirdType = useCallback((newType) => {
          setWirdTypeState(newType);
          // Clear end position and update remaining days when type changes
          const currentPos = currentPositions[newType] || { surah: 1, ayah: 1 };
          const currentAmount = wirdAmounts[newType] || (newType === 'AYAH' ? 10 : 1);
          const initialEstimatedDays = calculateEstimatedDays(newType, currentAmount);
          const initialRemaining = remainingDaysData[newType] ?? calculateRemainingDays(newType, currentAmount, currentPos);

          setWirdResult({
              startSurah: currentPos.surah,
              startAyah: currentPos.ayah,
              endSurah: null, // Clear end position
              endAyah: null,
              estimatedDays: initialEstimatedDays,
              completionDate: getCompletionDate(initialEstimatedDays),
              remainingDays: initialRemaining,
          });

          // Ensure remaining days data exists for the new type
          if (remainingDaysData[newType] === undefined) {
              setRemainingDaysData(prev => ({ ...prev, [newType]: initialRemaining }));
          }

      }, [setWirdTypeState, currentPositions, wirdAmounts, remainingDaysData, setRemainingDaysData, calculateEstimatedDays, getCompletionDate, calculateRemainingDays]);


      const setWirdAmount = useCallback((amount) => {
        const newAmount = Math.max(1, parseInt(amount, 10) || (wirdType === 'AYAH' ? 10 : 1));
        setWirdAmounts(prev => ({ ...prev, [wirdType]: newAmount }));

        const currentPos = getCurrentPosition();
        const days = calculateEstimatedDays(wirdType, newAmount);
        const remaining = calculateRemainingDays(wirdType, newAmount, currentPos);

        // Update remaining days in storage as well
        setRemainingDaysData(prev => ({ ...prev, [wirdType]: remaining }));

        setWirdResult(prev => ({
           ...prev,
           estimatedDays: days,
           completionDate: getCompletionDate(days),
           remainingDays: remaining, // Update remaining days in result
           endSurah: null, // Clear end position when amount changes
           endAyah: null,
        }));
      }, [wirdType, setWirdAmounts, getCurrentPosition, calculateEstimatedDays, getCompletionDate, calculateRemainingDays, setRemainingDaysData]);

       const setCurrentPosition = useCallback((surah, ayah) => {
        setCurrentPositions(prev => ({ ...prev, [wirdType]: { surah, ayah } }));
       }, [wirdType, setCurrentPositions]);

       const calculateAndSetWird = useCallback(() => {
          const startPos = getCurrentPosition();
          const amount = getCurrentWirdAmount();

          const { endSurah, endAyah } = calculateWirdEndPosition(wirdType, amount, startPos.surah, startPos.ayah);
          const nextStartPos = getNextWirdStartPosition(endSurah, endAyah);

          setCurrentPosition(nextStartPos.surah, nextStartPos.ayah);

          const days = calculateEstimatedDays(wirdType, amount);
          const currentRemaining = remainingDaysData[wirdType] ?? calculateRemainingDays(wirdType, amount, startPos);
          const nextRemaining = Math.max(0, currentRemaining - 1);

          // Update remaining days in storage
          setRemainingDaysData(prev => ({ ...prev, [wirdType]: nextRemaining }));

          setWirdResult({
              startSurah: startPos.surah,
              startAyah: startPos.ayah,
              endSurah: endSurah,
              endAyah: endAyah,
              estimatedDays: days,
              completionDate: getCompletionDate(days),
              remainingDays: nextRemaining, // Use updated remaining days
          });

      }, [wirdType, getCurrentPosition, getCurrentWirdAmount, setCurrentPosition, calculateEstimatedDays, getCompletionDate, remainingDaysData, setRemainingDaysData, calculateRemainingDays]);


      // Effect to initialize result on mount and when type changes via localStorage sync
      useEffect(() => {
         const currentPos = getCurrentPosition();
         const currentAmount = getCurrentWirdAmount();
         const days = calculateEstimatedDays(wirdType, currentAmount);
         const remaining = remainingDaysData[wirdType] ?? calculateRemainingDays(wirdType, currentAmount, currentPos);

         setWirdResult(prev => ({
             startSurah: currentPos.surah,
             startAyah: currentPos.ayah,
             endSurah: prev.endSurah, // Keep previous end if available initially
             endAyah: prev.endAyah,
             estimatedDays: days,
             completionDate: getCompletionDate(days),
             remainingDays: remaining,
         }));

         if (!wirdAmounts[wirdType]) {
              setWirdAmount(wirdType === 'AYAH' ? 10 : 1);
         }
         if (!currentPositions[wirdType]) {
              setCurrentPosition(1, 1);
         }
         // Initialize remaining days if not present
         if (remainingDaysData[wirdType] === undefined) {
             setRemainingDaysData(prev => ({ ...prev, [wirdType]: remaining }));
         }

      }, [wirdType]); // Rerun only when wirdType changes


       const resetProgressForCurrentType = useCallback(() => {
         const defaultStart = { surah: 1, ayah: 1 };
         setCurrentPosition(defaultStart.surah, defaultStart.ayah);

          const amount = getCurrentWirdAmount();
          const days = calculateEstimatedDays(wirdType, amount);
          const initialRemaining = calculateRemainingDays(wirdType, amount, defaultStart);

          // Reset remaining days in storage
          setRemainingDaysData(prev => ({ ...prev, [wirdType]: initialRemaining }));

          setWirdResult({
              startSurah: defaultStart.surah,
              startAyah: defaultStart.ayah,
              endSurah: null, // Clear end position on reset
              endAyah: null,
              estimatedDays: days,
              completionDate: getCompletionDate(days),
              remainingDays: initialRemaining, // Reset remaining days
          });

       }, [wirdType, setCurrentPosition, getCurrentWirdAmount, calculateEstimatedDays, getCompletionDate, setRemainingDaysData, calculateRemainingDays]);

      return {
        wirdType,
        setWirdType, // Use the wrapped setter
        wirdAmount: getCurrentWirdAmount(),
        setWirdAmount,
        currentPosition: getCurrentPosition(),
        wirdResult,
        calculateAndSetWird,
        resetProgressForCurrentType,
      };
    };

    export default useWirdState;
  