import { StatsCards } from "@/components/admin/StatsCards";
import { AnalyticsChart } from "@/components/admin/AnalyticsChart";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { QuickActions } from "@/components/admin/QuickActions";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your portfolio.
        </p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      <RecentActivity />
    </div>
  );
}
