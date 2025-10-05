'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function TranscriptionsPage() {
  const { toast } = useToast();
  const [script, setScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateScript = async () => {
    setIsLoading(true);
    setScript('');
    try {
      // In a real application, this would call an AI flow.
      await new Promise(resolve => setTimeout(resolve, 1500));
      setScript(`AI Agent: "Hello, is this Potential Client? I'm calling from Realtech. I noticed you showed some interest in our AI-powered lead nurturing tools. I know you're busy, so I'll be brief. Our platform helps agents automate follow-ups and analyze sentiment to close more deals. Would you be open to receiving a short email with more details?"`);
    } catch (error) {
      console.error('Failed to generate script:', error);
      toast({
        variant: 'destructive',
        title: 'AI Error',
        description: 'Failed to generate a sales script. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Transcriptions</h1>
        <p className="text-muted-foreground">Generate and review AI-powered sales scripts.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI Sales Script Generator</CardTitle>
              <CardDescription>Generate a tailored sales script for a potential client.</CardDescription>
            </div>
            <Button onClick={handleGenerateScript} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate New Script
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoading && (
              <div className="flex items-center justify-center rounded-md border min-h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {!isLoading && (
               <Textarea
                readOnly
                value={script || 'Click "Generate New Script" to see an example of an AI-generated call script.'}
                placeholder="Your generated script will appear here..."
                className="min-h-[300px] text-base"
              />
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
