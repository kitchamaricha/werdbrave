
    import { surahs } from '@/data/surahInfo';
    import { hizbBoundaries, juzBoundaries, rubBoundaries } from '@/data/unitBoundaries';

    export const TOTAL_AYAH = 6236;
    export const TOTAL_JUZ = 30;
    export const TOTAL_HIZB = 60;
    export const TOTAL_RUB = 240;

    export const WIRD_TYPES = {
      AYAH: 'آيات',
      RUB: 'أرباع',
      HIZB: 'أحزاب',
      JUZ: 'أجزاء',
    };

    export const getAbsoluteAyahIndex = (surah, ayah) => {
        if (surah < 1 || surah > 114 || !surahs[surah - 1]) {
            return 1;
        }
        const ayahInSurah = Math.max(1, Math.min(ayah, surahs[surah - 1].ayahs));
        let startIndex = 0;
        for(let i = 0; i < surah - 1; i++) {
            startIndex += surahs[i].ayahs;
        }
        return startIndex + ayahInSurah;
    };


    export const getSurahAyahFromAbsoluteIndex = (index) => {
        const absoluteIndex = Math.max(1, Math.min(index, TOTAL_AYAH));
        let cumulativeIndex = 0;
        for (let i = 0; i < surahs.length; i++) {
            const surah = surahs[i];
            if (absoluteIndex <= cumulativeIndex + surah.ayahs) {
                const ayah = absoluteIndex - cumulativeIndex;
                return { surah: surah.number, ayah };
            }
            cumulativeIndex += surah.ayahs;
        }
        return { surah: 114, ayah: 6 };
    };

    const findCurrentUnitIndex = (boundaries, startSurah, startAyah) => {
        const startAbsoluteIndex = getAbsoluteAyahIndex(startSurah, startAyah);

        for (let i = 0; i < boundaries.length; i++) {
             const unitStartAbsoluteIndex = getAbsoluteAyahIndex(boundaries[i].start.surah, boundaries[i].start.ayah);
             const unitEndAbsoluteIndex = getAbsoluteAyahIndex(boundaries[i].end.surah, boundaries[i].end.ayah);

             // Handle case where start is exactly at the beginning of a unit (except the very first ayah)
             if (startAbsoluteIndex === unitStartAbsoluteIndex && startAbsoluteIndex > 1) {
                 // If it matches the start of unit i, it belongs to unit i
                 return i;
             }
             // Check if the start index falls within the unit's range
             if (startAbsoluteIndex >= unitStartAbsoluteIndex && startAbsoluteIndex <= unitEndAbsoluteIndex) {
                 return i;
             }
        }

        // Fallbacks (should ideally not be reached with correct data)
        if (startAbsoluteIndex < getAbsoluteAyahIndex(boundaries[0].start.surah, boundaries[0].start.ayah)) {
            return 0;
        }
        if (startAbsoluteIndex > getAbsoluteAyahIndex(boundaries[boundaries.length - 1].end.surah, boundaries[boundaries.length - 1].end.ayah)) {
             return boundaries.length -1;
        }

        return 0;
    };


    const getUnitBoundaries = (boundaries, index) => {
        const safeIndex = Math.max(0, Math.min(index, boundaries.length - 1));
        return boundaries[safeIndex];
    };


    export const calculateEstimatedDays = (wirdType, wirdAmount) => {
      if (wirdAmount <= 0) return 0;
      let totalUnits;
      switch (wirdType) {
        case 'AYAH': totalUnits = TOTAL_AYAH; break;
        case 'RUB': totalUnits = TOTAL_RUB; break;
        case 'HIZB': totalUnits = TOTAL_HIZB; break;
        case 'JUZ': totalUnits = TOTAL_JUZ; break;
        default: totalUnits = TOTAL_AYAH;
      }
      return Math.max(1, Math.ceil(totalUnits / wirdAmount));
    };

    export const getSurahName = (surahNumber) => {
      return surahs.find(s => s.number === surahNumber)?.name || "غير معروف";
    };

    export const getSurahAyahCount = (surahNumber) => {
        return surahs[surahNumber - 1]?.ayahs || 1;
    }

    export const calculateWirdEndPosition = (wirdType, amount, startSurah, startAyah) => {
        const safeAmount = Math.max(1, amount || 1);
        let endSurah = startSurah;
        let endAyah = startAyah;

        if (wirdType === 'AYAH') {
            const startAbsoluteIndex = getAbsoluteAyahIndex(startSurah, startAyah);
            // Ensure we don't exceed TOTAL_AYAH when adding amount
            const targetAbsoluteIndex = startAbsoluteIndex + safeAmount - 1;
            const endAbsoluteIndex = Math.min(TOTAL_AYAH, targetAbsoluteIndex);
            const endPos = getSurahAyahFromAbsoluteIndex(endAbsoluteIndex);
            endSurah = endPos.surah;
            endAyah = endPos.ayah;

        } else if (wirdType === 'HIZB' || wirdType === 'JUZ' || wirdType === 'RUB') {
            let boundaries;
            if (wirdType === 'HIZB') boundaries = hizbBoundaries;
            else if (wirdType === 'JUZ') boundaries = juzBoundaries;
            else boundaries = rubBoundaries;

            const totalUnits = boundaries.length;
            const currentUnitIndex = findCurrentUnitIndex(boundaries, startSurah, startAyah);
            const endUnitIndex = Math.min(totalUnits - 1, currentUnitIndex + safeAmount - 1);
            const endUnit = getUnitBoundaries(boundaries, endUnitIndex);
            endSurah = endUnit.end.surah;
            endAyah = endUnit.end.ayah;
        }

        // Final safety check
        if (endSurah < 1 || endSurah > 114) {
            endSurah = 114;
            endAyah = 6;
        } else {
            const finalSurahAyahs = getSurahAyahCount(endSurah);
            if (endAyah < 1 || endAyah > finalSurahAyahs) {
                endAyah = finalSurahAyahs;
            }
        }

        return { endSurah, endAyah };
    };

    export const getNextWirdStartPosition = (endSurah, endAyah) => {
        const endAbsoluteIndex = getAbsoluteAyahIndex(endSurah, endAyah);

        if (endAbsoluteIndex >= TOTAL_AYAH) {
            return { surah: 1, ayah: 1 };
        } else {
            const nextAbsoluteIndex = endAbsoluteIndex + 1;
            return getSurahAyahFromAbsoluteIndex(nextAbsoluteIndex);
        }
    };

    export const getAyahText = (surah, ayah) => {
        if (surah === 1 && ayah === 1) return "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
        return `﴿ نص الآية ${ayah} من سورة ${getSurahName(surah)} ﴾`;
    };
  