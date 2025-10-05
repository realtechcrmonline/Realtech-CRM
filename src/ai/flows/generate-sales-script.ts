'use server';
/**
 * @fileOverview A flow for generating a dynamic sales script.
 *
 * - generateSalesScript - A function to create a sales script tailored to a lead's mood and interest.
 * - GenerateSalesScriptInput - The input type for the generateSalesScript function.
 * - GenerateSalesScriptOutput - The return type for the generateSalesScript function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSalesScriptInputSchema = z.object({
  leadName: z.string().describe('The name of the lead.'),
  leadInterest: z.string().describe('The lead\'s interest level (e.g., "high", "medium", "low").'),
  initialMood: z.string().describe('The assessed initial mood of the lead (e.g., "Positive", "Neutral", "Negative").'),
  productName: z.string().describe('The name of the product being pitched.'),
  productFeatures: z.string().describe('Key features of the product to highlight.'),
});

export type GenerateSalesScriptInput = z.infer<typeof GenerateSalesScriptInputSchema>;

const GenerateSalesScriptOutputSchema = z.object({
  script: z.string().describe('The generated sales script as a single string.'),
});

export type GenerateSalesScriptOutput = z.infer<typeof GenerateSalesScriptOutputSchema>;

export async function generateSalesScript(
  input: GenerateSalesScriptInput
): Promise<GenerateSalesScriptOutput> {
  return generateSalesScriptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSalesScriptPrompt',
  input: {schema: GenerateSalesScriptInputSchema},
  output: {schema: GenerateSalesScriptOutputSchema},
  prompt: `You are an AI sales assistant for a company called Realtech. Your task is to generate a conversational, natural-sounding sales script to call a lead named {{{leadName}}}.

The script should be structured as follows:
1.  **Opening:** Start with a friendly opening that acknowledges the lead's time.
2.  **Mood Adaptation:** Tailor the next part of the conversation based on their assessed initial mood: '{{{initialMood}}}'.
    *   If 'Positive', be enthusiastic and build on their good mood.
    *   If 'Neutral', be calm, professional, and try to build rapport by asking a gentle, open-ended question.
    *   If 'Negative', be empathetic and brief. Acknowledge it might not be a good time and offer to call back.
3.  **Product Pitch:** If the conversation proceeds, gradually introduce the product, '{{{productName}}}'.
4.  **Feature Highlight:** Mention the key features: '{{{productFeatures}}}', connecting them to potential benefits for the lead.
5.  **Email Capture:** If the lead shows interest (based on their stated interest level of '{{{leadInterest}}}'), attempt to capture their email for a follow-up.
6.  **Closing:** End the call professionally.

Generate a complete, flowing script based on these instructions. The output should be a single block of text representing the AI agent's side of the conversation.
`,
});

const generateSalesScriptFlow = ai.defineFlow(
  {
    name: 'generateSalesScriptFlow',
    inputSchema: GenerateSalesScriptInputSchema,
    outputSchema: GenerateSalesScriptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
