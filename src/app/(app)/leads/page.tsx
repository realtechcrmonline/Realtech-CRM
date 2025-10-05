import { PlusCircle, FileUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { mockLeads } from '@/data/mock-data';
import { LeadActions } from '@/components/lead-actions';
import { cn } from '@/lib/utils';

export default function LeadsPage() {
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Closed': return 'default';
      case 'Nurturing': return 'secondary';
      default: return 'outline';
    }
  };
  
  const getEngagementBadgeClass = (engagement: string) => {
    switch (engagement) {
      case 'High': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Low': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return '';
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Lead Management</h1>
          <p className="text-muted-foreground">View, manage, and nurture your leads.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileUp className="mr-2 h-4 w-4" />
            Upload Sheet
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Lead
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Leads</CardTitle>
          <CardDescription>A list of all your current and past leads.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Last Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Engagement</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{lead.email}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{lead.lastContact}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(lead.status)}>{lead.status}</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span className={cn(badgeVariants({variant: 'outline'}), getEngagementBadgeClass(lead.engagement))}>
                      {lead.engagement}
                    </span>
                  </TableCell>
                  <TableCell>
                    <LeadActions lead={lead} />
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
