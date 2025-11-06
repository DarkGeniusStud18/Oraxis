
import React from 'react';
import { Container } from '@/components/ui/container';
import { MotionDiv } from '@/components/ui/motion-div';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Smart Home Technology",
      excerpt: "Explore how AI and IoT are revolutionizing home automation systems and creating more intuitive living spaces.",
      date: "May 15, 2023",
      author: "David Mitchell",
      category: "Home Automation",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3",
      slug: "future-smart-home-technology"
    },
    {
      id: 2,
      title: "Machine Learning Models for Predictive Maintenance",
      excerpt: "How advanced algorithms are transforming equipment maintenance across industries, reducing downtime and costs.",
      date: "June 22, 2023",
      author: "Sarah Johnson",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3",
      slug: "ml-predictive-maintenance"
    },
    {
      id: 3,
      title: "Building Responsive Web Applications with React",
      excerpt: "Best practices and techniques for creating fast, scalable, and user-friendly web applications.",
      date: "July 10, 2023",
      author: "Michael Wong",
      category: "Full Stack Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3",
      slug: "responsive-web-apps-react"
    },
    {
      id: 4,
      title: "Data Visualization Techniques for Complex Datasets",
      excerpt: "How to transform raw data into meaningful visualizations that drive business insights and decision-making.",
      date: "August 5, 2023",
      author: "Emily Chen",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      slug: "data-visualization-techniques"
    },
    {
      id: 5,
      title: "Embedded Systems in Automotive Technologies",
      excerpt: "The role of embedded systems in modern vehicles and how they're shaping the future of transportation.",
      date: "September 18, 2023",
      author: "Robert Kim",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1625863205040-7348b6c3c502?ixlib=rb-4.0.3",
      slug: "embedded-systems-automotive"
    },
    {
      id: 6,
      title: "Optimizing Cloud Infrastructure for Enterprise Applications",
      excerpt: "Strategies for creating efficient, secure, and scalable cloud architectures for business-critical applications.",
      date: "October 3, 2023",
      author: "James Wilson",
      category: "Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3",
      slug: "optimizing-cloud-infrastructure"
    }
  ];

  return (
    <div className="py-20">
      <Container>
        <MotionDiv animation="slide-up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and updates from the world of technology and digital innovation.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <MotionDiv 
              key={post.id} 
              animation="slide-up" 
              delay={index * 0.1} 
              className="group overflow-hidden rounded-2xl glass hover:shadow-lg transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <span className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-medium">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
