import { NextResponse } from 'next/server';

// Mock analytics data - in a real app, this would come from your analytics service
const generateAnalyticsData = () => {
  return {
    stats: {
      totalViews: Math.floor(Math.random() * 50000) + 10000,
      uniqueVisitors: Math.floor(Math.random() * 20000) + 3000,
      projects: Math.floor(Math.random() * 50) + 10,
      conversionRate: (Math.random() * 5 + 1).toFixed(1),
    },
    chartData: Array.from({ length: 7 }, (_, i) => ({
      name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
      visitors: Math.floor(Math.random() * 500) + 100,
      views: Math.floor(Math.random() * 1000) + 200,
    })),
    topPages: [
      { page: '/', views: Math.floor(Math.random() * 2000) + 1000, percentage: 45 },
      { page: '/projects', views: Math.floor(Math.random() * 1500) + 500, percentage: 32 },
      { page: '/about', views: Math.floor(Math.random() * 800) + 200, percentage: 16 },
      { page: '/contact', views: Math.floor(Math.random() * 400) + 100, percentage: 8 },
    ],
    trafficSources: [
      { source: 'Direct', visitors: Math.floor(Math.random() * 2000) + 1000, percentage: 42 },
      { source: 'Google', visitors: Math.floor(Math.random() * 1500) + 800, percentage: 34 },
      { source: 'GitHub', visitors: Math.floor(Math.random() * 800) + 300, percentage: 15 },
      { source: 'LinkedIn', visitors: Math.floor(Math.random() * 400) + 100, percentage: 6 },
      { source: 'Other', visitors: Math.floor(Math.random() * 200) + 50, percentage: 3 },
    ],
    devices: [
      { device: 'Desktop', users: Math.floor(Math.random() * 3000) + 1500, percentage: 65 },
      { device: 'Mobile', users: Math.floor(Math.random() * 1500) + 700, percentage: 30 },
      { device: 'Tablet', users: Math.floor(Math.random() * 300) + 100, percentage: 5 },
    ],
  };
};

export async function GET() {
  try {
    const analyticsData = generateAnalyticsData();
    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
