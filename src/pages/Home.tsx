import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Home as HomeIcon, Cpu, Database, Server, BrainCircuit, Layers } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-div';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProjectCard from '@/components/ProjectCard';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv animation="slide-up" className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Innovative Digital Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Transforming Ideas Into <span className="text-primary">Smart Reality</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                We specialize in home automation, software development, and AI solutions that make your life and business smarter, more efficient, and future-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/services" 
                  className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                  onClick={scrollToTop}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors inline-flex items-center justify-center"
                  onClick={scrollToTop}
                >
                  Get in Touch
                </Link>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                <div className="flex -space-x-3">
                  <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>500+</strong> Satisfied clients worldwide
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv 
              animation="slide-up" 
              delay={0.2}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 glass rounded-2xl p-6 backdrop-blur-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Smart home system" 
                  className="w-full h-auto rounded-xl"
                />
                
                <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <HomeIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Smart Home</div>
                      <div className="text-xs text-muted-foreground">Automation Systems</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 glass rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <BrainCircuit className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">AI & ML</div>
                      <div className="text-xs text-muted-foreground">Intelligent Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <MotionDiv animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cutting-Edge Solutions for Modern Challenges</h2>
            <p className="text-lg text-muted-foreground">
              From smart homes to advanced AI implementations, we provide comprehensive tech solutions tailored to your specific needs.
            </p>
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={HomeIcon}
              title="Home Automation"
              description="Create a seamless smart home experience with our custom automation solutions for comfort, security, and energy efficiency."
              delay={0.1}
            />
            <ServiceCard
              icon={Layers}
              title="Full Stack Development"
              description="End-to-end software development services delivering robust web and mobile applications built with cutting-edge technologies."
              delay={0.2}
            />
            <ServiceCard
              icon={BrainCircuit}
              title="Machine Learning"
              description="Advanced ML solutions that empower your business with predictive analytics, pattern recognition, and intelligent automation."
              delay={0.3}
            />
            <ServiceCard
              icon={Database}
              title="Data Science"
              description="Transform raw data into valuable insights with our comprehensive data analysis, visualization, and management services."
              delay={0.4}
            />
            <ServiceCard
              icon={Server}
              title="Cloud Infrastructure"
              description="Scalable, secure, and reliable cloud solutions custom-designed to optimize your business operations and growth."
              delay={0.5}
            />
            <ServiceCard
              icon={Cpu}
              title="AI Solutions"
              description="Cutting-edge artificial intelligence solutions that optimize operations, enhance customer experiences, and drive innovation."
              delay={0.6}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-primary font-medium hover:underline"
              onClick={scrollToTop}
            >
              View all services
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding bg-foreground/5">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv animation="slide-up" className="relative">
              <div className="relative z-10 glass rounded-2xl p-6 backdrop-blur-xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Bawyronsoft team" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.2}>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation Driven by Expertise and Passion</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bawyronsoft is a leading digital company founded on the principles of innovation, quality, and client satisfaction. Our team of experts brings decades of combined experience in creating cutting-edge solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Expert Team</h4>
                    <p className="text-muted-foreground">Engineers, developers, and designers with specialized knowledge in various tech domains.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Cutting-Edge Technology</h4>
                    <p className="text-muted-foreground">We use the latest technologies and methodologies to deliver future-proof solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Client-Centered Approach</h4>
                    <p className="text-muted-foreground">Every project is a collaboration, ensuring solutions that perfectly match your needs.</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <MotionDiv animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Work That Makes Us Proud</h2>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Smart Living Ecosystem"
              description="Integrated home automation system for luxury apartments in San Francisco."
              category="Home Automation"
              image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              link="/projects/smart-living"
              delay={0.1}
            />
            <ProjectCard
              title="HealthTrack AI"
              description="Machine learning system for predictive healthcare analytics and patient monitoring."
              category="AI & Machine Learning"
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              link="/projects/healthtrack-ai"
              delay={0.2}
            />
            <ProjectCard
              title="EcoSense Network"
              description="IoT-based environmental monitoring system for sustainable agriculture."
              category="Embedded Systems"
              image="https://images.unsplash.com/photo-1621634894254-2b024373ee5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              link="/projects/ecosense"
              delay={0.3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View all projects
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-foreground/5">
        <div className="page-container">
          <MotionDiv animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              The success of our clients is our success. Hear what they have to say about working with us.
            </p>
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Bawyronsoft transformed our home with their automation system. The attention to detail and quality of implementation was outstanding."
              author="Emily Chen"
              role="Homeowner"
              company="San Francisco"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              quote="Their machine learning solution revolutionized how we analyze patient data. The ROI has been incredible, and their support is always top-notch."
              author="Dr. Michael Rodriguez"
              role="CTO"
              company="HealthFirst Inc."
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              quote="Working with the Bawyronsoft team was seamless. They delivered our complex web application on time and exceeded our expectations."
              author="Sarah Johnson"
              role="Product Manager"
              company="TechNova"
              rating={5}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <MotionDiv 
            animation="slide-up" 
            className="rounded-3xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-primary/5 transition-opacity opacity-100 group-hover:opacity-100"></div>
            
            <div className="py-16 px-6 md:px-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our expertise in home automation, software development, and AI can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                  onClick={scrollToTop}
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors inline-flex items-center justify-center"
                  onClick={scrollToTop}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
};

export default Home;
