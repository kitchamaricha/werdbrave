
    import { useEffect } from 'react';
    import useLocalStorage from '@/hooks/useLocalStorage';

    export const themes = {
        default: 'Default',
        sereneBlue: 'Serene Blue',
        desertWarmth: 'Desert Warmth',
        emeraldGarden: 'Emerald Garden',
        classicDark: 'Classic Dark',
    };

    const useDisplaySettings = () => {
      const [theme, setTheme] = useLocalStorage('activeTheme', 'default');
      const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', window.matchMedia('(prefers-color-scheme: dark)').matches);
      const [fontSize, setFontSize] = useLocalStorage('fontSize', 16); // Default font size for calculator
      const [fontFamily, setFontFamily] = useLocalStorage('fontFamily', "'Noto Kufi Arabic', sans-serif"); // Default modern font

      useEffect(() => {
        const body = document.body;
        Object.keys(themes).forEach(themeKey => {
          body.classList.remove(`theme-${themeKey}`);
        });
        body.classList.add(`theme-${theme}`);

        const effectivelyDarkMode = theme === 'classicDark' || isDarkMode;
        document.documentElement.classList.toggle('dark', effectivelyDarkMode);

      }, [theme, isDarkMode]);

      const handleThemeToggle = () => {
         if (theme !== 'classicDark') {
           setIsDarkMode(prev => !prev);
         }
      };

       const handleSetTheme = (newTheme) => {
            setTheme(newTheme);
            if (newTheme === 'classicDark') {
                 if (!isDarkMode) {
                     setIsDarkMode(true);
                 }
            }
       };

      return {
        theme,
        setTheme: handleSetTheme,
        isDarkMode: theme === 'classicDark' || isDarkMode, // Reflect that classicDark forces dark mode
        handleThemeToggle,
        fontSize, // Keep font settings if needed for UI elements
        setFontSize,
        fontFamily,
        setFontFamily,
      };
    };

    export default useDisplaySettings;
  