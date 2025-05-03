
    import React from 'react';
    import { motion } from 'framer-motion';
    import { RotateCcw, TextQuote, Type as FontSize } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { Label } from '@/components/ui/label';
    import { Slider } from '@/components/ui/slider';
    import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
    import { WIRD_TYPES } from '@/lib/quranUtils';

    const SettingsPanel = ({
      fontSize, setFontSize,
      fontFamily, setFontFamily,
      onResetProgress,
      wirdType
    }) => {

      const handleFontSizeChange = (value) => {
        setFontSize(value[0]);
      };

      const availableFonts = [
        { value: "'Amiri Quran', serif", label: "Amiri Quran (تقليدي)" },
        { value: "'Noto Kufi Arabic', sans-serif", label: "Noto Kufi (حديث)" },
        { value: "serif", label: "Serif (أساسي)" },
        { value: "sans-serif", label: "Sans-serif (أساسي)" },
      ];

      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 overflow-hidden w-full max-w-lg mx-auto"
        >
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>إعدادات العرض والتقدم</CardTitle>
              <CardDescription>اضبط تفضيلات الخط وأعد تعيين التقدم إذا لزم الأمر.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                 <Label htmlFor="fontSize" className="flex items-center gap-2"><FontSize className="h-4 w-4"/> حجم الخط: {fontSize}px</Label>
                 <Slider
                     id="fontSize" min={12} max={32} step={1} value={[fontSize]} onValueChange={handleFontSizeChange} dir="ltr"
                 />
              </div>
              <div className="space-y-2">
                 <Label htmlFor="fontFamily" className="flex items-center gap-2"><TextQuote className="h-4 w-4"/> نوع الخط</Label>
                 <Select value={fontFamily} onValueChange={setFontFamily}>
                     <SelectTrigger id="fontFamily">
                         <SelectValue placeholder="اختر نوع الخط" />
                     </SelectTrigger>
                     <SelectContent>
                         {availableFonts.map(font => (
                             <SelectItem key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                                 {font.label}
                             </SelectItem>
                         ))}
                     </SelectContent>
                 </Select>
              </div>

              <div className="pt-4 border-t">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="w-full">
                            <RotateCcw className="ml-2 h-4 w-4" />
                            البدء من جديد (لنوع الورد: {WIRD_TYPES[wirdType]})
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
             </div>
             <div className="text-sm text-muted-foreground space-y-1 pt-4 border-t">
                   <p><strong>ملاحظة:</strong> يتم حفظ تقدمك وإعداداتك على هذا الجهاز فقط.</p>
             </div>

            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default SettingsPanel;
  