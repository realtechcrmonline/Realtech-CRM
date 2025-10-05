'use server';
/**
 * @fileOverview An AI agent that suggests client nurturing actions based on engagement level.
 *
 * - suggestClientNurturingActions - A function that handles the suggestion of client nurturing actions.
 * - SuggestClientNurturingActionsInput - The input type for the suggestClientNurturingActions function.
 * - SuggestClientNurturingActionsOutput - The return type for the suggestClientNurturingActions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestClientNurturingActionsInputSchema = z.object({
  leadDetails: z
    .string()
    .describe('Comprehensive details about the lead, including past interactions, preferences, and property interests.'),
  marketConditions: z
    .string()
    .describe('Current real estate market conditions relevant to the lead.'),
  agentPreferences: z
    .string()
    .describe('The real estate agent’s preferences for communication timing, frequency, and content tones.'),
});
export type SuggestClientNurturingActionsInput = z.infer<
  typeof SuggestClientNurturingActionsInputSchema
>;

const SuggestClientNurturingActionsOutputSchema = z.object({
  engagementLevel: z
    .string()
    .describe('The assessed engagement level of the lead (e.g., high, medium, low).'),
  suggestedAction: z
    .string()
    .describe('The next best action to take with the lead (e.g., schedule a call, send a property listing).'),
  personalizedCommunication:
    z.string().describe('A personalized communication strategy for the lead.'),
});
export type SuggestClientNurturingActionsOutput = z.infer<
  typeof SuggestClientNurturingActionsOutputSchema
>;

export async function suggestClientNurturingActions(
  input: SuggestClientNurturingActionsInput
): Promise<SuggestClientNurturingActionsOutput> {
  return suggestClientNurturingActionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestClientNurturingActionsPrompt',
  input: {schema: SuggestClientNurturingActionsInputSchema},
  output: {schema: SuggestClientNurturingActionsOutputSchema},
  prompt: `You are an AI assistant for real estate agents, helping them nurture their leads effectively.

Analyze the following information to determine the lead's engagement level, suggest the next best action, and craft a personalized communication strategy.

Lead Details: {{{leadDetails}}}
Market Conditions: {{{marketConditions}}}
Agent Preferences: {{{agentPreferences}}}

Based on the above information, provide the engagement level, a suggested action, and a personalized communication strategy. Format the output as a JSON object:

Engagement Level:
Suggested Action:
Personalized Communication: `,
});

const suggestClientNurturingActionsFlow = ai.defineFlow(
  {
    name: 'suggestClientNurturingActionsFlow',
    inputSchema: SuggestClientNurturingActionsInputSchema,
    outputSchema: SuggestClientNurturingActionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
