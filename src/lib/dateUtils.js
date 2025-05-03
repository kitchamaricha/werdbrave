
    import { format, addDays } from 'date-fns';
    import { arSA } from 'date-fns/locale';

    export const getTodayGregorian = () => {
      return format(new Date(), 'd MMMM yyyy', { locale: arSA });
    };

    export const getCompletionDate = (estimatedDays) => {
      if (estimatedDays === null || estimatedDays === undefined || estimatedDays <= 0) {
        return 'غير محدد';
      }
      try {
        const completionDate = addDays(new Date(), estimatedDays - 1); // Subtract 1 because today counts as day 1
        return format(completionDate, 'd MMMM yyyy', { locale: arSA });
      } catch (error) {
          console.error("Error calculating completion date:", error);
          return 'خطأ في الحساب';
      }
    };
  