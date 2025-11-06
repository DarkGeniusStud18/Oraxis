
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/container';
import { MotionDiv } from '@/components/ui/motion-div';
import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const PrivacyPolicy = () => {
  return (
    <div className="py-20">
      <Container>
        <Link to="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <MotionDiv animation="slide-up" className="glass rounded-2xl p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 1, 2023</p>

          <ScrollArea className="pr-4">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  At Bawyronsoft ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-3">
                  We may collect several types of information from and about users of our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Personal information:</strong> Such as your name, email address, phone number, company name, and job title when you fill out forms or contact us.
                  </li>
                  <li>
                    <strong>Technical data:</strong> Such as your IP address, browser type and version, time zone setting, operating system, and device information.
                  </li>
                  <li>
                    <strong>Usage data:</strong> Information about how you use our website and services, including page views, clicks, and time spent.
                  </li>
                  <li>
                    <strong>Marketing preferences:</strong> Your preferences in receiving marketing communications from us.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To allow you to participate in interactive features</li>
                  <li>To provide customer support</li>
                  <li>To analyze usage patterns and improve our website and services</li>
                  <li>To send you promotional materials and information about new services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-3">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="text-muted-foreground">
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until you delete them) to provide you with a more personalized experience on our website.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-3">
                  We may share your personal information in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>With service providers:</strong> We may share your information with third-party vendors and service providers that perform services for us or on our behalf.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
                  </li>
                  <li>
                    <strong>With your consent:</strong> We may disclose your personal information for any other purpose with your consent.
                  </li>
                  <li>
                    <strong>For legal purposes:</strong> We may disclose your information where required by law or if we believe that such action is necessary to comply with a legal obligation.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">7. Your Data Protection Rights</h2>
                <p className="text-muted-foreground mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The right to access your personal data</li>
                  <li>The right to rectify inaccurate or incomplete data</li>
                  <li>The right to erase your personal data</li>
                  <li>The right to restrict the processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your data</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside the United States and choose to provide information to us, please note that we transfer the information to the United States and process it there.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or our practices, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  Bawyronsoft<br />
                  123 Innovation Street<br />
                  Tech Valley, CA 94103<br />
                  Email: privacy@bawyronsoft.com<br />
                  Phone: +1 (415) 555-2671
                </p>
              </section>
            </div>
          </ScrollArea>
        </MotionDiv>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
