import { defineConfig, globalIgnores } from "eslint/config";

import globals from "globals";

import tseslint from "typescript-eslint";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import html from "eslint-plugin-html";
import css from "@eslint/css";

export default defineConfig([
    globalIgnores(["dist", "node_modules", "public", "coverage"]),
    {
        files: ["**/*.js", "**/*.mjs"],
        extends: [tseslint.configs.disableTypeChecked],
    },
    // JavaScript / TypeScript / React
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
            //react.configs.recommended,
            //react.configs.vite,
            //react.configs.flat.recommended,
            //         reactHooks.configs.flat.recommended,
            //         reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2022,
            globals: { ...globals.browser, ...globals.es2022 },
            parserOptions: {
                project: ["./tsconfig.json", "./tsconfig.*.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: { react: { version: "detect" } },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            ...reactRefresh.configs.vite.rules,
        },
    },

    // HTML
    {
        files: ["**/*.html"],
        plugins: { html },
        // extends: [html.configs.recommended],
    },

    // CSS
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        rules: {
            "css/no-duplicate-imports": "error",
        },
    },

    // SCSS is handled by stylelint
]);
