"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/admin/AnalyticsChart";
import { StatsCards } from "@/components/admin/StatsCards";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDateRangePicker } from "@/components/admin/CalendarDateRangePicker";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">
            Detailed insights into your portfolio performance
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <CalendarDateRangePicker />
          <Select defaultValue="7d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart />
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { page: "/", views: 1234, percentage: 45 },
                { page: "/projects", views: 892, percentage: 32 },
                { page: "/about", views: 456, percentage: 16 },
                { page: "/contact", views: 234, percentage: 8 },
              ].map((item) => (
                <div
                  key={item.page}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{item.page}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.views} views
                    </div>
                  </div>
                  <div className="text-sm font-medium">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: "Direct", visitors: 1543, percentage: 42 },
                { source: "Google", visitors: 1234, percentage: 34 },
                { source: "GitHub", visitors: 567, percentage: 15 },
                { source: "LinkedIn", visitors: 234, percentage: 6 },
                { source: "Other", visitors: 122, percentage: 3 },
              ].map((item) => (
                <div
                  key={item.source}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{item.source}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.visitors} visitors
                    </div>
                  </div>
                  <div className="text-sm font-medium">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { device: "Desktop", users: 2134, percentage: 65 },
                { device: "Mobile", users: 987, percentage: 30 },
                { device: "Tablet", users: 164, percentage: 5 },
              ].map((item) => (
                <div
                  key={item.device}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{item.device}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.users} users
                    </div>
                  </div>
                  <div className="text-sm font-medium">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
