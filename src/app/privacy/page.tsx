import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose prose-stone mx-auto max-w-4xl dark:prose-invert">
            <h1>Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>
              Realtech ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered CRM dashboard and services (the "Services").
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Service includes:
            </p>
            <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Service.</li>
                <li><strong>Lead Data:</strong> Information about your leads that you upload to our platform, such as names, contact information, and any notes you provide. We process this data on your behalf to provide the Services.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Service, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Service.</li>
            </ul>

            <h2>3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:
            </p>
            <ul>
                <li>Create and manage your account.</li>
                <li>Provide the core functionality of our AI agent, including making calls and analyzing sentiment.</li>
                <li>Improve our Services and train our AI models. All data used for training is anonymized and aggregated to protect individual privacy.</li>
                <li>Communicate with you about your account or our services.</li>
                <li>Comply with legal and regulatory requirements.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We do not share your personally identifiable information or Lead Data with third parties except in the following situations:
            </p>
            <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, hosting services, and customer service.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>

            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2>6. Your Rights Under US Law</h2>
            <p>
              Depending on your state of residence, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the contact information provided below.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at privacy@realtech.com.
            </p>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
