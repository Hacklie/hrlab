-- CreateTable
CREATE TABLE "Fair" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "booth_number" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "website" TEXT NOT NULL,
    "addressTypeId" TEXT NOT NULL,
    CONSTRAINT "Fair_addressTypeId_fkey" FOREIGN KEY ("addressTypeId") REFERENCES "AddressType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AddressType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "house_number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "state" TEXT NOT NULL
);
