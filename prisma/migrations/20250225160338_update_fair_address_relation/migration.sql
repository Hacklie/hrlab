/*
  Warnings:

  - You are about to drop the `AddressType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `addressTypeId` on the `Fair` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AddressType";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "house_number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "fairId" INTEGER NOT NULL,
    CONSTRAINT "Address_fairId_fkey" FOREIGN KEY ("fairId") REFERENCES "Fair" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fair" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "booth_number" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "website" TEXT NOT NULL
);
INSERT INTO "new_Fair" ("booth_number", "end_date", "id", "name", "start_date", "website") SELECT "booth_number", "end_date", "id", "name", "start_date", "website" FROM "Fair";
DROP TABLE "Fair";
ALTER TABLE "new_Fair" RENAME TO "Fair";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Address_fairId_key" ON "Address"("fairId");
