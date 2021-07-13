-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "background_colour" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text_colour" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "start_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "break_duration" INTEGER NOT NULL,
    "employee_id" INTEGER,
    "role_id" INTEGER,
    FOREIGN KEY ("employee_id") REFERENCES "Employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("role_id") REFERENCES "Role" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
