
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { MotionDiv } from './ui/motion-div';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  delay?: number;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
  slug,
  delay = 0
}: BlogCardProps) => {
  return (
    <MotionDiv
      delay={delay}
      animation="slide-up"
      className="group rounded-2xl overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-white/90 text-foreground px-3 py-1 text-xs font-medium rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6 bg-background">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-primary"
        >
          Read More
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </MotionDiv>
  );
};

export default BlogCard;
