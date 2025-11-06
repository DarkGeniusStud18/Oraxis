
import React from 'react';
import { Container } from '@/components/ui/container';
import { MotionDiv } from '@/components/ui/motion-div';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20">
      <Container>
        <MotionDiv animation="slide-up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach out to us with any questions or inquiries. We're here to help and would love to hear from you.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <MotionDiv animation="slide-right" className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Our Location</h3>
                <p className="text-muted-foreground">123 Innovation Street, Tech Valley, BA 94103</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Email Us</h3>
                <p className="text-muted-foreground">info@bawyronsoft.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="h-64 w-full rounded-xl overflow-hidden mt-8">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Integration</p>
              </div>
            </div>
          </MotionDiv>
          
          <MotionDiv animation="slide-left" delay={0.2}>
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
