import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function RecordingsPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Recordings</h1>
        <p className="text-muted-foreground">Call recordings will be stored here.</p>
      </div>

       <Card className="flex flex-col min-h-[400px]">
        <CardHeader>
          <CardTitle>Call Recordings</CardTitle>
          <CardDescription>Listen to recordings of calls made by the AI agent.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Mic className="mx-auto h-12 w-12" />
            <p className="mt-4">No recordings available yet.</p>
            <p className="text-sm">Recordings from AI agent calls will be saved here.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
