-- CreateTable
CREATE TABLE `Form` (
    `id` VARCHAR(191) NOT NULL,
    `heading` VARCHAR(191) NOT NULL,
    `cardOneTitle` VARCHAR(191) NOT NULL,
    `cardOneDesc` VARCHAR(191) NOT NULL,
    `cardTwoTitle` VARCHAR(191) NOT NULL,
    `cardTwoDesc` VARCHAR(191) NOT NULL,
    `cardThreeTitle` VARCHAR(191) NOT NULL,
    `cardThreeDesc` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `video` VARCHAR(191) NOT NULL,
    `gigFile` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
