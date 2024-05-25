import tailwindConfigFile from "tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

export const tailwindConfig = resolveConfig(tailwindConfigFile);
