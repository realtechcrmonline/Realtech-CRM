import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function TemplatesPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Email Templates</h1>
        <p className="text-muted-foreground">Your email templates will be stored here.</p>
      </div>

       <Card className="flex flex-col min-h-[400px]">
        <CardHeader>
          <CardTitle>Email Templates</CardTitle>
          <CardDescription>A list of your saved email templates.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Mail className="mx-auto h-12 w-12" />
            <p className="mt-4">No templates available yet.</p>
            <p className="text-sm">Create and manage your email templates here.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
