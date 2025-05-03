
    import React from 'react';
    import { Card, CardContent, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { Calculator, BookCopy, BookMarked, ListOrdered, Hash, RotateCcw } from 'lucide-react';
    import { WIRD_TYPES } from '@/lib/quranUtils';
    import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";


    const WirdCalculator = ({
      wirdType, setWirdType,
      wirdAmount, setWirdAmount,
      calculateWird,
      onResetProgress // Added prop
    }) => {

      const handleAmountChange = (e) => {
        setWirdAmount(e.target.value);
      };

      const orderedWirdTypes = ['AYAH', 'RUB', 'HIZB', 'JUZ'];

      const getIconForType = (type) => {
        switch (type) {
          case 'AYAH': return <BookMarked className="inline-block ml-2 h-4 w-4 opacity-70"/>;
          case 'RUB':
          case 'HIZB':
          case 'JUZ':
          default: return <BookCopy className="inline-block ml-2 h-4 w-4 opacity-70"/>;
        }
      }

      return (
        <Card className="card-glass w-full max-w-md mx-auto mb-8">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="wirdType" className="flex items-center gap-2 text-md font-medium">
                 <ListOrdered className="h-5 w-5 text-primary"/>
                 اختر نوع الورد
              </Label>
              <Select value={wirdType} onValueChange={setWirdType} dir="rtl">
                <SelectTrigger id="wirdType" className="w-full">
                  <SelectValue placeholder="اختر نوع الورد..." />
                </SelectTrigger>
                <SelectContent>
                  {orderedWirdTypes.map((key) => (
                     <SelectItem key={key} value={key}>
                       {getIconForType(key)}
                       {WIRD_TYPES[key]}
                     </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
               <Label htmlFor="wirdAmount" className="flex items-center gap-2 text-md font-medium">
                    <Hash className="h-5 w-5 text-primary"/>
                    حدد الكمية اليومية
                </Label>
              <Input
                id="wirdAmount"
                type="number"
                min="1"
                value={wirdAmount}
                onChange={handleAmountChange}
                placeholder={`أدخل عدد ${WIRD_TYPES[wirdType]}`}
                className="w-full text-center text-lg"
              />
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex flex-col gap-4">
             <Button onClick={calculateWird} className="w-full text-lg py-3 h-12">
              <Calculator className="ml-2 h-5 w-5" />
              احسب وردي القادم
            </Button>

             {/* Reset Button */}
             <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="w-full">
                        <RotateCcw className="ml-2 h-4 w-4" />
                        البدء من جديد ({WIRD_TYPES[wirdType]})
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>هل أنت متأكد؟</AlertDialogTitle>
                    <AlertDialogDescription>
                        سيؤدي هذا إلى إعادة تعيين تقدم القراءة لنوع الورد المحدد حاليًا ({WIRD_TYPES[wirdType]}) إلى بداية سورة الفاتحة (الآية 1). لن تتأثر أنواع الورد الأخرى.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>إلغاء</AlertDialogCancel>
                    <AlertDialogAction onClick={onResetProgress}>نعم، ابدأ من جديد</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      );
    };

    export default WirdCalculator;
  