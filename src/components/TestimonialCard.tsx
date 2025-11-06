
import { Star } from 'lucide-react';
import { MotionDiv } from './ui/motion-div';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
  delay?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating,
  image,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <MotionDiv
      delay={delay}
      animation="slide-up"
      className="p-6 rounded-2xl glass"
    >
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-foreground mb-6">"{quote}"</blockquote>
      <div className="flex items-center">
        {image ? (
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <img src={image} alt={author} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <span className="text-primary font-medium text-sm">
              {author.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
        )}
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default TestimonialCard;
