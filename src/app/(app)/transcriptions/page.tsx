'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { generateSalesScript } from '@/ai/flows/generate-sales-script';
import { useToast } from '@/hooks/use-toast';

export default function TranscriptionsPage() {
  const { toast } = useToast();
  const [script, setScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateScript = async () => {
    setIsLoading(true);
    setScript('');
    try {
      const result = await generateSalesScript({
        leadName: 'Potential Client',
        leadInterest: 'high',
        initialMood: 'Neutral',
        productName: 'Realtech',
        productFeatures: 'AI-powered lead nurturing, automated follow-ups, sentiment analysis',
      });
      setScript(result.script);
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
