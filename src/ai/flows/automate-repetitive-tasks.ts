'use server';

/**
 * @fileOverview Automates repetitive real estate tasks such as appointment scheduling, task assignment, and form population.
 *
 * - automateRepetitiveTasks - A function that automates repetitive tasks.
 * - AutomateRepetitiveTasksInput - The input type for the automateRepetitiveTasks function.
 * - AutomateRepetitiveTasksOutput - The return type for the automateRepetitiveTasks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomateRepetitiveTasksInputSchema = z.object({
  taskDescription: z
    .string()
    .describe('The description of the repetitive task to automate.'),
  userDetails: z.string().describe('Details about the user requesting automation.'),
  leadDetails: z.string().describe('Details about the lead related to the task.'),
});
export type AutomateRepetitiveTasksInput = z.infer<typeof AutomateRepetitiveTasksInputSchema>;

const AutomateRepetitiveTasksOutputSchema = z.object({
  suggestedActions: z
    .string()
    .describe('Suggested actions to automate the task, in a concise format.'),
  estimatedTimeSavings: z
    .string()
    .describe('Estimated time savings from automating the task.'),
});
export type AutomateRepetitiveTasksOutput = z.infer<typeof AutomateRepetitiveTasksOutputSchema>;

export async function automateRepetitiveTasks(
  input: AutomateRepetitiveTasksInput
): Promise<AutomateRepetitiveTasksOutput> {
  return automateRepetitiveTasksFlow(input);
}

const automateRepetitiveTasksPrompt = ai.definePrompt({
  name: 'automateRepetitiveTasksPrompt',
  input: {schema: AutomateRepetitiveTasksInputSchema},
  output: {schema: AutomateRepetitiveTasksOutputSchema},
  prompt: `You are an AI assistant designed to automate repetitive tasks for real estate agents.

  User Details: {{{userDetails}}}
  Lead Details: {{{leadDetails}}}

  Based on the following task description, suggest actions to automate the task and estimate the time savings:
  Task Description: {{{taskDescription}}}

  Respond with a concise summary of suggested actions and estimated time savings.`,
});

const automateRepetitiveTasksFlow = ai.defineFlow(
  {
    name: 'automateRepetitiveTasksFlow',
    inputSchema: AutomateRepetitiveTasksInputSchema,
    outputSchema: AutomateRepetitiveTasksOutputSchema,
  },
  async input => {
    const {output} = await automateRepetitiveTasksPrompt(input);
    return output!;
  }
);
