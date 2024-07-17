-- CreateTable
CREATE TABLE "Cole" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cole_bar_code_key" ON "Cole"("bar_code");
