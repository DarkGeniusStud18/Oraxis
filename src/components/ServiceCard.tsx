
import { LucideIcon } from 'lucide-react';
import { MotionDiv } from './ui/motion-div';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <MotionDiv 
      delay={delay} 
      animation="slide-up"
      className="group p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </MotionDiv>
  );
};

export default ServiceCard;
