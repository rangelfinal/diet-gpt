-- CreateTable
CREATE TABLE "PromptResult" (
    "id" SERIAL NOT NULL,
    "prompt" TEXT NOT NULL,
    "context" TEXT,
    "uiSchema" TEXT NOT NULL,
    "formSchema" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PromptResult_pkey" PRIMARY KEY ("id")
);
