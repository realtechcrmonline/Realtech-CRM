import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose prose-stone mx-auto max-w-4xl dark:prose-invert">
            <h1>Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By using our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services. These Terms apply to all users of our platform, including real estate professionals and their clients.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Realtech ("we," "us," or "our") provides an AI-powered CRM dashboard for the real estate industry. Our services include lead management, appointment scheduling, AI-driven communication scripts, call recording, and sentiment analysis (the "Services"). The Services are designed to assist real estate professionals in managing client interactions more efficiently.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access most features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
            </p>

            <h2>4. User Data and Privacy</h2>
            <p>
              You retain all rights to the data you upload to our platform, including lead information and contact details ("User Data"). By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and transmit User Data as necessary to provide and improve the Services. Our use of your personal information is governed by our <a href="/privacy">Privacy Policy</a>.
            </p>
            
            <h2>5. Intellectual Property</h2>
            <p>
              The Services and their original content, features, and functionality are and will remain the exclusive property of Realtech and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Realtech.
            </p>

            <h2>6. Prohibited Activities</h2>
            <p>
              You agree not to use the Services for any unlawful purpose or in any way that could harm our platform or its users. This includes, but is not limited to: uploading malicious software, attempting to gain unauthorized access to our systems, or using the Service to harass, abuse, or harm another person.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Realtech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice before any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at contact@realtech.com.
            </p>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
