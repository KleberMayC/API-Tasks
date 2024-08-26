/*
  Warnings:

  - You are about to drop the column `concluida` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `concluida`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pendente';
