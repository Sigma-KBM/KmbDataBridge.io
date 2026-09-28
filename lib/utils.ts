import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Keeps static public assets working when the site is hosted in a GitHub Pages project subpath. */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
