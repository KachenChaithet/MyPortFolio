-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "nameproject" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
