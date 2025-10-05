export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'New' | 'Contacted' | 'Nurturing' | 'Closed';
  lastContact: string;
  engagement: 'High' | 'Medium' | 'Low';
};

export const mockLeads: Lead[] = [
  { id: '1', name: 'John Doe', email: 'john.d@example.com', phone: '555-0101', status: 'Nurturing', lastContact: '2024-07-20', engagement: 'High' },
  { id: '2', name: 'Jane Smith', email: 'jane.s@example.com', phone: '555-0102', status: 'Contacted', lastContact: '2024-07-18', engagement: 'Medium' },
  { id: '3', name: 'Alice Johnson', email: 'alice.j@example.com', phone: '555-0103', status: 'New', lastContact: '2024-07-21', engagement: 'Low' },
  { id: '4', name: 'Bob Brown', email: 'bob.b@example.com', phone: '555-0104', status: 'Closed', lastContact: '2024-06-30', engagement: 'High' },
  { id: '5', name: 'Charlie Davis', email: 'charlie.d@example.com', phone: '555-0105', status: 'Nurturing', lastContact: '2024-07-19', engagement: 'Medium' },
];

export const chartData = [
  { month: 'January', deals: 4, leads: 24 },
  { month: 'February', deals: 3, leads: 13 },
  { month: 'March', deals: 5, leads: 38 },
  { month: 'April', deals: 4, leads: 29 },
  { month: 'May', deals: 6, leads: 48 },
  { month: 'June', deals: 5, leads: 35 },
];

export const pieChartData = [
    { source: 'Website', value: 45, fill: 'hsl(var(--chart-1))' },
    { source: 'Referrals', value: 25, fill: 'hsl(var(--chart-2))' },
    { source: 'Social Media', value: 15, fill: 'hsl(var(--chart-3))' },
    { source: 'Ads', value: 10, fill: 'hsl(var(--chart-4))' },
    { source: 'Other', value: 5, fill: 'hsl(var(--chart-5))' },
]
