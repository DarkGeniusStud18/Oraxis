
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MotionDiv } from './ui/motion-div';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  delay?: number;
}

const ProjectCard = ({ title, description, category, image, link, delay = 0 }: ProjectCardProps) => {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        <span className="absolute top-4 left-4 bg-white/90 text-foreground px-3 py-1 text-xs font-medium rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6 bg-background">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-sm font-medium text-primary"
        >
          View Project
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
