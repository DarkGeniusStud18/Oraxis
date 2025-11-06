
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import PrivacyPolicyDialog from './PrivacyPolicyDialog';
import TermsOfServiceDialog from './TermsOfServiceDialog';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border/30">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-flex items-center mb-5">
              <div className="relative h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">B</span>
              </div>
              <span className="ml-2 text-xl font-semibold tracking-tight">Bawyronsoft</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Creating innovative digital solutions for homes and businesses with expertise in automation, full-stack development, and AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home Automation', slug: 'home-automation' },
                { name: 'Full Stack Development', slug: 'full-stack-development' },
                { name: 'Machine Learning', slug: 'machine-learning' },
                { name: 'Data Science', slug: 'data-science' },
                { name: 'Cloud Infrastructure', slug: 'cloud-infrastructure' },
                { name: 'AI Solutions', slug: 'ai-solutions' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center group"
                    onClick={scrollToTop}
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="ml-3 text-sm text-muted-foreground">
                  123 Innovation Street, Tech Valley, CA 94103, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+14155552671" className="ml-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  +1 (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@bawyronsoft.com" className="ml-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@bawyronsoft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bawyronsoft. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <PrivacyPolicyDialog>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
            </PrivacyPolicyDialog>
            <TermsOfServiceDialog>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
            </TermsOfServiceDialog>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
