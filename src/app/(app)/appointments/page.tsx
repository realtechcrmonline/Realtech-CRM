import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function AppointmentsPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Appointments</h1>
        <p className="text-muted-foreground">Your scheduled appointments will appear here.</p>
      </div>

       <Card className="flex flex-col min-h-[400px]">
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>A list of your scheduled appointments.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Calendar className="mx-auto h-12 w-12" />
            <p className="mt-4">No appointments scheduled.</p>
            <p className="text-sm">Schedule appointments from the dashboard.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
