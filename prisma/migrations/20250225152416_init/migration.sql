/*
  Warnings:

  - The primary key for the `AddressType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `AddressType` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Fair` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `addressTypeId` on the `Fair` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `Fair` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AddressType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "house_number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "state" TEXT NOT NULL
);
INSERT INTO "new_AddressType" ("city", "house_number", "id", "state", "street", "zip") SELECT "city", "house_number", "id", "state", "street", "zip" FROM "AddressType";
DROP TABLE "AddressType";
ALTER TABLE "new_AddressType" RENAME TO "AddressType";
CREATE TABLE "new_Fair" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "booth_number" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "website" TEXT NOT NULL,
    "addressTypeId" INTEGER NOT NULL,
    CONSTRAINT "Fair_addressTypeId_fkey" FOREIGN KEY ("addressTypeId") REFERENCES "AddressType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Fair" ("addressTypeId", "booth_number", "end_date", "id", "name", "start_date", "website") SELECT "addressTypeId", "booth_number", "end_date", "id", "name", "start_date", "website" FROM "Fair";
DROP TABLE "Fair";
ALTER TABLE "new_Fair" RENAME TO "Fair";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
