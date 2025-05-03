
    import React from 'react';
    import { Sun, Moon, Palette } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

    // Define theme names matching CSS classes
    const themes = [
      { name: 'Default', class: 'theme-default' }, // Assuming default has no specific class or maps to root
      { name: 'Serene Blue', class: 'theme-sereneBlue' },
      { name: 'Desert Warmth', class: 'theme-desertWarmth' },
      { name: 'Emerald Garden', class: 'theme-emeraldGarden' },
      { name: 'Classic Dark', class: 'theme-classicDark' },
    ];


    const Header = ({ isDarkMode, onThemeToggle, activeTheme, setActiveTheme }) => {

       // Find the display name for the active theme class
       const getActiveThemeName = () => {
           const currentTheme = themes.find(t => t.class === activeTheme);
           return currentTheme ? currentTheme.name : 'Default';
       };


      return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container max-w-screen-lg h-14 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
               {/* Theme Selector Dropdown */}
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Palette className="h-5 w-5" />
                    <span className="sr-only">Change theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {themes.map((theme) => (
                    <DropdownMenuItem
                      key={theme.class}
                      onClick={() => setActiveTheme(theme.class === 'theme-default' ? '' : theme.class)}
                      className={activeTheme === (theme.class === 'theme-default' ? '' : theme.class) || (!activeTheme && theme.class === 'theme-default') ? 'font-bold' : ''}
                    >
                      {theme.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dark Mode Toggle Button */}
              <Button variant="ghost" size="icon" onClick={onThemeToggle}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle dark mode</span>
              </Button>
            </div>

            {/* App Title */}
            <h1 className="text-xl font-bold text-primary whitespace-nowrap">ورد القرآن اليومي</h1>

          </div>
        </header>
      );
    };

    export default Header;
  