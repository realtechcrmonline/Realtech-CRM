import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mock data for CRM interactions
const crmInteractions = [
  {
    id: 'crm-1',
    name: 'Michael Scott',
    profession: 'Regional Manager',
    email: 'michael.s@dundermifflin.com',
    summary: 'Discussed paper needs. Expressed high interest in premium gloss paper. Follow-up scheduled for next week.',
    leadSentiment: 'Positive',
    agentSentiment: 'Positive',
  },
  {
    id: 'crm-2',
    name: 'Dwight Schrute',
    profession: 'Beet Farmer',
    email: 'dwight.k.s@dundermifflin.com',
    summary: 'Initial contact was brief. Lead was busy but requested a callback. Showed moderate interest in security features.',
    leadSentiment: 'Neutral',
    agentSentiment: 'Neutral',
  },
  {
    id: 'crm-3',
    name: 'Pam Beesly',
    profession: 'Artist',
    email: 'pam.b@artschool.com',
    summary: 'Lead was not interested at this time. Mentioned they are already using a competitor. Marked for long-term nurture.',
    leadSentiment: 'Negative',
    agentSentiment: 'Neutral',
  },
];

export default function CrmPage() {
  const getSentimentBadgeClass = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Neutral': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Negative': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return '';
    }
  };
  
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">CRM</h1>
        <p className="text-muted-foreground">A record of successful interactions and their outcomes.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Successful Interactions</CardTitle>
          <CardDescription>Details of conversations where leads expressed interest.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Lead Name</TableHead>
                <TableHead className="hidden md:table-cell">Profession</TableHead>
                <TableHead className="hidden lg:table-cell">Email</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead className="text-center">Lead Sentiment</TableHead>
                <TableHead className="text-center hidden sm:table-cell">Agent Sentiment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {crmInteractions.map((interaction) => (
                <TableRow key={interaction.id}>
                  <TableCell className="font-medium">{interaction.name}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{interaction.profession}</TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground">{interaction.email}</TableCell>
                  <TableCell className="text-muted-foreground max-w-sm truncate">{interaction.summary}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={cn(getSentimentBadgeClass(interaction.leadSentiment))}>
                      {interaction.leadSentiment}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center hidden sm:table-cell">
                     <Badge variant="outline" className={cn(getSentimentBadgeClass(interaction.agentSentiment))}>
                      {interaction.agentSentiment}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
