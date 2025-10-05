'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateSalesScript } from '@/ai/flows/generate-sales-script';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const sampleLeads = [
  { name: 'Potential Client', interest: 'high', mood: 'Positive' },
  { name: 'Busy Executive', interest: 'medium', mood: 'Neutral' },
  { name: 'Skeptical Buyer', interest: 'low', mood: 'Negative' },
];

export default function TranscriptionsPage() {
  const { toast } = useToast();
  const [script, setScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLead, setSelectedLead] = useState(sampleLeads[0]);

  const handleGenerateScript = async () => {
    setIsLoading(true);
    setScript('');
    try {
      const result = await generateSalesScript({
        leadName: selectedLead.name,
        leadInterest: selectedLead.interest,
        initialMood: selectedLead.mood,
        productName: "Realtech AI",
        productFeatures: "Automated lead nurturing, sentiment analysis, and dynamic script generation.",
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>AI Sales Script Generator</CardTitle>
              <CardDescription>Generate a tailored sales script for a potential client.</CardDescription>
            </div>
            <div className='flex items-center gap-2 w-full sm:w-auto'>
              <div className="grid w-full sm:w-[200px] gap-1.5">
                  <Label htmlFor="lead-type">Lead Persona</Label>
                  <Select
                    value={selectedLead.name}
                    onValueChange={(value) => setSelectedLead(sampleLeads.find(l => l.name === value)!)}
                  >
                    <SelectTrigger id="lead-type">
                      <SelectValue placeholder="Select Persona" />
                    </SelectTrigger>
                    <SelectContent>
                      {sampleLeads.map(lead => (
                        <SelectItem key={lead.name} value={lead.name}>{lead.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
              </div>
              <Button onClick={handleGenerateScript} disabled={isLoading} className="self-end">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Script
              </Button>
            </div>
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
                value={script || 'Select a lead persona and click "Generate Script" to see an example of an AI-generated call script.'}
                placeholder="Your generated script will appear here..."
                className="min-h-[300px] text-base whitespace-pre-wrap"
              />
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
