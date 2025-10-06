"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

const settingsSchema = z.object({
  agentName: z.string().min(2, "Name must be at least 2 characters."),
  communicationFrequency: z.number().min(1).max(10),
  communicationTone: z.enum(["Formal", "Friendly", "Casual"]),
  automatedReminders: z.boolean(),
  preferredChannel: z.enum(["email", "sms"]),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

export default function SettingsPage() {
  const { toast } = useToast();
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      agentName: "Deepak Sethi",
      communicationFrequency: 3,
      communicationTone: "Friendly",
      automatedReminders: true,
      preferredChannel: "email",
    },
  });

  function onSubmit(data: SettingsFormValues) {
    console.log(data);
    toast({
      title: "Preferences Saved",
      description: "Your communication settings have been updated.",
    });
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Settings</h1>
        <p className="text-muted-foreground">Manage your preferences for AI-powered communication.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Communication Preferences</CardTitle>
          <CardDescription>Define how the AI should interact with your leads.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
              <FormField
                control={form.control}
                name="agentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agent Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormDescription>This name will be used in communications with leads.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="communicationTone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Tone</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Formal">Formal</SelectItem>
                        <SelectItem value="Friendly">Friendly</SelectItem>
                        <SelectItem value="Casual">Casual</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Set the tone for automated messages.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="communicationFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Communication Frequency</FormLabel>
                    <FormControl>
                       <div>
                         <Slider
                            min={1}
                            max={10}
                            step={1}
                            defaultValue={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                         />
                         <div className="text-sm text-muted-foreground mt-2 text-center">{field.value} check-ins per week</div>
                       </div>
                    </FormControl>
                    <FormDescription>Maximum number of automated check-ins per lead per week.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="preferredChannel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Channel</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a channel" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS (Coming Soon)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Primary channel for automated communication.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="automatedReminders"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <FormLabel>Automated Reminders</FormLabel>
                        <FormDescription>Enable or disable automated appointment reminders.</FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit">Save Preferences</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
