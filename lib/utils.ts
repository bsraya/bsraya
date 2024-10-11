import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHeadings(text: string) {
  let headings: { [key: string]: string[] } = {};
  let match = null;
  const regex = /\#{2,6}\s(.*)$/gm;
  let currentKey = null;
  let currentArray = [];

  while ((match = regex.exec(text)) !== null) {
    if (match[0].startsWith("## ")) {
      currentKey = match[0].replace("## ", "").trim();
      headings[currentKey] = [];
      currentArray = headings[currentKey];
    } else if (match[0].startsWith("###")) {
      let subheading = match[0].replace("### ", "").trim();
      currentArray.push(subheading);
    }
  }
  return headings;
}