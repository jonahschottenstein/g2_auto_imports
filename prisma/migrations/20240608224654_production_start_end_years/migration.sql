/*
  Warnings:

  - You are about to drop the `Production` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Production";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Production_Start_Year" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "production_start_year" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    CONSTRAINT "Production_Start_Year_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Production_End_Year" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "production_end_year" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    CONSTRAINT "Production_End_Year_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
