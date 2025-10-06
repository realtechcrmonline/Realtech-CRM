'use client';

import {
  Users,
  Calendar,
  Phone,
  Mail,
  Upload,
  BookUser,
  Info,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const gettingStartedSteps = [
    {
      icon: <Upload className="h-6 w-6 text-primary" />,
      title: '1. Import Contacts',
      description:
        'Upload your Excel, Google Sheets, or Numbers files to import contacts',
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: '2. Schedule Appointments',
      description: 'Create and manage appointments for your contacts',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: '3. Use Call Scripts',
      description: 'Leverage our friendly call scripts to engage with clients',
    },
  ];

  const helpTopics = [
    {
      icon: <Info className="h-5 w-5 text-muted-foreground" />,
      title: 'How to import contacts',
    },
    {
      icon: <Info className="h-5 w-5 text-muted-foreground" />,
      title: 'How to schedule appointments',
    },
    {
      icon: <Info className="h-5 w-5 text-muted-foreground" />,
      title: 'How to use call scripts',
    },
  ];

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          AI Agentic Powered CRM by Howdy Analytics
        </h1>
        <p className="text-muted-foreground">
          Your friendly contact management and appointment scheduling assistant
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Contacts
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              No contacts imported yet
            </p>
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <Link href="/get-started">Import Contacts</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              No appointments scheduled
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Schedule Appointments
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Call Scripts</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Ready to use templates
            </p>
            <Button variant="outline" size="sm" className="mt-4" asChild>
               <Link href="/transcriptions">View Scripts</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Email Templates
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Ready to use templates
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              View Templates
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Follow these steps to set up your Howdy Analytics system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {gettingStartedSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {step.icon}
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>How can we help?</CardTitle>
            <CardDescription>
              Learn more about Howdy Analytics features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {helpTopics.map((topic, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex items-center gap-3 rounded-md p-3 hover:bg-muted"
                >
                  {topic.icon}
                  <span className="font-medium">{topic.title}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
