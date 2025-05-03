
    import { surahs as importedSurahs } from '@/data/surahInfo';
    import { hizbBoundaries as importedHizb, juzBoundaries as importedJuz, rubBoundaries as importedRub } from '@/data/unitBoundaries';

    // This file is deprecated and will be removed in the future.
    // Data has been moved to src/data/surahInfo.js and src/data/unitBoundaries.js
    // Keeping it temporarily for compatibility during refactoring.

    export { surahs } from '@/data/surahInfo';
    export { hizbBoundaries, juzBoundaries, rubBoundaries } from '@/data/unitBoundaries';

    // You can add a console warning here if needed during development
    // console.warn("src/data/quranData.js is deprecated. Use src/data/surahInfo.js and src/data/unitBoundaries.js instead.");

    // Re-exporting quranData object structure for minimal breaking changes initially
    export const quranData = {
        surahs: importedSurahs,
        hizbBoundaries: importedHizb,
        juzBoundaries: importedJuz,
        rubBoundaries: importedRub
    };
  