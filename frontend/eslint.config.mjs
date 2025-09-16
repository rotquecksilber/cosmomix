import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Подключаем конфиги от Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Добавляем кастомные правила
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // ✅ Ставить точку с запятой
      "semi": ["error", "always"],

      // ✅ Перенос строки (например, Unix стиль)
      "linebreak-style": ["error", "unix"],

      // ✅ Использовать 2 пробела для отступов
      "indent": ["error", 2],

      // ✅ Одинарные кавычки
      "quotes": ["error", "single"],

      // ✅ Удалять лишние пробелы
      "no-trailing-spaces": "error",

      // ✅ Добавлять перевод строки в конце файла
      "eol-last": ["error", "always"],
    },
  },
];

export default eslintConfig;
