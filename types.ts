
export interface Book {
  id: number;
  title: string;
  benefit: string;
  // Replace with your actual image file path
  coverImage: string;
  // Replace with your actual Payhip link
  payhipLink: string;
  isBestSeller?: boolean;
  rating?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}