
    import React from 'react';
    import Header from '@/components/Header';
    import MainContent from '@/components/MainContent';
    import { Toaster } from '@/components/ui/toaster';

    const Layout = ({
        isDarkMode, handleThemeToggle,
        theme, setTheme,
        fontFamily,
        // Removed settings related props
        wirdType, setWirdType,
        wirdAmount, setWirdAmount,
        wirdResult,
        calculateAndSetWird,
        handleResetProgress
    }) => {
        return (
            <div className={`min-h-screen text-foreground transition-colors duration-300 theme-${theme}`} style={{ fontFamily: fontFamily }} dir="rtl">
                <Header
                    isDarkMode={isDarkMode}
                    onThemeToggle={handleThemeToggle}
                    // Removed onSettingsToggle prop
                    activeTheme={theme}
                    setActiveTheme={setTheme}
                />

                <MainContent
                    // Removed settings related props
                    wirdType={wirdType} setWirdType={setWirdType}
                    wirdAmount={wirdAmount} setWirdAmount={setWirdAmount}
                    wirdResult={wirdResult}
                    calculateAndSetWird={calculateAndSetWird}
                    handleResetProgress={handleResetProgress}
                />

                <Toaster />
            </div>
        );
    };

    export default Layout;
  