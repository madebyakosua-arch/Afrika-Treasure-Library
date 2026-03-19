
import React, { useState, useEffect, useCallback } from 'react';
import KentePattern from './KentePattern';
import StarRating from './StarRating';

const reviews = [
  {
    title: "Underrated gem",
    author: "A. Osei",
    date: "Verified Customer",
    product: "Ashanti Kingdom Book",
    quote: "I really loved the concept behind the Ashanti Kingdom book. Even with all the children's books out there it's rare to see one that presents this topic in such an approachable way for young children. As a second generation immigrant myself, I love the author's commitment to helping young ones understand and appreciate their own cultural heritage in an engaging way.",
    rating: 5,
  },
  {
    title: "Truly Inspirational!",
    author: "Reviewed in the United States",
    date: "March 13, 2025",
    product: "Ibrahim Traoré: A Revolutionary Leader Paperback",
    quote: "I loved reading this book. I found it very inspirational. It has many valuable lessons on themes of the importance of education, having dreams, desiring to help others, being brave and being a leader. The words are easy to read and understand yet so very compelling. The artwork presented were also quite neat, too. Added bonus was the fact that some free resources were thrown in at the end, so the readers can continue their learning and do related fun exercises. This is truly a great book for kids of all ages really.",
    rating: 5,
  },
  {
    title: "A Lifesaver for Busy Parents",
    author: "Reviewed in the UK",
    date: "February 28, 2025",
    product: "Digital Worksheets Bundle",
    quote: "The printable worksheets have been a lifesaver. They are so easy to download and print. My kids (5 and 7) are actually excited to do them, and it gives me a structured way to teach them about their African history without hours of prep. Absolutely brilliant!",
    rating: 5,
  },
  {
    title: "Beautiful and High Quality",
    author: "Reviewed in Canada",
    date: "February 20, 2025",
    product: "Family Leaders Bundle",
    quote: "The quality of the illustrations and the storytelling is top-notch. These aren't just books; they are keepsakes. We bought the family bundle and it's worth every penny. It feels so good to have such beautiful, high-quality resources that represent us.",
    rating: 5,
  }
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

    const updateMedia = useCallback(() => {
        if (typeof window !== 'undefined') {
            setIsDesktop(window.innerWidth >= 768);
            setCurrentIndex(0);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [updateMedia]);

    const reviewsToShow = isDesktop ? 2 : 1;
    const lastPossibleIndex = reviews.length - reviewsToShow;
    const canNavigate = reviews.length > reviewsToShow;

    const next = () => {
        if (!canNavigate) return;
        const newIndex = currentIndex >= lastPossibleIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const prev = () => {
        if (!canNavigate) return;
        const newIndex = currentIndex === 0 ? lastPossibleIndex : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const slidePercentage = isDesktop ? 50 : 100;
    const transformStyle = { transform: `translateX(-${currentIndex * slidePercentage}%)` };

    return (
        <section id="reviews" className="py-16 md:py-24 bg-brand-charcoal/5 relative overflow-hidden">
            <KentePattern className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-multiply" />
            <div className="container mx-auto px-6 text-center relative">
                <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal font-heading">Loved by Families Worldwide</h2>
                <div className="mt-12 relative max-w-5xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={transformStyle}>
                            {reviews.map((review, index) => (
                                <div key={index} className="flex-shrink-0 w-full md:w-1/2 p-4">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg text-left flex flex-col border border-black/5 h-full">
                                        <StarRating rating={review.rating} className="text-xl" />
                                        <h3 className="text-xl font-bold font-heading text-brand-charcoal mt-2">{review.title}</h3>
                                        <div className="text-sm text-gray-500 my-3">
                                            <p>{review.author} • {review.date}</p>
                                            {review.product && <p className="mt-1"><span className="font-semibold">Product:</span> {review.product}</p>}
                                        </div>
                                        <p className="text-gray-700 italic flex-grow text-base">&quot;{review.quote}&quot;</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {canNavigate && (
                        <>
                            <button 
                                onClick={prev}
                                className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-brand-green text-white rounded-full p-3 shadow-xl z-20 transition-all hover:scale-110 hover:bg-brand-red"
                                aria-label="Previous testimonial"
                            >
                                <ion-icon name="arrow-back-outline" className="text-2xl block"></ion-icon>
                            </button>
                            
                            <button 
                                onClick={next}
                                className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-brand-green text-white rounded-full p-3 shadow-xl z-20 transition-all hover:scale-110 hover:bg-brand-red"
                                aria-label="Next testimonial"
                            >
                                <ion-icon name="arrow-forward-outline" className="text-2xl block"></ion-icon>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
