
import { MotionDiv } from '@/components/ui/motion-div';
import { Code, Globe, Users, Award, Zap, BookOpen, ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-foreground/5 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="page-container">
          <MotionDiv animation="slide-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Team Behind Bawyronsoft</h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of engineers, developers, and visionaries dedicated to creating technology that makes the world smarter and more connected.
            </p>
          </MotionDiv>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv animation="slide-up">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold mb-6">To Make Technology Work For People</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Bawyronsoft, we're on a mission to create intelligent, accessible, and intuitive technology solutions that enhance how people live and work. We believe that technology should simplify life, not complicate it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="ml-3 text-muted-foreground">
                    Creating technology that adapts to human needs, not the other way around
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="ml-3 text-muted-foreground">
                    Building solutions that are accessible to everyone, regardless of technical expertise
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="ml-3 text-muted-foreground">
                    Fostering innovation that makes a positive impact on individuals and communities
                  </p>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.2}>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Vision
              </span>
              <h2 className="text-3xl font-bold mb-6">A Smarter, More Connected Future</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We envision a future where homes, businesses, and cities are interconnected through intelligent systems that enhance efficiency, sustainability, and quality of life for everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="ml-3 text-muted-foreground">
                    Homes that intuitively adapt to their residents' needs and preferences
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="ml-3 text-muted-foreground">
                    Businesses empowered by data-driven insights and automated processes
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="ml-3 text-muted-foreground">
                    Communities connected through sustainable, intelligent infrastructure
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-foreground/5">
        <div className="page-container">
          <MotionDiv animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Principles That Guide Us</h2>
            <p className="text-lg text-muted-foreground">
              Our core values shape everything we do, from how we build our products to how we interact with our clients and partners.
            </p>
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionDiv animation="slide-up" delay={0.1} className="glass p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries to find novel solutions to complex problems. Innovation is in our DNA.
              </p>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.2} className="glass p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in everything we do, from code quality to client communication.
              </p>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.3} className="glass p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe the best solutions emerge from diverse perspectives working together toward common goals.
              </p>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.4} className="glass p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty, transparency, and ethical responsibility in every aspect of our business.
              </p>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.5} className="glass p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptability</h3>
              <p className="text-muted-foreground">
                We embrace change and continuously evolve our skills, processes, and technologies to stay at the forefront.
              </p>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.6} className="glass p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to creating solutions that contribute to a more sustainable and environmentally responsible future.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv animation="slide-up" className="relative order-2 lg:order-1">
              <div className="relative z-10 glass rounded-2xl p-6 backdrop-blur-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Bawyronsoft office" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </MotionDiv>
            
            <MotionDiv animation="slide-up" delay={0.2} className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Garage to Global</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bawyronsoft began in 2015 when a group of tech enthusiasts decided to combine their expertise in software development, electronics, and design to create solutions that would make technology more accessible and useful.
              </p>
              <div className="space-y-8 mb-6">
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute top-0 left-[-8.5px] w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2015</span>
                  </div>
                  <h4 className="font-medium">The Beginning</h4>
                  <p className="text-muted-foreground text-sm">Founded in a small garage with a big vision to create accessible smart home technology.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute top-0 left-[-8.5px] w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2017</span>
                  </div>
                  <h4 className="font-medium">First Major Project</h4>
                  <p className="text-muted-foreground text-sm">Implemented our flagship smart home system for a luxury apartment complex in San Francisco.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute top-0 left-[-8.5px] w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2019</span>
                  </div>
                  <h4 className="font-medium">Expansion into AI</h4>
                  <p className="text-muted-foreground text-sm">Broadened our expertise to include machine learning and AI solutions for various industries.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute top-0 left-[-8.5px] w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2023</span>
                  </div>
                  <h4 className="font-medium">Global Presence</h4>
                  <p className="text-muted-foreground text-sm">Opened offices in multiple countries and served over 500 clients worldwide.</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                Today, we continue to grow and evolve, but our fundamental goal remains the same: to create technology that makes a positive difference in how people live and work.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-foreground/5">
        <div className="page-container">
          <MotionDiv 
            animation="slide-up" 
            className="rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>
            
            <div className="py-16 px-6 md:px-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're looking for a technology partner or interested in career opportunities, we'd love to connect with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                >
                  Get in Touch
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
        </div>
      </section>
    </>
  );
};

export default About;
