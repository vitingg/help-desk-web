import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Desativei o "verbatimModuleSyntax": false no tsconfig.app pra isso funcionar
export function cn(...inputs:  ClassValue[]) {
  return twMerge(clsx(inputs));
}
