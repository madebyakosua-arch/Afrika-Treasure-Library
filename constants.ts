
import { Book, FAQItem } from './types';

// =================================================================
// PASTE YOUR BOOK DETAILS HERE
// =================================================================
export const BEST_SELLERS_BOOKS: Book[] = [
  { 
    id: 1, 
    title: 'Kwame Nkrumah: The Father of Ghana’s Independence (African History Book for Kids)', 
    benefit: "Empower your child to believe in their own potential as they witness a small-town boy rise to lead a nation to freedom. This story transforms a history lesson into a lifelong lesson on vision, resilience, and the power of dreaming big.", 
    coverImage: 'https://i.ibb.co/84gZNWNn/Product-Photo-1-Kwame.png', 
    payhipLink: 'https://store.afrikatreasurelibrary.com/b/LAyjf', 
    isBestSeller: true, 
    rating: 5 
  },
  { 
    id: 2, 
    title: 'The Ashanti Kingdom: The Brave People of West Africa', 
    benefit: "Give your child the gift of a strong cultural identity and an unshakeable sense of belonging. By exploring the unity and bravery of the Ashanti people, they'll discover a rich heritage that serves as a powerful foundation for their own confidence.", 
    coverImage: 'https://i.ibb.co/5XXDRrjF/New-Project-3.png', 
    payhipLink: 'https://store.afrikatreasurelibrary.com/b/GvNny', 
    rating: 4.5 
  },
  { 
    id: 3, 
    title: 'Yaa Asantewaa: The Brave Queen Who defended her people', 
    benefit: "Watch your daughter's confidence grow as she learns about the fearless Queen who led an army to defend her people. This empowering story inspires young readers to stand tall, find their voice, and lead with courage in their own lives.", 
    coverImage: 'https://i.ibb.co/20C3ypXF/Yaa-Asantewaa-Mockup-3.png', 
    payhipLink: 'https://store.afrikatreasurelibrary.com/b/ge14q', 
    rating: 5 
  },
];

// =================================================================
// PASTE YOUR PAYHIP LINKS FOR CATEGORIES AND BUNDLES HERE
// =================================================================
export const PAYHIP_LINKS = {
  ages3to5: 'https://store.afrikatreasurelibrary.com/',
  ages6to8: 'https://store.afrikatreasurelibrary.com/',
  ages9to12: 'https://store.afrikatreasurelibrary.com/',
  bestSellers: 'https://store.afrikatreasurelibrary.com/',
  starterPack: 'https://store.afrikatreasurelibrary.com/',
  starterBundle: 'https://store.afrikatreasurelibrary.com/',
  leadersBundle: 'https://store.afrikatreasurelibrary.com/',
  familyBundle: 'https://store.afrikatreasurelibrary.com/',
  books: 'https://store.afrikatreasurelibrary.com/',
  worksheetsAndGames: 'https://store.afrikatreasurelibrary.com/',
  bundles: 'https://store.afrikatreasurelibrary.com/'
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