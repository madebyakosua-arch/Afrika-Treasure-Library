
import { Book, FAQItem } from './types';

// =================================================================
// PASTE YOUR BOOK DETAILS HERE
// =================================================================
export const BEST_SELLERS_BOOKS: Book[] = [
  { 
    id: 1, 
    title: 'Kwame Nkrumah: The Father of Ghana’s Independence (African History Book for Kids)', 
    benefit: "Follow Kwame Nkrumah's inspiring journey from a small village to leading Ghana to independence in this beautifully illustrated storybook. Perfect for ages 5-7, it teaches children about courage, leadership, and the power of never giving up on your dreams.", 
    coverImage: 'https://i.ibb.co/84gZNWNn/Product-Photo-1-Kwame.png', 
    payhipLink: 'https://payhip.com/your-product-1', 
    isBestSeller: true, 
    rating: 5 
  },
  { 
    id: 2, 
    title: 'The Ashanti Kingdom: The Brave People of West Africa', 
    benefit: 'Discover the legendary Ashanti Kingdom in this captivating book designed to introduce young readers to one of Africa’s most powerful and inspiring civilizations. Through colorful stories and fascinating facts, children will explore a land of bravery and rich traditions while learning valuable lessons about courage and unity.', 
    coverImage: 'https://i.ibb.co/5XXDRrjF/New-Project-3.png', 
    payhipLink: 'https://payhip.com/your-product-2', 
    rating: 4.5 
  },
  { 
    id: 3, 
    title: 'Yaa Asantewaa: The Brave Queen Who defended her people', 
    benefit: 'Introduce your child to the inspiring story of Yaa Asantewaa, the fearless Queen Mother of the Ashanti Kingdom who stood up for her people. This beautifully written book for ages 5-7 takes young readers on a journey through courage and leadership while exploring the rich traditions and culture of Ghana.', 
    coverImage: 'https://i.ibb.co/20C3ypXF/Yaa-Asantewaa-Mockup-3.png', 
    payhipLink: 'https://payhip.com/your-product-3', 
    rating: 5 
  },
];

// =================================================================
// PASTE YOUR PAYHIP LINKS FOR CATEGORIES AND BUNDLES HERE
// =================================================================
export const PAYHIP_LINKS = {
  ages3to5: 'https://payhip.com/your-collection-3-5',
  ages6to8: 'https://payhip.com/your-collection-6-8',
  ages9to12: 'https://payhip.com/your-collection-9-12',
  bestSellers: 'https://payhip.com/your-bestsellers-collection',
  starterPack: 'https://payhip.com/your-free-starter-pack',
  starterBundle: 'https://payhip.com/your-starter-bundle',
  leadersBundle: 'https://payhip.com/your-leaders-bundle',
  familyBundle: 'https://payhip.com/your-family-bundle',
  books: 'https://payhip.com/your-books-collection',
  worksheetsAndGames: 'https://payhip.com/your-worksheets-collection',
  bundles: 'https://payhip.com/your-bundles-collection'
};

export const FAQ_DATA: FAQItem[] = [
    {
      question: "What ages are these resources for?",
      answer: "Our resources are designed for a wide range of ages, from 3 to 12. We have specific collections tailored for ages 3-5, 5-7, and 9-12 to ensure the content is engaging and age-appropriate."
    },
    {
      question: "Are the downloads instant?",
      answer: "Yes! As soon as you complete your purchase, you'll receive an email with a secure link to download your digital products instantly. You can start learning right away."
    },
    {
      question: "Can I print these at home?",
      answer: "Absolutely. All our digital resources are provided as high-quality PDF files, formatted to be easily printed on standard home printers (A4 or US Letter size)."
    },
    {
      question: "Do you offer refunds on digital products?",
      answer: "Due to the instant nature of digital downloads, we are unable to offer refunds. However, if you experience any issues with your files, please contact us and we'll be happy to help."
    },
    {
      question: "Can schools use these resources?",
      answer: "Yes! We love to see our resources in classrooms. Please contact us for information on school licensing and bulk purchase options to bring our materials to your students."
    }
];