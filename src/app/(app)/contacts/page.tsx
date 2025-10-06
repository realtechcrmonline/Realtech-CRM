import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function ContactsPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Contacts</h1>
        <p className="text-muted-foreground">Your imported contacts will appear here.</p>
      </div>

       <Card className="flex flex-col min-h-[400px]">
        <CardHeader>
          <CardTitle>Your Contacts</CardTitle>
          <CardDescription>A list of all your imported contacts.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Users className="mx-auto h-12 w-12" />
            <p className="mt-4">No contacts available yet.</p>
            <p className="text-sm">Import your contacts from the dashboard to get started.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
