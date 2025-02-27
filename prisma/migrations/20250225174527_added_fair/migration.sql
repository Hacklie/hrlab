/*
  Warnings:

  - Added the required column `fair_cover` to the `Fair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fair_logo` to the `Fair` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fair" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "booth_number" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "website" TEXT NOT NULL,
    "fair_logo" TEXT NOT NULL,
    "fair_cover" TEXT NOT NULL
);
INSERT INTO "new_Fair" ("booth_number", "end_date", "id", "name", "start_date", "website") SELECT "booth_number", "end_date", "id", "name", "start_date", "website" FROM "Fair";
DROP TABLE "Fair";
ALTER TABLE "new_Fair" RENAME TO "Fair";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
