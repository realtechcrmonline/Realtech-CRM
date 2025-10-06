'use client';

import { useState } from 'react';
import { Bot, Mail, MessageSquare, MoreHorizontal, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { type Lead } from '@/data/mock-data';
import { suggestClientNurturingActions, SuggestClientNurturingActionsOutput } from '@/ai/flows/suggest-client-nurturing-actions';
import { automateLeadCommunication, AutomateLeadCommunicationOutput } from '@/ai/flows/automate-lead-communication';
import { useToast } from '@/hooks/use-toast';

type LeadActionProps = {
  lead: Lead;
};

export function LeadActions({ lead }: LeadActionProps) {
  const { toast } = useToast();
  const [isNurtureDialogOpen, setNurtureDialogOpen] = useState(false);
  const [isCommPlanDialogOpen, setCommPlanDialogOpen] = useState(false);
  const [nurtureResult, setNurtureResult] = useState<SuggestClientNurturingActionsOutput | null>(null);
  const [commPlanResult, setCommPlanResult] = useState<AutomateLeadCommunicationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (error: any, flowName: string) => {
    console.error(`AI flow '${flowName}' failed:`, error);
    toast({
      variant: 'destructive',
      title: 'AI Error',
      description: `Failed to get a response from the ${flowName} AI.`,
    });
  }

  const handleNurture = async () => {
    setNurtureDialogOpen(true);
    if (nurtureResult) return;

    setIsLoading(true);
    try {
      const result = await suggestClientNurturingActions({
        leadDetails: `Name: ${lead.name}, Email: ${lead.email}, Status: ${lead.status}, Engagement: ${lead.engagement}, Last Contact: ${lead.lastContact}`,
        marketConditions: "The market is currently competitive with low inventory.",
        agentPreferences: "Prefers a friendly tone, with 2-3 communications per week via email.",
      });
      setNurtureResult(result);
    } catch (e) {
      handleError(e, 'Nurturing Suggestions');
      setNurtureDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCommPlan = async () => {
    setCommPlanDialogOpen(true);
    if (commPlanResult) return;

    setIsLoading(true);
    try {
      const result = await automateLeadCommunication({
        leadDetails: `Name: ${lead.name}, Email: ${lead.email}, Status: ${lead.status}, Engagement: ${lead.engagement}, Last Contact: ${lead.lastContact}`,
        communicationPreferences: "Friendly tone, 2-3 times per week, via email. Focus on new listings in their preferred area.",
        realEstateAgentName: "Deepak Sethi",
      });
      setCommPlanResult(result);
    } catch (e) {
      handleError(e, 'Communication Plan');
      setCommPlanDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => alert('Sending email to ' + lead.name)}><Mail className="mr-2 h-4 w-4" /> Email Lead</DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('Sending SMS to ' + lead.name)}><MessageSquare className="mr-2 h-4 w-4" /> SMS Lead</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>AI Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleNurture}><Bot className="mr-2 h-4 w-4" /> Suggest Nurturing Action</DropdownMenuItem>
          <DropdownMenuItem onClick={handleCommPlan}><Bot className="mr-2 h-4 w-4" /> Generate Communication Plan</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isNurtureDialogOpen} onOpenChange={setNurtureDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>AI Nurturing Suggestion for {lead.name}</DialogTitle>
            <DialogDescription>
              Based on the lead's profile, here's the suggested next step.
            </DialogDescription>
          </DialogHeader>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : nurtureResult && (
            <div className="space-y-4 py-4 text-sm max-h-[60vh] overflow-y-auto">
              <div><strong>Engagement Level:</strong> <span className="text-muted-foreground">{nurtureResult.engagementLevel}</span></div>
              <div><strong>Suggested Action:</strong> <p className="text-muted-foreground">{nurtureResult.suggestedAction}</p></div>
              <div><strong>Personalized Communication:</strong> <p className="text-muted-foreground whitespace-pre-wrap">{nurtureResult.personalizedCommunication}</p></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={isCommPlanDialogOpen} onOpenChange={setCommPlanDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>AI Communication Plan for {lead.name}</DialogTitle>
            <DialogDescription>
              An automated communication plan has been generated.
            </DialogDescription>
          </DialogHeader>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : commPlanResult && (
            <div className="space-y-4 py-4 text-sm max-h-[60vh] overflow-y-auto">
              <div>
                <h3 className="font-semibold">Communication Plan:</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{commPlanResult.communicationPlan}</p>

              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
