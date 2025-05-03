
    import React, { useCallback } from 'react';
    import { useToast } from '@/components/ui/use-toast';
    import useWirdState from '@/hooks/useWirdState';
    import useDisplaySettings from '@/hooks/useDisplaySettings';
    import Layout from '@/components/Layout';
    import { WIRD_TYPES } from '@/lib/quranUtils';

    function App() {
      const { toast } = useToast();

      const {
        theme, setTheme,
        isDarkMode, handleThemeToggle,
        fontFamily // Keep font family setting
        // Removed fontSize and setFontSize as SettingsPanel is gone
      } = useDisplaySettings();

      const {
        wirdType, setWirdType,
        wirdAmount, setWirdAmount,
        wirdResult,
        calculateAndSetWird,
        resetProgressForCurrentType,
      } = useWirdState();

      // Removed showSettingsPanel state

      const handleResetProgress = useCallback(() => {
        resetProgressForCurrentType();
        toast({
            title: "تم إعادة التعيين",
            description: `تمت إعادة تعيين تقدم القراءة لنوع الورد ${WIRD_TYPES[wirdType]}.`,
            variant: "default",
            duration: 3000,
        });
      }, [resetProgressForCurrentType, toast, wirdType]);

      const handleCalculateWird = useCallback(() => {
        calculateAndSetWird();
        toast({
          title: "تم حساب الورد",
          description: `تم حساب وردك القادم. بالتوفيق!`,
          variant: "default",
          duration: 3000,
        });
      }, [calculateAndSetWird, toast]);


      return (
        <Layout
            isDarkMode={isDarkMode}
            handleThemeToggle={handleThemeToggle}
            theme={theme}
            setTheme={setTheme}
            fontFamily={fontFamily}
            // Removed settings panel related props
            wirdType={wirdType}
            setWirdType={setWirdType}
            wirdAmount={wirdAmount}
            setWirdAmount={setWirdAmount}
            wirdResult={wirdResult}
            calculateAndSetWird={handleCalculateWird}
            handleResetProgress={handleResetProgress}
        />
      );
    }

    export default App;
  