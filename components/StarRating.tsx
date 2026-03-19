
import React from 'react';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = '' }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={`flex text-brand-gold ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <ion-icon key={`full-${i}`} name="star"></ion-icon>
      ))}
      {halfStar && <ion-icon key="half" name="star-half"></ion-icon>}
      {[...Array(emptyStars)].map((_, i) => (
        <ion-icon key={`empty-${i}`} name="star-outline"></ion-icon>
      ))}
    </div>
  );
};

export default StarRating;
