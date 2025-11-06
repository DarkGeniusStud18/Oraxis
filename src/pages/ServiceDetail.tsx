
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/ui/container';
import { MotionDiv } from '@/components/ui/motion-div';
import { ArrowLeft, CheckCircle, Clock, User, Users, Briefcase, PenTool, Cpu, Code, Server, Database, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const services = {
    'home-automation': {
      title: 'Home Automation',
      description: 'Create a seamless smart home experience with our custom automation solutions for comfort, security, and energy efficiency.',
      icon: Cpu,
      heroImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3',
      features: [
        'Centralized control of lighting, HVAC, security, and entertainment systems',
        'Voice-controlled home automation integration',
        'Energy usage monitoring and optimization',
        'Custom scene creation for different moods and occasions',
        'Remote access and control via smartphone apps',
        'Automated routines based on time, presence, or environmental factors'
      ],
      benefits: [
        'Enhanced comfort and convenience',
        'Improved energy efficiency and reduced utility bills',
        'Increased home security',
        'Time savings through automation',
        'Increased property value'
      ],
      process: [
        'Initial consultation and needs assessment',
        'System design and planning',
        'Hardware selection and procurement',
        'Professional installation and configuration',
        'Software integration and testing',
        'User training and ongoing support'
      ],
      caseStudies: [
        {
          title: 'Luxury Residence Automation',
          description: 'Complete smart home implementation for a 5,000 sq ft residence in San Francisco, including lighting, climate, security, and entertainment systems integration.',
          results: '30% energy savings and seamless control of all home systems through a unified interface.'
        },
        {
          title: 'Multi-Unit Residential Complex',
          description: 'Smart apartment solutions for a 200-unit residential complex, focusing on security, energy management, and resident convenience.',
          results: 'Enhanced resident satisfaction and 25% reduction in building management costs.'
        }
      ]
    },
    'full-stack-development': {
      title: 'Full Stack Development',
      description: 'End-to-end software development services delivering robust web and mobile applications built with cutting-edge technologies.',
      icon: Code,
      heroImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3',
      features: [
        'Comprehensive web application development',
        'Native and cross-platform mobile app development',
        'API design and development',
        'Database architecture and management',
        'Responsive front-end design and implementation',
        'Backend systems development and integration'
      ],
      benefits: [
        'Cohesive development process from a single team',
        'Consistent codebase and architecture',
        'Faster development and deployment cycles',
        'Seamless integration between frontend and backend',
        'Reduced communication overhead and development costs'
      ],
      process: [
        'Requirements gathering and analysis',
        'Architecture planning and design',
        'Iterative development with regular client feedback',
        'Comprehensive testing (unit, integration, system)',
        'Deployment and configuration',
        'Ongoing maintenance and support'
      ],
      caseStudies: [
        {
          title: 'E-commerce Platform Overhaul',
          description: 'Complete redesign and development of an e-commerce platform for a retail company with 500,000+ monthly users.',
          results: '45% increase in conversion rate and 60% faster page load times.'
        },
        {
          title: 'Healthcare Management System',
          description: 'Development of a comprehensive healthcare management solution for a network of clinics, including patient records, scheduling, and billing.',
          results: 'Streamlined operations, 30% reduction in administrative work, and improved patient satisfaction.'
        }
      ]
    },
    'machine-learning': {
      title: 'Machine Learning',
      description: 'Advanced ML solutions that empower your business with predictive analytics, pattern recognition, and intelligent automation.',
      icon: Database,
      heroImage: 'https://images.unsplash.com/photo-1567729099705-1a2cd59b38c1?ixlib=rb-4.0.3',
      features: [
        'Predictive modeling and forecasting',
        'Natural language processing (NLP)',
        'Computer vision and image recognition',
        'Recommendation systems',
        'Anomaly detection and fraud prevention',
        'Custom ML model development and training'
      ],
      benefits: [
        'Data-driven decision making',
        'Automation of complex analytical tasks',
        'Identification of hidden patterns and insights',
        'Improved accuracy of predictions over time',
        'Competitive advantage through advanced analytics'
      ],
      process: [
        'Business problem definition',
        'Data collection, cleaning, and preparation',
        'Feature engineering and selection',
        'Model development, training, and validation',
        'Deployment to production environments',
        'Monitoring and continuous improvement'
      ],
      caseStudies: [
        {
          title: 'Predictive Maintenance Solution',
          description: 'Implementation of ML-based predictive maintenance system for a manufacturing company with extensive equipment assets.',
          results: '70% reduction in unplanned downtime and 25% decrease in maintenance costs.'
        },
        {
          title: 'Customer Behavior Analysis',
          description: 'Development of a customer behavior prediction model for a financial services company to improve targeting and retention.',
          results: '35% improvement in marketing campaign effectiveness and 20% increase in customer retention.'
        }
      ]
    },
    'data-science': {
      title: 'Data Science',
      description: 'Transform raw data into valuable insights with our comprehensive data analysis, visualization, and management services.',
      icon: Database,
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      features: [
        'Data collection and integration from diverse sources',
        'Data cleaning, transformation, and preprocessing',
        'Statistical analysis and hypothesis testing',
        'Advanced data visualization and dashboarding',
        'Big data processing and analytics',
        'Business intelligence and reporting solutions'
      ],
      benefits: [
        'Improved decision-making through data insights',
        'Identification of business opportunities and risks',
        'Enhanced operational efficiency',
        'Better understanding of customer behavior',
        'Data-driven strategy development'
      ],
      process: [
        'Business objectives definition',
        'Data assessment and acquisition',
        'Data cleaning and preparation',
        'Exploratory data analysis',
        'Insights generation and visualization',
        'Implementation of recommendations'
      ],
      caseStudies: [
        {
          title: 'Retail Sales Analytics',
          description: 'Comprehensive data analysis for a retail chain to optimize inventory, pricing, and store layouts.',
          results: '15% increase in sales and 20% reduction in inventory holding costs.'
        },
        {
          title: 'Healthcare Patient Flow Analysis',
          description: 'Data science project to analyze and optimize patient flow in a large hospital system.',
          results: 'Reduced wait times by 40% and improved resource allocation efficiency by 25%.'
        }
      ]
    },
    'embedded-systems': {
      title: 'Embedded Systems',
      description: 'Custom hardware and software integration for IoT devices, control systems, and specialized computing solutions.',
      icon: Cpu,
      heroImage: 'https://images.unsplash.com/photo-1625863205040-7348b6c3c502?ixlib=rb-4.0.3',
      features: [
        'IoT device design and development',
        'Firmware development and optimization',
        'Real-time operating system (RTOS) implementation',
        'Hardware-software co-design',
        'Sensor integration and data acquisition',
        'Low-power design and battery optimization'
      ],
      benefits: [
        'Custom solutions tailored to specific requirements',
        'Optimized performance for dedicated tasks',
        'Reduced power consumption for portable devices',
        'Improved reliability and durability',
        'Seamless integration with existing systems'
      ],
      process: [
        'Requirements specification and analysis',
        'Hardware selection and architecture design',
        'Firmware and software development',
        'Prototype development and testing',
        'Production design and optimization',
        'Deployment and support'
      ],
      caseStudies: [
        {
          title: 'Industrial Monitoring System',
          description: 'Development of an embedded monitoring system for industrial equipment with real-time analytics and alerts.',
          results: 'Early detection of equipment issues, reducing downtime by 65% and extending equipment lifespan.'
        },
        {
          title: 'Smart Agricultural Solution',
          description: 'IoT-based system for monitoring soil conditions, weather, and crop health for precision agriculture.',
          results: '30% increase in crop yield and 25% reduction in water and fertilizer usage.'
        }
      ]
    },
    'ai-solutions': {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions that optimize operations, enhance customer experiences, and drive innovation.',
      icon: Cpu,
      heroImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3',
      features: [
        'Custom AI strategy development',
        'Machine learning model implementation',
        'Natural language processing and understanding',
        'Computer vision applications',
        'AI-powered automation solutions',
        'Intelligent chatbots and virtual assistants'
      ],
      benefits: [
        'Automation of repetitive and complex tasks',
        'Enhanced decision-making capabilities',
        'Improved customer experiences',
        'Increased operational efficiency',
        'Competitive advantage through innovation'
      ],
      process: [
        'Business needs assessment',
        'AI strategy development',
        'Data preparation and model training',
        'Solution development and integration',
        'Testing and validation',
        'Deployment and continuous improvement'
      ],
      caseStudies: [
        {
          title: 'AI-Powered Customer Service',
          description: 'Implementation of an AI-based customer service solution with natural language understanding for a telecommunications company.',
          results: '50% reduction in call handling time and 40% increase in first-call resolution rate.'
        },
        {
          title: 'Visual Quality Control System',
          description: 'Development of a computer vision system for quality control in manufacturing processes.',
          results: '95% accuracy in defect detection, leading to a 70% reduction in quality-related returns.'
        }
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Service Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">The service you're looking for doesn't exist or has been removed.</p>
            <Link to="/services" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
              View All Services
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="py-20">
      <Container>
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
        
        {/* Hero Section */}
        <MotionDiv animation="slide-up" className="mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                  <ServiceIcon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl">{service.description}</p>
            </div>
          </div>
        </MotionDiv>
        
        {/* Features Section */}
        <MotionDiv animation="slide-up" delay={0.1} className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-primary mb-4" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
        
        {/* Benefits Section */}
        <MotionDiv animation="slide-up" delay={0.2} className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-${1550745165 + (slug?.length || 0)}?ixlib=rb-4.0.3`} 
                alt="Service benefits" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </MotionDiv>
        
        {/* Process Section */}
        <MotionDiv animation="slide-up" delay={0.3} className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Our Process</h2>
          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-center glass rounded-xl p-5 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <span className="font-semibold text-primary">{index + 1}</span>
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
        
        {/* Case Studies Section */}
        <MotionDiv animation="slide-up" delay={0.4} className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
              <div key={index} className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                <div className="px-4 py-3 bg-primary/5 rounded-xl">
                  <h4 className="font-medium text-primary mb-1">Results:</h4>
                  <p>{caseStudy.results}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>
        
        {/* CTA Section */}
        <MotionDiv animation="slide-up" delay={0.5} className="text-center">
          <div className="glass rounded-3xl p-10 md:p-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Implement {service.title}?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you harness the power of {service.title.toLowerCase()} for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/projects" 
                className="px-8 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors inline-flex items-center justify-center"
              >
                View Related Projects
              </Link>
            </div>
          </div>
        </MotionDiv>
      </Container>
    </div>
  );
};

export default ServiceDetail;
