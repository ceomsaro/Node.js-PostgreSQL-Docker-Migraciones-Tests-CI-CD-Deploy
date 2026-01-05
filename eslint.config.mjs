import pluginJs from "@eslint/js";
import globals from "globals"; // Necesitamos importar la librería de globales

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      // Definimos los entornos (Node y Jest)
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "error"
    },
  },
];