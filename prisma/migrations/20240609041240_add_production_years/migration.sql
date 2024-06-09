/*
  Warnings:

  - You are about to drop the `Production_End_Year` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Production_Start_Year` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Production_End_Year";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Production_Start_Year";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Production" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    CONSTRAINT "Production_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
