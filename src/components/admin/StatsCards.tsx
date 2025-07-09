"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Users, FolderOpen, TrendingUp } from "lucide-react";

interface AnalyticsData {
  stats: {
    totalViews: number;
    uniqueVisitors: number;
    projects: number;
    conversionRate: string;
  };
}

export function StatsCards() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      const response = await fetch("/api/analytics");
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="w-20 h-4 bg-muted rounded animate-pulse" />
              <div className="w-4 h-4 bg-muted rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="w-16 h-8 bg-muted rounded animate-pulse mb-2" />
              <div className="w-24 h-3 bg-muted rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const stats = [
    {
      title: "Total Views",
      value: data.stats.totalViews.toLocaleString(),
      change: "+12.5%",
      icon: Eye,
    },
    {
      title: "Unique Visitors",
      value: data.stats.uniqueVisitors.toLocaleString(),
      change: "+8.2%",
      icon: Users,
    },
    {
      title: "Projects",
      value: data.stats.projects.toString(),
      change: "+2",
      icon: FolderOpen,
    },
    {
      title: "Conversion Rate",
      value: `${data.stats.conversionRate}%`,
      change: "+0.5%",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
