'use client';

import { useState } from 'react';
import { UploadCloud, File, Bot, Loader2, CheckCircle } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { generateSalesScript } from '@/ai/flows/generate-sales-script';
import { suggestClientNurturingActions } from '@/ai/flows/suggest-client-nurturing-actions';

interface IFormInput {
  file: FileList;
}

// This represents the kind of data that would be parsed from an uploaded lead sheet.
const parsedLeadsFromFile = [
  { name: 'Michael Scott', interest: 'high', mood: 'Positive', profession: 'Regional Manager', email: 'michael.s@dundermifflin.com' },
  { name: 'Dwight Schrute', interest: 'medium', mood: 'Neutral', profession: 'Beet Farmer', email: 'dwight.k.s@dundermifflin.com' },
  { name: 'Pam Beesly', interest: 'low', mood: 'Negative', profession: 'Artist', email: 'pam.b@artschool.com' },
];

export default function GetStartedPage() {
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();
  const file = watch('file');

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsProcessing(true);
    setIsComplete(false);
    
    try {
      // In a real application, you would parse the uploaded file here.
      // For this demonstration, we'll simulate processing the file and using the parsed data.
      console.log(`Processing file: ${data.file[0].name}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // The AI agent processes each lead from the file.
      for (const lead of parsedLeadsFromFile) {
        console.log(`Processing lead: ${lead.name}`);
        
        // The AI generates a dynamic sales script for the call.
        const scriptResult = await generateSalesScript({
          leadName: lead.name,
          leadInterest: lead.interest,
          initialMood: lead.mood,
          productName: "Realtech AI",
          productFeatures: "Automated lead nurturing, sentiment analysis, and dynamic script generation."
        });
        console.log(`Generated script for ${lead.name}:`, scriptResult.script);


        // The AI suggests a nurturing action after the call.
        const nurturingAction = await suggestClientNurturingActions({
          leadDetails: `Name: ${lead.name}, Interest: ${lead.interest}, Email: ${lead.email}, Profession: ${lead.profession}`,
          marketConditions: "Competitive market with rising interest rates.",
          agentPreferences: "Friendly and professional tone, follow-up twice a week."
        });
        console.log(`Nurturing suggestion for ${lead.name}:`, nurturingAction);
        
        // Here you would add logic to save the script, recording, and CRM entry.
      }
      
      // Simulate the final processing steps.
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsComplete(true);
      toast({
        title: 'Processing Complete',
        description: `Your file "${data.file[0].name}" has been processed. The AI agents have completed their tasks.`,
      });

    } catch (error) {
       console.error("File processing failed:", error);
       toast({
        variant: "destructive",
        title: 'Processing Failed',
        description: `There was an error processing your file. Please check the console for details.`,
      });
    } finally {
        setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Get Started</h1>
        <p className="text-muted-foreground">Upload your lead sheet to begin the automated outreach process.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload Your Leads</CardTitle>
            <CardDescription>Select a file from your computer (e.g., Excel, CSV).</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-muted"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-10 h-10 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">XLS, XLSX, CSV, or from Google Sheets/Pages</p>
                  </div>
                  <Input id="dropzone-file" type="file" className="hidden" {...register('file', { required: true })} accept=".xls,.xlsx,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                </label>
              </div>
              
              {file && file.length > 0 && (
                <div className="flex items-center p-3 text-sm rounded-md bg-muted text-muted-foreground">
                  <File className="w-4 h-4 mr-2" />
                  <span>{file[0].name}</span>
                </div>
              )}

              <Button type="submit" disabled={isProcessing || !file || file.length === 0}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Start AI Agent'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Processing Status</CardTitle>
            <CardDescription>The AI agent will begin its tasks once you upload a file.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            {isProcessing ? (
              <div className="text-center text-muted-foreground">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                <p className="mt-4">AI agent is processing your leads...</p>
                <p className="text-sm">Calling leads, generating scripts, and analyzing sentiment.</p>
              </div>
            ) : isComplete ? (
               <div className="text-center text-green-600">
                <CheckCircle className="mx-auto h-12 w-12" />
                <p className="mt-4 font-semibold">Processing Complete!</p>
                <p className="text-sm text-muted-foreground">Check the CRM, Transcriptions, and Recordings pages for updates.</p>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <Bot className="mx-auto h-12 w-12" />
                <p className="mt-2">Awaiting lead sheet...</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
