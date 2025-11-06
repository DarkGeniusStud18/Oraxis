import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/ui/container';
import { MotionDiv } from '@/components/ui/motion-div';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Target, Users, Briefcase, FileText, Cpu, Code, Server, Database, MapPin } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const projects = {
    'smart-living': {
      title: 'Smart Living Ecosystem',
      description: 'Integrated home automation system for luxury apartments in San Francisco.',
      fullDescription: 'A comprehensive smart home solution that integrates lighting, climate control, security, entertainment, and energy management into a seamless ecosystem for high-end residential properties.',
      category: 'Home Automation',
      client: 'SkyView Luxury Residences',
      duration: '8 months',
      completionDate: 'March 2023',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3',
      challengeDescription: 'The client needed a fully integrated smart home solution for a new 200-unit luxury apartment complex. The system needed to be intuitive for residents while providing building management with comprehensive monitoring and control capabilities.',
      solutionDescription: 'We designed and implemented a custom smart home ecosystem that included centralized and individual unit controls, voice activation, mobile app access, and integration with building management systems.',
      keyFeatures: [
        'Centralized control system for all home automation functions',
        'Voice-controlled lighting, climate, and entertainment systems',
        'Advanced security with facial recognition and remote monitoring',
        'Energy usage optimization and reporting',
        'Personalized scenes and automation routines',
        'Building-wide management interface for property managers'
      ],
      technologies: [
        'Smart Home Controllers',
        'IoT Sensors and Actuators',
        'Cloud-Based Management Platform',
        'Mobile Applications (iOS/Android)',
        'Voice Assistant Integration',
        'Energy Management Systems'
      ],
      results: [
        '30% reduction in energy consumption across the property',
        'Improved resident satisfaction with 92% approval rating',
        'Enhanced security with 24/7 monitoring and instant alerts',
        'Streamlined building management operations',
        'Increased property value and rental premiums'
      ],
      testimonial: {
        quote: "Bawyronsoft delivered a remarkable smart living solution that has become a key selling point for our luxury residences. The system is intuitive for residents while giving our management team powerful tools for optimizing building operations.",
        author: "Jennifer Reynolds",
        position: "Director of Property Development",
        company: "SkyView Developments"
      },
      relatedServices: ['home-automation', 'embedded-systems', 'ai-solutions']
    },
    'healthtrack-ai': {
      title: 'HealthTrack AI',
      description: 'Machine learning system for predictive healthcare analytics and patient monitoring.',
      fullDescription: 'An advanced machine learning platform that analyzes patient data to predict health risks, optimize treatment plans, and provide real-time monitoring for healthcare providers.',
      category: 'AI & Machine Learning',
      client: 'MediCore Healthcare Network',
      duration: '12 months',
      completionDate: 'November 2023',
      location: 'Boston, MA',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3',
      challengeDescription: 'MediCore needed a solution to leverage their vast patient data to improve preventive care, optimize resource allocation, and enhance treatment outcomes across their network of 15 hospitals and 50+ clinics.',
      solutionDescription: 'We developed HealthTrack AI, a comprehensive machine learning system that processes and analyzes patient data from multiple sources to identify health risks, predict patient outcomes, and provide actionable insights for healthcare providers.',
      keyFeatures: [
        'Predictive analytics for patient risk assessment',
        'Treatment outcome prediction and optimization',
        'Resource allocation and scheduling optimization',
        'Real-time patient monitoring and alerting',
        'Secure integration with existing EMR systems',
        'Customizable dashboards for different healthcare roles'
      ],
      technologies: [
        'Python for Machine Learning (TensorFlow, scikit-learn)',
        'Natural Language Processing for medical records',
        'Secure Cloud Infrastructure',
        'HIPAA-Compliant Data Storage',
        'RESTful APIs for system integration',
        'Real-time Analytics Processing'
      ],
      results: [
        '22% improvement in early diagnosis of high-risk conditions',
        '18% reduction in hospital readmission rates',
        '30% more efficient resource allocation',
        '15% decrease in average treatment costs',
        'Significantly improved patient outcomes across multiple metrics'
      ],
      testimonial: {
        quote: "HealthTrack AI has transformed how we deliver care. The predictive capabilities have allowed us to intervene earlier with at-risk patients, while the resource optimization has made our entire network more efficient. It's been a game-changer for both our staff and patients.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer",
        company: "MediCore Healthcare"
      },
      relatedServices: ['machine-learning', 'data-science', 'ai-solutions']
    },
    'ecosense': {
      title: 'EcoSense Network',
      description: 'IoT-based environmental monitoring system for sustainable agriculture.',
      fullDescription: 'A comprehensive IoT solution that monitors soil conditions, weather patterns, and crop health to optimize agricultural practices, conserve resources, and maximize yields.',
      category: 'Embedded Systems',
      client: 'GreenField Agricultural Cooperative',
      duration: '10 months',
      completionDate: 'July 2023',
      location: 'Central Valley, CA',
      image: 'https://images.unsplash.com/photo-1621634894254-2b024373ee5f?ixlib=rb-4.0.3',
      challengeDescription: 'GreenField Cooperative needed to help their member farms implement precision agriculture techniques to conserve water, reduce chemical usage, and increase crop yields in the face of climate challenges and water restrictions.',
      solutionDescription: 'We developed the EcoSense Network, a scalable IoT system with distributed sensors, automated irrigation controls, and a machine learning backend that provides real-time monitoring and predictive insights for agricultural management.',
      keyFeatures: [
        'Distributed soil moisture, temperature, and nutrient sensors',
        'Weather monitoring and microclimate analysis',
        'Automated precision irrigation controls',
        'Drone integration for aerial crop health assessment',
        'Mobile app for real-time monitoring and alerts',
        'Predictive analytics for optimal planting and harvesting'
      ],
      technologies: [
        'Low-power IoT Sensors and Actuators',
        'LoRaWAN for long-range, low-power connectivity',
        'Solar-powered field stations',
        'Edge computing for local data processing',
        'Cloud-based analytics platform',
        'Machine learning for yield prediction and optimization'
      ],
      results: [
        '35% reduction in water usage across member farms',
        '28% decrease in fertilizer and pesticide application',
        '23% increase in average crop yields',
        'Significant improvement in produce quality',
        'Enhanced ability to adapt to changing weather conditions'
      ],
      testimonial: {
        quote: "The EcoSense Network has revolutionized how our member farms operate. We're using significantly less water and chemicals while producing more and better crops. The system has paid for itself many times over, and the environmental benefits are immense.",
        author: "Maria Gonzalez",
        position: "Executive Director",
        company: "GreenField Agricultural Cooperative"
      },
      relatedServices: ['embedded-systems', 'data-science', 'machine-learning']
    },
    'smart-office': {
      title: 'Smart Office System',
      description: 'Integrated automation solution for modern workspaces with climate control and security.',
      fullDescription: 'A comprehensive smart office platform that enhances workplace productivity, comfort, and security through intelligent automation and monitoring systems.',
      category: 'Home Automation',
      client: 'TechHub Corporate Offices',
      duration: '6 months',
      completionDate: 'January 2023',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      challengeDescription: 'TechHub needed a modern office automation system that would improve energy efficiency, enhance security, optimize space utilization, and create a more comfortable and productive environment for employees across their 15-floor headquarters.',
      solutionDescription: 'We designed and implemented an integrated smart office system with automated climate control, intelligent lighting, access management, workspace reservation, and comprehensive monitoring capabilities.',
      keyFeatures: [
        'Intelligent climate control with zone-based management',
        'Occupancy-based lighting automation',
        'Advanced access control and security monitoring',
        'Workspace utilization tracking and optimization',
        'Meeting room reservation and management system',
        'Energy usage monitoring and optimization'
      ],
      technologies: [
        'IoT sensors and controllers',
        'Central management platform',
        'Mobile app for employee interaction',
        'Building management system integration',
        'Occupancy analytics',
        'Security and access control systems'
      ],
      results: [
        '32% reduction in energy consumption',
        'Enhanced workplace security',
        '27% improved space utilization',
        'Increased employee satisfaction',
        'Streamlined facility management'
      ],
      testimonial: {
        quote: "The smart office system has transformed our workplace into a model of efficiency and comfort. Our employees love the personalized environment, and our facilities team has powerful tools to manage the building. The energy savings alone made this a worthwhile investment.",
        author: "James Wilson",
        position: "Facilities Director",
        company: "TechHub"
      },
      relatedServices: ['home-automation', 'embedded-systems', 'data-science']
    },
    'healthcare-analytics': {
      title: 'Healthcare Analytics Platform',
      description: 'Machine learning system for patient data analysis and treatment optimization.',
      fullDescription: 'A comprehensive analytics platform that processes healthcare data to improve patient outcomes, optimize treatment protocols, and enhance operational efficiency.',
      category: 'Data Science',
      client: 'Northwest Medical Center',
      duration: '9 months',
      completionDate: 'August 2023',
      location: 'Portland, OR',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      challengeDescription: 'Northwest Medical Center needed a data-driven approach to improve patient outcomes, reduce readmissions, optimize resource allocation, and enhance overall operational efficiency across their network.',
      solutionDescription: 'We developed a comprehensive healthcare analytics platform that integrates with existing systems to collect, analyze, and visualize patient and operational data, providing actionable insights for clinical and administrative staff.',
      keyFeatures: [
        'Patient outcome prediction and risk assessment',
        'Treatment protocol effectiveness analysis',
        'Resource allocation and staffing optimization',
        'Readmission risk identification',
        'Clinical pathway optimization',
        'Operational efficiency analysis'
      ],
      technologies: [
        'Machine learning algorithms',
        'Healthcare data integration',
        'HIPAA-compliant data storage',
        'Advanced visualization dashboards',
        'Predictive analytics',
        'Secure API architecture'
      ],
      results: [
        '21% reduction in patient readmissions',
        'Improved treatment outcomes across multiple specialties',
        '18% more efficient resource allocation',
        'Enhanced clinical decision-making',
        'Cost savings through optimized operations'
      ],
      testimonial: {
        quote: "The analytics platform has transformed how we deliver care. We now have data-driven insights that help our clinicians make better decisions and our administrators allocate resources more effectively. It's been an invaluable tool for improving patient outcomes while optimizing our operations.",
        author: "Dr. Sarah Johnson",
        position: "Chief Medical Information Officer",
        company: "Northwest Medical Center"
      },
      relatedServices: ['data-science', 'machine-learning', 'ai-solutions']
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/projects" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
              View All Projects
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-20">
      <Container>
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        
        {/* Hero Section */}
        <MotionDiv animation="slide-up" className="mb-16">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{project.fullDescription}</p>
            </div>
          </div>
        </MotionDiv>
        
        {/* Project Details */}
        <MotionDiv animation="slide-up" delay={0.1} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Briefcase className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">Client</h3>
              </div>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">Duration</h3>
              </div>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">Completed</h3>
              </div>
              <p className="text-muted-foreground">{project.completionDate}</p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">Location</h3>
              </div>
              <p className="text-muted-foreground">{project.location}</p>
            </div>
          </div>
        </MotionDiv>
        
        {/* Challenge and Solution */}
        <MotionDiv animation="slide-up" delay={0.2} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{project.challengeDescription}</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground">{project.solutionDescription}</p>
            </div>
          </div>
        </MotionDiv>
        
        {/* Key Features */}
        <MotionDiv animation="slide-up" delay={0.3} className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-primary mb-4" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
        
        {/* Technologies */}
        <MotionDiv animation="slide-up" delay={0.4} className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </MotionDiv>
        
        {/* Results */}
        <MotionDiv animation="slide-up" delay={0.5} className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Results & Impact</h2>
          <div className="glass rounded-2xl p-8">
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <Target className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionDiv>
        
        {/* Testimonial */}
        <MotionDiv animation="slide-up" delay={0.6} className="mb-16">
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-lg italic mb-4">"{project.testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.position}, {project.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
        
        {/* Related Services */}
        <MotionDiv animation="slide-up" delay={0.7} className="mb-8">
          <h2 className="text-2xl font-bold mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.relatedServices.map((service, index) => {
              const serviceDetails = {
                'home-automation': {
                  title: 'Home Automation',
                  description: 'Smart home solutions for comfort, security, and efficiency.',
                  icon: Cpu
                },
                'full-stack-development': {
                  title: 'Full Stack Development',
                  description: 'End-to-end web application development services.',
                  icon: Code
                },
                'machine-learning': {
                  title: 'Machine Learning',
                  description: 'Advanced ML solutions for pattern recognition and prediction.',
                  icon: Database
                },
                'data-science': {
                  title: 'Data Science',
                  description: 'Transform raw data into valuable business insights.',
                  icon: Database
                },
                'embedded-systems': {
                  title: 'Embedded Systems',
                  description: 'Custom hardware and software integration for specialized computing.',
                  icon: Cpu
                },
                'ai-solutions': {
                  title: 'AI Solutions',
                  description: 'Cutting-edge artificial intelligence implementation.',
                  icon: Cpu
                }
              };
              
              const details = serviceDetails[service as keyof typeof serviceDetails];
              const ServiceIcon = details.icon;
              
              return (
                <Link 
                  key={index} 
                  to={`/services/${service}`}
                  className="p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <ServiceIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{details.title}</h3>
                  <p className="text-muted-foreground">{details.description}</p>
                </Link>
              );
            })}
          </div>
        </MotionDiv>
        
        {/* CTA Section */}
        <MotionDiv animation="slide-up" delay={0.8} className="text-center">
          <div className="glass rounded-3xl p-10 md:p-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Interested in a Similar Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can create a customized solution tailored to your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors inline-flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </MotionDiv>
      </Container>
    </div>
  );
};

export default ProjectDetail;
