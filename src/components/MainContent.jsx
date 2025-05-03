
    import React from 'react';
    import WirdCalculator from '@/components/WirdCalculator';
    import ProgressDisplay from '@/components/ProgressDisplay';
    import { getTodayGregorian } from '@/lib/dateUtils';
    import { CalendarDays } from 'lucide-react';

    const MainContent = ({
      wirdType, setWirdType,
      wirdAmount, setWirdAmount,
      wirdResult,
      calculateAndSetWird,
      handleResetProgress, // Pass this down
    }) => {
      const todayGregorian = getTodayGregorian();

      return (
        <main className="container max-w-screen-lg mx-auto py-8 px-4 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground text-lg">
            <CalendarDays className="h-5 w-5" />
            <span>{todayGregorian}</span>
          </div>

          <WirdCalculator
            wirdType={wirdType} setWirdType={setWirdType}
            wirdAmount={wirdAmount} setWirdAmount={setWirdAmount}
            calculateWird={calculateAndSetWird}
            onResetProgress={handleResetProgress} // Pass reset handler here
          />

          <ProgressDisplay wirdResult={wirdResult} />

        </main>
      );
    };

    export default MainContent;
  