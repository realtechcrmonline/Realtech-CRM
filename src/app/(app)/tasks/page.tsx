"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Bot, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const taskSchema = z.object({
  taskDescription: z.string().min(10, "Please describe the task in more detail."),
});

type TaskFormValues = z.infer<typeof taskSchema>;

export default function TasksPage() {
  const { toast } = useToast();
  const [result, setResult] = useState<{ suggestedActions: string; estimatedTimeSavings: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskDescription: "",
    },
  });

  async function onSubmit(data: TaskFormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      // Static build: simulate a placeholder response
      await new Promise(r => setTimeout(r, 600));
      setResult({
        suggestedActions:
          "1) Create an email template.\n2) Use calendar links for scheduling.\n3) Save a CRM snippet for quick entry.",
        estimatedTimeSavings: "Approx. 2–3 hours/week once automated.",
      });
    } catch (error) {
      console.error("AI task automation failed:", error);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "Failed to get a response from the AI. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Task Automation</h1>
        <p className="text-muted-foreground">Describe a repetitive task and let AI suggest an automation plan.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Describe Your Task</CardTitle>
            <CardDescription>Explain a task you do often, like scheduling viewings or populating forms.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="taskDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Task Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'Every time a new lead comes from Zillow, I have to manually create a contact in my CRM, send a welcome email, and set a reminder to follow up in 3 days.'"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Automate Task
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Automation Plan</CardTitle>
            <CardDescription>AI-generated suggestions will appear here.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            {isLoading && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
            {!isLoading && !result && (
              <div className="text-center text-muted-foreground">
                <Bot className="mx-auto h-12 w-12" />
                <p className="mt-2">Your plan will be generated here.</p>
              </div>
            )}
            {result && (
              <div className="space-y-4 text-sm w-full">
                <div>
                  <h3 className="font-semibold mb-2">Suggested Actions:</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap bg-secondary p-3 rounded-md">{result.suggestedActions}</p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Estimated Time Savings:</h3>
                    <p className="text-muted-foreground">{result.estimatedTimeSavings}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
