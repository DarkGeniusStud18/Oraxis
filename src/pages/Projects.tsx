
import React from 'react';
import { Container } from '@/components/ui/container';
import ProjectCard from '@/components/ProjectCard';
import { MotionDiv } from '@/components/ui/motion-div';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Office System',
      description: 'Integrated automation solution for modern workspaces with climate control and security.',
      category: 'Home Automation',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      link: '/projects/smart-office'
    },
    {
      title: 'Healthcare Analytics Platform',
      description: 'Machine learning system for patient data analysis and treatment optimization.',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      link: '/projects/healthcare-analytics'
    },
    {
      title: 'E-commerce Mobile App',
      description: 'Full-stack mobile application with real-time inventory and payment processing.',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae',
      link: '/projects/ecommerce-app'
    },
    {
      title: 'Industrial IoT Solution',
      description: 'Embedded systems for manufacturing equipment monitoring and predictive maintenance.',
      category: 'Embedded Systems',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758',
      link: '/projects/industrial-iot'
    },
    {
      title: 'Financial Prediction Model',
      description: 'Advanced machine learning algorithms for market trend analysis and forecasting.',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
      link: '/projects/financial-prediction'
    },
    {
      title: 'Smart Home Hub',
      description: 'Centralized control system for residential automation and energy management.',
      category: 'Home Automation',
      image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7',
      link: '/projects/smart-home'
    }
  ];

  return (
    <div className="py-20">
      <Container>
        <MotionDiv animation="slide-up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions across various domains and industries.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
