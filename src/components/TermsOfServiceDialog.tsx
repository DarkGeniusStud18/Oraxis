
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from '@/components/ui/scroll-area';

interface TermsOfServiceDialogProps {
  children: React.ReactNode;
}

const TermsOfServiceDialog = ({ children }: TermsOfServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Terms of Service</DialogTitle>
          <DialogDescription>
            Last updated: June 1, 2023
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] mt-4 pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="font-semibold text-lg mb-2">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By accessing or using Bawyronsoft's services, website, or any applications made available by Bawyronsoft (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">2. Changes to Terms</h3>
              <p className="text-muted-foreground">
                Bawyronsoft reserves the right to modify these Terms at any time. We will provide notice of any material changes through our Services or by other means. Your continued use of the Services after such modifications will constitute your acknowledgment and agreement to the modified Terms.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">3. Services Description</h3>
              <p className="text-muted-foreground mb-3">
                Bawyronsoft provides various technology services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Home automation solutions</li>
                <li>Full-stack software development</li>
                <li>Machine learning implementation</li>
                <li>Data science services</li>
                <li>Embedded systems development</li>
                <li>Cloud infrastructure setup and management</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                The specific details of services provided will be outlined in individual client agreements.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">4. User Accounts</h3>
              <p className="text-muted-foreground">
                Some Services may require you to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify Bawyronsoft immediately of any unauthorized use of your account.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">5. Intellectual Property Rights</h3>
              <p className="text-muted-foreground mb-3">
                Unless otherwise indicated, the Services and all content and other materials contained therein, including, without limitation, the Bawyronsoft logo and all designs, text, graphics, pictures, information, data, software, sound files, and other files (collectively, "Content"), are the proprietary property of Bawyronsoft or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                Client-specific deliverables will be governed by the terms specified in individual client agreements.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">6. User-Provided Content</h3>
              <p className="text-muted-foreground">
                You may provide content, including feedback, suggestions, or other materials ("User Content"). By providing User Content, you grant Bawyronsoft a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in connection with providing and improving our Services.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">7. Prohibited Conduct</h3>
              <p className="text-muted-foreground mb-3">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the Services for any illegal purpose or in violation of any laws</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to the Services or related systems</li>
                <li>Collect or harvest any personally identifiable information from the Services</li>
                <li>Use the Services to transmit any malware, spyware, or other malicious code</li>
                <li>Impersonate or misrepresent your affiliation with any person or entity</li>
              </ul>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">8. Warranty Disclaimer</h3>
              <p className="text-muted-foreground">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. BAWYRONSOFT DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">9. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                IN NO EVENT SHALL BAWYRONSOFT, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">10. Indemnification</h3>
              <p className="text-muted-foreground">
                You agree to defend, indemnify, and hold harmless Bawyronsoft, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">11. Governing Law</h3>
              <p className="text-muted-foreground">
                These Terms shall be governed by the laws of the State of California, without respect to its conflict of laws principles. You agree to submit to the personal and exclusive jurisdiction of the courts located in San Francisco County, California.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">12. Termination</h3>
              <p className="text-muted-foreground">
                Bawyronsoft may terminate or suspend your access to all or part of the Services, without notice, for conduct that Bawyronsoft believes violates these Terms or is harmful to other users of the Services, Bawyronsoft, or third parties, or for any other reason.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">13. Contact Information</h3>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Bawyronsoft<br />
                123 Innovation Street<br />
                Tech Valley, CA 94103<br />
                Email: legal@bawyronsoft.com<br />
                Phone: +1 (415) 555-2671
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceDialog;
