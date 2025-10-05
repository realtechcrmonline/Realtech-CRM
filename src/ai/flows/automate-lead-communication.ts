'use server';

/**
 * @fileOverview A flow for automating lead communication in real estate.
 *
 * - automateLeadCommunication - A function to manage automated reminders, responses, and follow-ups to leads.
 * - AutomateLeadCommunicationInput - The input type for the automateLeadCommunication function.
 * - AutomateLeadCommunicationOutput - The return type for the automateLeadCommunication function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomateLeadCommunicationInputSchema = z.object({
  leadDetails: z
    .string()
    .describe('Details of the lead, including name, contact information, and any relevant notes.'),
  communicationPreferences: z
    .string()
    .describe(
      'Preferences for communication, including timing, frequency, preferred channels (email, SMS), and content tone.'
    ),
  realEstateAgentName: z.string().describe('Name of the real estate agent.'),
});

export type AutomateLeadCommunicationInput = z.infer<
  typeof AutomateLeadCommunicationInputSchema
>;

const AutomateLeadCommunicationOutputSchema = z.object({
  communicationPlan: z
    .string()
    .describe(
      'A detailed communication plan outlining the automated reminders, responses, and follow-ups to be sent to the lead.'
    ),
});

export type AutomateLeadCommunicationOutput = z.infer<
  typeof AutomateLeadCommunicationOutputSchema
>;

export async function automateLeadCommunication(
  input: AutomateLeadCommunicationInput
): Promise<AutomateLeadCommunicationOutput> {
  return automateLeadCommunicationFlow(input);
}

const automateLeadCommunicationPrompt = ai.definePrompt({
  name: 'automateLeadCommunicationPrompt',
  input: {schema: AutomateLeadCommunicationInputSchema},
  output: {schema: AutomateLeadCommunicationOutputSchema},
  prompt: `You are an AI assistant specialized in creating communication plans for real estate agents.

  Based on the lead details and communication preferences provided by the real estate agent, create a detailed communication plan to automatically manage reminders, responses, and follow-ups to the lead.

  Lead Details: {{{leadDetails}}}
  Communication Preferences: {{{communicationPreferences}}}
  Real Estate Agent Name: {{{realEstateAgentName}}}

  The communication plan should include specific examples of messages and follow-up actions, considering the agent's preferences.

  Response should be a detailed plan.
  `,
});

const automateLeadCommunicationFlow = ai.defineFlow(
  {
    name: 'automateLeadCommunicationFlow',
    inputSchema: AutomateLeadCommunicationInputSchema,
    outputSchema: AutomateLeadCommunicationOutputSchema,
  },
  async input => {
    const {output} = await automateLeadCommunicationPrompt(input);
    return output!;
  }
);
