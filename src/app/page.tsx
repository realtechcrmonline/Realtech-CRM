import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const featureImage1 = PlaceHolderImages.find(p => p.id === 'feature-1');
  const featureImage2 = PlaceHolderImages.find(p => p.id === 'feature-2');

  const highlights = [
    { icon: <CheckCircle2 className="h-6 w-6 text-primary" />, text: "Automate busywork, boost productivity" },
    { icon: <Zap className="h-6 w-6 text-primary" />, text: "Simplified real estate workflows" },
    { icon: <Users className="h-6 w-6 text-primary" />, text: "Connect with more clients, stress-free" },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <LandingHeader />
      <main className="flex-1">
        <section className="relative pt-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center pt-24 pb-12">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Contact Management,
                  <br />
                  <span className="text-primary">Effortlessly Automated.</span>
                </h1>
                <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
                  Welcome to Howdy Analytics. Upload your lead sheet, set your preferences, and let our AI manage reminders, responses, and client nurturing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="https://www.instagram.com/howdyanalytics/" target="_blank">
                      Start Smarter Selling
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    priority
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {highlights.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4 p-4 rounded-lg">
                  {item.icon}
                  <p className="text-lg font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Focus on What Matters Most</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Spend less time on administrative tasks and more on showing properties, closing deals, and celebrating your wins.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                {featureImage1 && (
                  <Image
                    src={featureImage1.imageUrl}
                    alt={featureImage1.description}
                    fill
                    className="object-cover"
                    data-ai-hint={featureImage1.imageHint}
                  />
                )}
              </div>
              <div className="space-y-4">
                <h3 className="font-headline text-2xl font-bold">Intelligent Automation at Your Fingertips</h3>
                <p className="text-muted-foreground">
                  From lead sheet to nurtured client, Howdy Analytics handles the repetitive tasks. Our AI-powered system sends timely reminders and personalized follow-ups, so you never miss an opportunity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Automated lead communication management.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Personalized client nurturing suggestions.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Streamlined appointment scheduling and task assignment.</span></li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 md:order-2">
                <h3 className="font-headline text-2xl font-bold">Connect and Convert with Confidence</h3>
                <p className="text-muted-foreground">
                  Build stronger client relationships with intelligent insights. Howdy Analytics assesses engagement levels and suggests the next best actions, helping you connect with more clients, stress-free.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Visualize productivity with our insightful dashboard.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Set your communication preferences and let the AI adapt.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Gain back hours of your week to focus on closing deals.</span></li>
                </ul>
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg md:order-1">
                {featureImage2 && (
                   <Image
                    src={featureImage2.imageUrl}
                    alt={featureImage2.description}
                    fill
                    className="object-cover"
                    data-ai-hint={featureImage2.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground rounded-lg p-8 md:p-12 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Experience Effortless Contact Management</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                Join agents who are selling smarter, not harder. Take the next step toward a more productive and profitable future with Howdy Analytics.
              </p>
              <Button size="lg" asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="https://www.linkedin.com/company/howdyanalytics" target="_blank">
                  Try Howdy Analytics Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
