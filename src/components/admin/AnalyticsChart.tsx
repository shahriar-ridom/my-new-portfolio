"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", visitors: 400, views: 800 },
  { name: "Feb", visitors: 300, views: 600 },
  { name: "Mar", visitors: 200, views: 400 },
  { name: "Apr", visitors: 278, views: 556 },
  { name: "May", visitors: 189, views: 378 },
  { name: "Jun", visitors: 239, views: 478 },
  { name: "Jul", visitors: 349, views: 698 },
];

export function AnalyticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              name="Visitors"
            />
            <Line
              type="monotone"
              dataKey="views"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              name="Page Views"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
