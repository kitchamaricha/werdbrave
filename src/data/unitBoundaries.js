
    import { surahs } from '@/data/surahInfo';

    export const hizbBoundaries = [
        { hizb: 1, start: { surah: 1, ayah: 1 }, end: { surah: 2, ayah: 74 } },
        { hizb: 2, start: { surah: 2, ayah: 75 }, end: { surah: 2, ayah: 141 } },
        { hizb: 3, start: { surah: 2, ayah: 142 }, end: { surah: 2, ayah: 202 } },
        { hizb: 4, start: { surah: 2, ayah: 203 }, end: { surah: 2, ayah: 252 } },
        { hizb: 5, start: { surah: 2, ayah: 253 }, end: { surah: 3, ayah: 14 } },
        { hizb: 6, start: { surah: 3, ayah: 15 }, end: { surah: 3, ayah: 92 } },
        { hizb: 7, start: { surah: 3, ayah: 93 }, end: { surah: 3, ayah: 170 } },
        { hizb: 8, start: { surah: 3, ayah: 171 }, end: { surah: 4, ayah: 23 } },
        { hizb: 9, start: { surah: 4, ayah: 24 }, end: { surah: 4, ayah: 87 } },
        { hizb: 10, start: { surah: 4, ayah: 88 }, end: { surah: 4, ayah: 147 } },
        { hizb: 11, start: { surah: 4, ayah: 148 }, end: { surah: 5, ayah: 26 } },
        { hizb: 12, start: { surah: 5, ayah: 27 }, end: { surah: 5, ayah: 81 } },
        { hizb: 13, start: { surah: 5, ayah: 82 }, end: { surah: 6, ayah: 35 } },
        { hizb: 14, start: { surah: 6, ayah: 36 }, end: { surah: 6, ayah: 110 } },
        { hizb: 15, start: { surah: 6, ayah: 111 }, end: { surah: 6, ayah: 165 } },
        { hizb: 16, start: { surah: 7, ayah: 1 }, end: { surah: 7, ayah: 87 } },
        { hizb: 17, start: { surah: 7, ayah: 88 }, end: { surah: 7, ayah: 170 } },
        { hizb: 18, start: { surah: 7, ayah: 171 }, end: { surah: 8, ayah: 40 } },
        { hizb: 19, start: { surah: 8, ayah: 41 }, end: { surah: 9, ayah: 33 } },
        { hizb: 20, start: { surah: 9, ayah: 34 }, end: { surah: 9, ayah: 92 } },
        { hizb: 21, start: { surah: 9, ayah: 93 }, end: { surah: 10, ayah: 25 } },
        { hizb: 22, start: { surah: 10, ayah: 26 }, end: { surah: 11, ayah: 5 } },
        { hizb: 23, start: { surah: 11, ayah: 6 }, end: { surah: 11, ayah: 83 } },
        { hizb: 24, start: { surah: 11, ayah: 84 }, end: { surah: 12, ayah: 52 } },
        { hizb: 25, start: { surah: 12, ayah: 53 }, end: { surah: 13, ayah: 18 } },
        { hizb: 26, start: { surah: 13, ayah: 19 }, end: { surah: 14, ayah: 52 } },
        { hizb: 27, start: { surah: 15, ayah: 1 }, end: { surah: 16, ayah: 50 } },
        { hizb: 28, start: { surah: 16, ayah: 51 }, end: { surah: 16, ayah: 128 } },
        { hizb: 29, start: { surah: 17, ayah: 1 }, end: { surah: 17, ayah: 98 } },
        { hizb: 30, start: { surah: 17, ayah: 99 }, end: { surah: 18, ayah: 74 } },
        { hizb: 31, start: { surah: 18, ayah: 75 }, end: { surah: 19, ayah: 98 } },
        { hizb: 32, start: { surah: 20, ayah: 1 }, end: { surah: 20, ayah: 135 } },
        { hizb: 33, start: { surah: 21, ayah: 1 }, end: { surah: 21, ayah: 112 } },
        { hizb: 34, start: { surah: 22, ayah: 1 }, end: { surah: 22, ayah: 78 } },
        { hizb: 35, start: { surah: 23, ayah: 1 }, end: { surah: 24, ayah: 20 } },
        { hizb: 36, start: { surah: 24, ayah: 21 }, end: { surah: 25, ayah: 20 } },
        { hizb: 37, start: { surah: 25, ayah: 21 }, end: { surah: 26, ayah: 110 } },
        { hizb: 38, start: { surah: 26, ayah: 111 }, end: { surah: 27, ayah: 55 } },
        { hizb: 39, start: { surah: 27, ayah: 56 }, end: { surah: 28, ayah: 50 } },
        { hizb: 40, start: { surah: 28, ayah: 51 }, end: { surah: 29, ayah: 45 } },
        { hizb: 41, start: { surah: 29, ayah: 46 }, end: { surah: 31, ayah: 21 } },
        { hizb: 42, start: { surah: 31, ayah: 22 }, end: { surah: 33, ayah: 30 } },
        { hizb: 43, start: { surah: 33, ayah: 31 }, end: { surah: 34, ayah: 23 } },
        { hizb: 44, start: { surah: 34, ayah: 24 }, end: { surah: 36, ayah: 27 } },
        { hizb: 45, start: { surah: 36, ayah: 28 }, end: { surah: 37, ayah: 144 } },
        { hizb: 46, start: { surah: 37, ayah: 145 }, end: { surah: 39, ayah: 31 } },
        { hizb: 47, start: { surah: 39, ayah: 32 }, end: { surah: 40, ayah: 40 } },
        { hizb: 48, start: { surah: 40, ayah: 41 }, end: { surah: 41, ayah: 46 } },
        { hizb: 49, start: { surah: 41, ayah: 47 }, end: { surah: 43, ayah: 23 } },
        { hizb: 50, start: { surah: 43, ayah: 24 }, end: { surah: 45, ayah: 37 } },
        { hizb: 51, start: { surah: 46, ayah: 1 }, end: { surah: 48, ayah: 17 } },
        { hizb: 52, start: { surah: 48, ayah: 18 }, end: { surah: 51, ayah: 30 } },
        { hizb: 53, start: { surah: 51, ayah: 31 }, end: { surah: 54, ayah: 55 } },
        { hizb: 54, start: { surah: 55, ayah: 1 }, end: { surah: 57, ayah: 29 } },
        { hizb: 55, start: { surah: 58, ayah: 1 }, end: { surah: 61, ayah: 14 } },
        { hizb: 56, start: { surah: 62, ayah: 1 }, end: { surah: 66, ayah: 12 } },
        { hizb: 57, start: { surah: 67, ayah: 1 }, end: { surah: 71, ayah: 28 } },
        { hizb: 58, start: { surah: 72, ayah: 1 }, end: { surah: 77, ayah: 50 } },
        { hizb: 59, start: { surah: 78, ayah: 1 }, end: { surah: 86, ayah: 17 } },
        { hizb: 60, start: { surah: 87, ayah: 1 }, end: { surah: 114, ayah: 6 } }
    ];

    export const juzBoundaries = [
        { juz: 1, start: { surah: 1, ayah: 1 }, end: { surah: 2, ayah: 141 } },
        { juz: 2, start: { surah: 2, ayah: 142 }, end: { surah: 2, ayah: 252 } },
        { juz: 3, start: { surah: 2, ayah: 253 }, end: { surah: 3, ayah: 92 } },
        { juz: 4, start: { surah: 3, ayah: 93 }, end: { surah: 4, ayah: 23 } },
        { juz: 5, start: { surah: 4, ayah: 24 }, end: { surah: 4, ayah: 147 } },
        { juz: 6, start: { surah: 4, ayah: 148 }, end: { surah: 5, ayah: 81 } },
        { juz: 7, start: { surah: 5, ayah: 82 }, end: { surah: 6, ayah: 110 } },
        { juz: 8, start: { surah: 6, ayah: 111 }, end: { surah: 7, ayah: 87 } },
        { juz: 9, start: { surah: 7, ayah: 88 }, end: { surah: 8, ayah: 40 } },
        { juz: 10, start: { surah: 8, ayah: 41 }, end: { surah: 9, ayah: 92 } },
        { juz: 11, start: { surah: 9, ayah: 93 }, end: { surah: 11, ayah: 5 } },
        { juz: 12, start: { surah: 11, ayah: 6 }, end: { surah: 12, ayah: 52 } },
        { juz: 13, start: { surah: 12, ayah: 53 }, end: { surah: 14, ayah: 52 } },
        { juz: 14, start: { surah: 15, ayah: 1 }, end: { surah: 16, ayah: 128 } },
        { juz: 15, start: { surah: 17, ayah: 1 }, end: { surah: 18, ayah: 74 } },
        { juz: 16, start: { surah: 18, ayah: 75 }, end: { surah: 20, ayah: 135 } },
        { juz: 17, start: { surah: 21, ayah: 1 }, end: { surah: 22, ayah: 78 } },
        { juz: 18, start: { surah: 23, ayah: 1 }, end: { surah: 25, ayah: 20 } },
        { juz: 19, start: { surah: 25, ayah: 21 }, end: { surah: 27, ayah: 55 } },
        { juz: 20, start: { surah: 27, ayah: 56 }, end: { surah: 29, ayah: 45 } },
        { juz: 21, start: { surah: 29, ayah: 46 }, end: { surah: 33, ayah: 30 } },
        { juz: 22, start: { surah: 33, ayah: 31 }, end: { surah: 36, ayah: 27 } },
        { juz: 23, start: { surah: 36, ayah: 28 }, end: { surah: 39, ayah: 31 } },
        { juz: 24, start: { surah: 39, ayah: 32 }, end: { surah: 41, ayah: 46 } },
        { juz: 25, start: { surah: 41, ayah: 47 }, end: { surah: 45, ayah: 37 } },
        { juz: 26, start: { surah: 46, ayah: 1 }, end: { surah: 51, ayah: 30 } },
        { juz: 27, start: { surah: 51, ayah: 31 }, end: { surah: 57, ayah: 29 } },
        { juz: 28, start: { surah: 58, ayah: 1 }, end: { surah: 66, ayah: 12 } },
        { juz: 29, start: { surah: 67, ayah: 1 }, end: { surah: 77, ayah: 50 } },
        { juz: 30, start: { surah: 78, ayah: 1 }, end: { surah: 114, ayah: 6 } }
    ];

    // Function to generate Rub boundaries based on ayah counts per rub
    function generateRubBoundariesFromLengths() {
        const rubLengths = [
            32, 18, 16, 15, 17, 14, 18, 18, 16, 19, 12, 14, 16, 14, 10, 10,
            10, 9, 11, 18, 18, 19, 23, 18, 20, 20, 20, 18, 15, 15, 11, 12,
            12, 22, 16, 14, 12, 14, 21, 13, 15, 14, 11, 15, 14, 10, 16, 15,
            15, 12, 24, 23, 23, 15, 21, 16, 16, 14, 10, 15, 30, 16, 18, 23,
            29, 25, 14, 15, 18, 18, 21, 19, 20, 15, 18, 15, 12, 14, 15, 18,
            18, 11, 18, 15, 27, 18, 19, 25, 18, 17, 20, 23, 24, 22, 23, 23,
            24, 24, 15, 14, 16, 18, 18, 25, 48, 51, 29, 21, 24, 15, 21, 18,
            22, 27, 20, 29, 29, 15, 19, 24, 24, 33, 37, 40, 54, 28, 28, 25,
            28, 22, 32, 30, 18, 19, 22, 19, 35, 39, 44, 20, 14, 18, 12, 20,
            32, 25, 51, 59, 70, 47, 26, 29, 26, 23, 17, 22, 25, 13, 25, 20,
            24, 30, 23, 28, 23, 20, 17, 13, 20, 9, 23, 14, 22, 23, 26, 32,
            32, 45, 61, 62, 58, 31, 44, 24, 21, 23, 20, 20, 25, 28, 16, 22,
            20, 14, 24, 26, 33, 49, 54, 26, 20, 24, 23, 23, 12, 13, 31, 49,
            53, 51, 45, 47, 78, 74, 37, 14, 13, 19, 20, 21, 14, 26, 12, 12,
            30, 52, 70, 54, 47, 57, 58, 63, 86, 71, 55, 64, 75, 67, 67, 79
        ];

        const generatedBoundaries = [];
        let currentSurah = 1;
        let currentAyah = 1;

        const getNextStart = (endS, endA) => {
            const surahInfo = surahs[endS - 1];
            if (!surahInfo) return { surah: 114, ayah: 6 };
            if (endA < surahInfo.ayahs) {
                return { surah: endS, ayah: endA + 1 };
            } else if (endS < 114) {
                return { surah: endS + 1, ayah: 1 };
            } else {
                return { surah: 114, ayah: 6 };
            }
        };

        for (let i = 0; i < rubLengths.length; i++) {
            const rubLength = rubLengths[i];
            if (rubLength <= 0) continue;

            const startPos = { surah: currentSurah, ayah: currentAyah };
            let remaining = rubLength;
            let endSurah = currentSurah;
            let endAyah = currentAyah;

            while (remaining > 0 && endSurah <= 114) {
                const surahInfo = surahs[endSurah - 1];
                const ayahsLeftInSurah = surahInfo.ayahs - endAyah + 1;

                if (remaining <= ayahsLeftInSurah) {
                    endAyah += remaining - 1;
                    remaining = 0;
                } else {
                    remaining -= ayahsLeftInSurah;
                    endSurah++;
                    endAyah = 1;
                    if (endSurah > 114) {
                        endSurah = 114;
                        endAyah = surahs[113].ayahs;
                        remaining = 0;
                    }
                }
            }

            if(endSurah <= 114) {
                const finalSurahInfo = surahs[endSurah - 1];
                if (endAyah > finalSurahInfo.ayahs) {
                    endAyah = finalSurahInfo.ayahs;
                }
            } else {
                endSurah = 114;
                endAyah = surahs[113].ayahs;
            }

            generatedBoundaries.push({ rub: i + 1, start: startPos, end: { surah: endSurah, ayah: endAyah } });

            const nextStart = getNextStart(endSurah, endAyah);
            currentSurah = nextStart.surah;
            currentAyah = nextStart.ayah;

            if (currentSurah > 114 || (currentSurah === 114 && currentAyah > 6)) {
                break;
            }
        }
        return generatedBoundaries;
    }

    // Generate and export the corrected Rub boundaries
    export const rubBoundaries = generateRubBoundariesFromLengths();
  