import Link from "next/link";
import { Logo } from "@/components/icons";

export function LandingFooter() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Logo className="h-8 w-8 text-primary" />
            <div>
              <div className="font-headline text-lg font-bold leading-tight">
                Realtech
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Powered by Howdy Analytics
              </div>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Realtech. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
