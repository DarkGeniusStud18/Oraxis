
import React from 'react';
import { Container } from '@/components/ui/container';
import ServiceCard from '@/components/ServiceCard';
import { Code, Cpu, Database, HomeIcon, Server, BrainCircuit } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-div';

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: 'Home Automation',
      description: 'Smart home solutions that make everyday living more convenient, secure, and energy-efficient.',
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web and mobile applications built with modern technologies and frameworks.',
    },
    {
      icon: Database,
      title: 'Machine Learning',
      description: 'Custom AI solutions that analyze data patterns to make predictions and enhance decision-making.',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Transform raw data into actionable insights through advanced analytics and visualization.',
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Scalable and resilient cloud architectures that support your business applications.',
    },
    {
      icon: BrainCircuit,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for business optimization and innovation.',
    },
  ];

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="py-20">
      <Container>
        <MotionDiv animation="slide-up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide cutting-edge technology solutions to help businesses thrive in the digital age.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
