
    import React, { useState, useEffect } from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { getSurahName } from '@/lib/quranUtils';
    import { getCompletionDate } from '@/lib/dateUtils';
    import { Play, Target, Hourglass, CalendarClock, CheckCircle, Timer } from 'lucide-react'; // Added Timer icon
    import { motion } from 'framer-motion';

    const ProgressDisplay = ({ wirdResult }) => {
       const [localCompletionDate, setLocalCompletionDate] = useState('غير محدد');

       useEffect(() => {
           setLocalCompletionDate(getCompletionDate(wirdResult.estimatedDays));
       }, [wirdResult.estimatedDays]);


      const startSurahName = wirdResult.startSurah ? getSurahName(wirdResult.startSurah) : '...';
      const endSurahName = wirdResult.endSurah ? getSurahName(wirdResult.endSurah) : '...';

      const startPointText = wirdResult.startSurah ? `${startSurahName} - الآية ${wirdResult.startAyah}` : 'ابدأ بحساب وردك';
      // Show '...' if endSurah is null (cleared on type change or reset)
      const endPointText = wirdResult.endSurah ? `${endSurahName} - الآية ${wirdResult.endAyah}` : '...';
      const estimatedDaysText = wirdResult.estimatedDays > 0 ? `${wirdResult.estimatedDays} يومًا` : 'غير محدد';
      // Display remaining days, handle 0 or undefined
      const remainingDaysText = wirdResult.remainingDays !== undefined && wirdResult.remainingDays >= 0
                                ? `${wirdResult.remainingDays} يومًا`
                                : 'غير محدد';


      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 w-full max-w-lg mx-auto"
        >
          <Card className="card-glass shadow-lg overflow-hidden">
             <CardHeader className="pb-3 pt-5 bg-primary/10">
              <CardTitle className="text-lg font-semibold flex items-center justify-center gap-2 text-primary">
                <CheckCircle className="h-5 w-5"/>
                متابعة تقدمك في الورد
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm p-5" dir="rtl">
                {/* Row 1: Start Point */}
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-1.5 text-right">
                         <Play className="h-4 w-4"/> ستبدأ من:
                    </span>
                    <span className="font-semibold text-left">{startPointText}</span>
                </div>
                {/* Row 2: End Point */}
                <div className="flex justify-between items-center">
                   <span className="text-muted-foreground flex items-center gap-1.5 text-right">
                       <Target className="h-4 w-4"/> ستنتهي عند:
                   </span>
                   <span className="font-semibold text-left">{endPointText}</span>
                 </div>
                 {/* Row 3: Estimated Duration */}
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-1.5 text-right">
                        <Hourglass className="h-4 w-4"/> المدة التقريبية للختم:
                    </span>
                    <span className="font-semibold text-left">{estimatedDaysText}</span>
                </div>
                 {/* Row 4: Remaining Duration */}
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-1.5 text-right">
                        <Timer className="h-4 w-4"/> المدة المتبقية للختم:
                    </span>
                    <span className="font-semibold text-left">{remainingDaysText}</span>
                </div>
                 {/* Row 5: Completion Date */}
                <div className="flex justify-between items-center pt-2 border-t border-border/50">
                    <span className="text-muted-foreground flex items-center gap-1.5 text-right">
                       <CalendarClock className="h-4 w-4"/> التاريخ المتوقع للختم:
                    </span>
                     <span className="font-semibold text-left">{localCompletionDate}</span>
                </div>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default ProgressDisplay;
  