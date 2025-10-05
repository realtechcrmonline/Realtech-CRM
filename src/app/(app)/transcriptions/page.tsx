import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function TranscriptionsPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Transcriptions</h1>
        <p className="text-muted-foreground">Saved call scripts will appear here.</p>
      </div>

      <Card className="flex flex-col min-h-[400px]">
        <CardHeader>
          <CardTitle>Call Scripts</CardTitle>
          <CardDescription>Review the live scripts generated during calls.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <FileText className="mx-auto h-12 w-12" />
            <p className="mt-4">No transcriptions available yet.</p>
            <p className="text-sm">Transcripts from AI agent calls will be saved here.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
