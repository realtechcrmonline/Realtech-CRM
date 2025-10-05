'use client';

import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { chartData, pieChartData } from '@/data/mock-data';

const barChartConfig = {
  deals: { label: 'Deals Closed', color: 'hsl(var(--primary))' },
  leads: { label: 'New Leads', color: 'hsl(var(--muted))' },
};

const pieChartConfig = {
    value: { label: 'Leads' },
    Website: { label: 'Website' },
    Referrals: { label: 'Referrals' },
    'Social Media': { label: 'Social Media' },
    Ads: { label: 'Ads' },
    Other: { label: 'Other' },
}

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Deals closed and new leads over the last 6 months.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={barChartConfig} className="h-[300px] w-full">
            <BarChart data={chartData} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegend />} />
              <Bar dataKey="deals" fill="var(--color-deals)" radius={4} />
              <Bar dataKey="leads" fill="var(--color-leads)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="col-span-4 md:col-span-3">
        <CardHeader>
          <CardTitle>Lead Sources</CardTitle>
          <CardDescription>Breakdown of where your leads are coming from.</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={pieChartConfig} className="h-[300px] w-full">
                <PieChart>
                    <ChartTooltip content={<ChartTooltipContent nameKey="source" hideLabel />} />
                    <Pie data={pieChartData} dataKey="value" nameKey="source" innerRadius={60} strokeWidth={5}>
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <ChartLegend content={<ChartLegendContent nameKey="source" />} />
                </PieChart>
            </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
