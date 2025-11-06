
import React from 'react';
import { Container } from '@/components/ui/container';
import { MotionDiv } from '@/components/ui/motion-div';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch the article based on the slug
  // For this demo, we'll use hardcoded articles
  const articles = {
    "future-smart-home-technology": {
      title: "The Future of Smart Home Technology",
      date: "May 15, 2023",
      author: "David Mitchell",
      category: "Home Automation",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3",
      content: `
        <p class="mb-4">The smart home industry has evolved significantly over the past decade, transforming from a luxury concept to an increasingly accessible reality for homeowners worldwide. As we look toward the future, several emerging technologies are poised to revolutionize how we interact with our living spaces.</p>
        
        <h2 class="text-2xl font-semibold my-6">The Rise of AI-Powered Home Assistants</h2>
        
        <p class="mb-4">Artificial intelligence is at the forefront of smart home innovation. Today's voice assistants like Amazon's Alexa, Google Assistant, and Apple's Siri represent just the beginning of what's possible. Future AI systems will move beyond simple command responses to truly understanding context, preferences, and patterns.</p>
        
        <p class="mb-4">Imagine a home that doesn't just respond to commands but anticipates your needs before you express them. Your AI assistant might notice you typically turn up the heat when you arrive home on cold evenings and automatically adjust the temperature as you approach. Or it might recognize patterns in your lighting preferences based on activities and time of day, creating the perfect ambiance without explicit instructions.</p>
        
        <h2 class="text-2xl font-semibold my-6">IoT Integration and Interconnectivity</h2>
        
        <p class="mb-4">The Internet of Things (IoT) continues to expand, with more devices becoming "smart" and connected. The challenge for the future isn't just adding more connected devices but improving how they work together.</p>
        
        <p class="mb-4">We're moving toward a more cohesive ecosystem where disparate devices communicate seamlessly, regardless of manufacturer. Industry standards like Matter (previously CHIP) are working to create a universal language for smart home devices, reducing compatibility issues and simplifying the user experience.</p>
        
        <h2 class="text-2xl font-semibold my-6">Energy Efficiency and Sustainability</h2>
        
        <p class="mb-4">Smart homes of the future will play a crucial role in energy conservation. Advanced systems will go beyond simple scheduling to incorporate real-time data from utilities, weather forecasts, and usage patterns to optimize energy consumption.</p>
        
        <p class="mb-4">Smart thermostats will work with smart windows and automated shades to maximize natural heating and cooling. Solar integration will become more sophisticated, with AI systems managing when to use, store, or sell back energy based on current needs and grid conditions.</p>
        
        <h2 class="text-2xl font-semibold my-6">Health and Wellness Integration</h2>
        
        <p class="mb-4">The COVID-19 pandemic accelerated interest in home health technologies, a trend that will continue to grow. Future smart homes will incorporate more health-monitoring capabilities, from air quality sensors that trigger purification systems to lighting that automatically adjusts to support circadian rhythms.</p>
        
        <p class="mb-4">We'll also see more integration with wearable health devices, allowing your home to respond to your physiological state. Imagine your home detecting elevated stress levels from your smartwatch and automatically adjusting lighting, playing calming music, or even starting a guided meditation on your display surfaces.</p>
        
        <h2 class="text-2xl font-semibold my-6">The Challenge of Privacy and Security</h2>
        
        <p class="mb-4">As homes become more connected and collect more data about our habits and preferences, privacy and security concerns will need to be addressed more comprehensively. Future smart home systems will need to incorporate privacy by design, with transparent data practices and robust security measures.</p>
        
        <p class="mb-4">Local processing of sensitive data, rather than cloud-based solutions, may become more prevalent for privacy-conscious consumers. Blockchain and other decentralized technologies might also play a role in creating secure but interoperable smart home systems.</p>
        
        <h2 class="text-2xl font-semibold my-6">Conclusion</h2>
        
        <p class="mb-4">The smart home of the future won't just be about having more connected devices; it will be about creating truly intelligent environments that enhance our comfort, health, and sustainability while respecting our privacy and security needs. As these technologies continue to evolve, we can expect our homes to become more intuitive, responsive, and seamlessly integrated into our daily lives.</p>
      `
    },
    "ml-predictive-maintenance": {
      title: "Machine Learning Models for Predictive Maintenance",
      date: "June 22, 2023",
      author: "Sarah Johnson",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3",
      content: `
        <p class="mb-4">Predictive maintenance powered by machine learning is transforming how businesses approach equipment upkeep across industries. By analyzing patterns and anomalies in operational data, these systems can forecast failures before they occur, allowing for planned interventions that minimize downtime and reduce maintenance costs.</p>
        
        <h2 class="text-2xl font-semibold my-6">The Evolution from Reactive to Predictive Maintenance</h2>
        
        <p class="mb-4">Traditionally, maintenance approaches fell into two categories: reactive (fixing equipment after it breaks) or preventive (performing scheduled maintenance based on time or usage). Predictive maintenance represents the next evolutionary step—maintenance performed based on the actual condition of the equipment and data-driven predictions about when failures might occur.</p>
        
        <p class="mb-4">This approach optimizes maintenance scheduling, reduces unnecessary parts replacement, and extends equipment lifespan. Most importantly, it minimizes unexpected downtime, which can cost manufacturers tens of thousands of dollars per hour in some industries.</p>
        
        <h2 class="text-2xl font-semibold my-6">Key Machine Learning Approaches for Predictive Maintenance</h2>
        
        <p class="mb-4">Several machine learning techniques have proven effective for predictive maintenance applications:</p>
        
        <p class="mb-4"><strong>Regression Analysis:</strong> These models predict time-to-failure or remaining useful life (RUL) of components based on operational variables and historical failure data.</p>
        
        <p class="mb-4"><strong>Classification Models:</strong> Used to categorize equipment conditions or predict specific types of failures that might occur within a given timeframe.</p>
        
        <p class="mb-4"><strong>Anomaly Detection:</strong> These models identify unusual patterns in sensor data that may indicate developing problems, even when the exact failure mode isn't known beforehand.</p>
        
        <p class="mb-4"><strong>Deep Learning:</strong> Neural networks, particularly recurrent neural networks (RNNs) and long short-term memory (LSTM) networks, excel at finding complex patterns in time-series data from sensors and can capture subtle degradation indicators.</p>
        
        <h2 class="text-2xl font-semibold my-6">Data Requirements and Challenges</h2>
        
        <p class="mb-4">Effective predictive maintenance models require robust data, which presents several challenges:</p>
        
        <p class="mb-4"><strong>Sensor Infrastructure:</strong> Equipment must be properly instrumented with sensors to collect relevant operational data like vibration, temperature, pressure, acoustics, and electrical metrics.</p>
        
        <p class="mb-4"><strong>Historical Failure Data:</strong> Models need examples of previous failures to learn patterns, but paradoxically, well-maintained equipment may have few failure instances to learn from.</p>
        
        <p class="mb-4"><strong>Data Quality:</strong> Sensor data can be noisy, contain outliers, or have missing values that need preprocessing before analysis.</p>
        
        <p class="mb-4"><strong>Class Imbalance:</strong> Failures are (hopefully) rare events, creating heavily imbalanced datasets where normal operation data far outweighs failure data.</p>
        
        <h2 class="text-2xl font-semibold my-6">Real-World Applications and Results</h2>
        
        <p class="mb-4">Across industries, companies are reporting significant benefits from predictive maintenance implementations:</p>
        
        <p class="mb-4"><strong>Manufacturing:</strong> A major automotive manufacturer reduced unplanned downtime by 20% and maintenance costs by 15% by implementing ML-based predictive maintenance for robotic assembly equipment.</p>
        
        <p class="mb-4"><strong>Energy:</strong> Wind farm operators use vibration analysis and machine learning to predict gearbox and generator failures in turbines, increasing energy production by reducing unexpected outages.</p>
        
        <p class="mb-4"><strong>Transportation:</strong> Airlines and railway companies monitor engine parameters to predict component failures, improving fleet availability and passenger safety while reducing maintenance costs.</p>
        
        <p class="mb-4"><strong>Infrastructure:</strong> Predictive models help anticipate failures in water treatment facilities, electrical grid components, and building systems, preventing service disruptions.</p>
        
        <h2 class="text-2xl font-semibold my-6">Implementation Considerations</h2>
        
        <p class="mb-4">Organizations looking to implement predictive maintenance should consider several factors:</p>
        
        <p class="mb-4"><strong>Start Small:</strong> Begin with critical equipment where failures have significant consequences and where good sensor data is available.</p>
        
        <p class="mb-4"><strong>Hybrid Approaches:</strong> Combine domain expertise with data-driven models for the best results. Subject matter experts can provide invaluable insights about failure modes and relevant parameters.</p>
        
        <p class="mb-4"><strong>Continuous Learning:</strong> Maintenance models should be designed to improve over time as more data becomes available and as feedback from technicians validates or corrects predictions.</p>
        
        <p class="mb-4"><strong>ROI Calculation:</strong> Clearly define metrics to measure success, considering not just maintenance cost reductions but also the value of increased uptime and extended equipment life.</p>
        
        <h2 class="text-2xl font-semibold my-6">The Future of Predictive Maintenance</h2>
        
        <p class="mb-4">As technologies continue to evolve, several trends are shaping the future of predictive maintenance:</p>
        
        <p class="mb-4"><strong>Edge Computing:</strong> Processing data directly on or near equipment reduces latency and allows for real-time anomaly detection without constant cloud connectivity.</p>
        
        <p class="mb-4"><strong>Digital Twins:</strong> Virtual replicas of physical equipment can simulate different operating conditions and predict how equipment might fail under various scenarios.</p>
        
        <p class="mb-4"><strong>Augmented Reality:</strong> Maintenance technicians can use AR interfaces that overlay predictive insights and maintenance instructions onto their view of the equipment.</p>
        
        <p class="mb-4"><strong>Federated Learning:</strong> Different organizations or facilities can train models collaboratively without sharing sensitive operational data, creating more robust predictive models.</p>
        
        <h2 class="text-2xl font-semibold my-6">Conclusion</h2>
        
        <p class="mb-4">Machine learning for predictive maintenance represents one of the most valuable applications of AI in industry today. By transforming maintenance from a reactive necessity to a strategic, data-driven practice, organizations can achieve significant operational improvements while extending the useful life of critical assets. As sensor technology becomes more affordable and machine learning techniques more accessible, predictive maintenance will become standard practice across industries, fundamentally changing how we approach equipment reliability and maintenance.</p>
      `
    },
    // Additional articles would be defined similarly
    "responsive-web-apps-react": {
      title: "Building Responsive Web Applications with React",
      date: "July 10, 2023",
      author: "Michael Wong",
      category: "Full Stack Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3",
      content: `<p class="mb-4">This article explores modern techniques for building responsive React applications...</p>`
    },
    "data-visualization-techniques": {
      title: "Data Visualization Techniques for Complex Datasets",
      date: "August 5, 2023",
      author: "Emily Chen",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      content: `<p class="mb-4">Learn how to transform raw data into meaningful visualizations...</p>`
    },
    "embedded-systems-automotive": {
      title: "Embedded Systems in Automotive Technologies",
      date: "September 18, 2023",
      author: "Robert Kim",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1625863205040-7348b6c3c502?ixlib=rb-4.0.3",
      content: `<p class="mb-4">The role of embedded systems in modern vehicles and how they're shaping the future of transportation...</p>`
    },
    "optimizing-cloud-infrastructure": {
      title: "Optimizing Cloud Infrastructure for Enterprise Applications",
      date: "October 3, 2023",
      author: "James Wilson",
      category: "Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3",
      content: `<p class="mb-4">Strategies for creating efficient, secure, and scalable cloud architectures...</p>`
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Article Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
              Return to Blog
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-20">
      <Container>
        <Link to="/blog" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <MotionDiv animation="slide-up" className="mb-8">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <button className="ml-auto flex items-center gap-1 hover:text-white">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv animation="slide-up" delay={0.1} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10"></div>
                  <div>
                    <div className="font-medium">{article.author}</div>
                    <div className="text-sm text-muted-foreground">Specialist in {article.category}</div>
                  </div>
                </div>
              </div>
              
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Related Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {["Home Automation", "Machine Learning", "Full Stack Development", "Data Science", "Embedded Systems", "Cloud Infrastructure"]
                    .filter(cat => cat !== article.category)
                    .slice(0, 4)
                    .map((category, index) => (
                      <Link 
                        key={index}
                        to={`/blog?category=${category}`}
                        className="px-3 py-1 bg-background/80 hover:bg-primary/10 rounded-full text-sm"
                      >
                        {category}
                      </Link>
                    ))
                  }
                </div>
              </div>
              
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                <ScrollArea className="h-64">
                  <ul className="space-y-2 text-sm">
                    {article.content.match(/<h2 class="text-2xl[^>]*>([^<]+)<\/h2>/g)?.map((match, index) => {
                      const title = match.replace(/<h2[^>]*>/, '').replace('</h2>', '');
                      return (
                        <li key={index}>
                          <a 
                            href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </div>
          </div>
        </MotionDiv>
      </Container>
    </div>
  );
};

export default BlogArticle;
