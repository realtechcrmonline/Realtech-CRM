import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">
            Howdy Analytics
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
