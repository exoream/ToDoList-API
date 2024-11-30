/*
  Warnings:

  - You are about to drop the column `deadline` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `category` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `deadline`,
    DROP COLUMN `file`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `priority` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` VARCHAR(191) NOT NULL;
