/*
  Warnings:

  - You are about to drop the `Year` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Year";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Production" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "production" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    CONSTRAINT "Production_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
