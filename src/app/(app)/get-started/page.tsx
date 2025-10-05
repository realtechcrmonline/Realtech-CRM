'use client';

import { useState } from 'react';
import { UploadCloud, File, Bot, Loader2, CheckCircle } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface IFormInput {
  file: FileList;
}

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
      // Simulate reading and processing the file
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsComplete(true);
      toast({
        title: 'Processing Complete',
        description: `Your file "${data.file[0].name}" has been processed. The AI agents have completed their outreach.`,
      });

    } catch (error) {
       console.error("File processing failed:", error);
       toast({
        variant: "destructive",
        title: 'Processing Failed',
        description: `There was an error processing your file.`,
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
            <CardDescription>Select a file from your computer (Excel, Pages, or Google Sheets).</CardDescription>
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
                  <Input id="dropzone-file" type="file" className="hidden" {...register('file', { required: true })} accept=".xls,.xlsx,.csv" />
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
                <p className="mt-4">Analyzing data and preparing for outreach...</p>
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
