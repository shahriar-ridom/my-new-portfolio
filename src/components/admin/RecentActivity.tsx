import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

const activities = [
  {
    id: 1,
    type: "project",
    title: "Created new project: E-commerce App",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: "success",
  },
  {
    id: 2,
    type: "analytics",
    title: "Website received 50+ views today",
    time: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    status: "info",
  },
  {
    id: 3,
    type: "profile",
    title: "Updated profile information",
    time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    status: "success",
  },
  {
    id: 4,
    type: "project",
    title: "Published project: Portfolio Website",
    time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    status: "success",
  },
];

const statusColors = {
  success: "bg-green-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div
                className={`w-2 h-2 rounded-full ${
                  statusColors[activity.status as keyof typeof statusColors]
                }`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(activity.time, { addSuffix: true })}
                </p>
              </div>
              <Badge variant="outline" className="text-xs">
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
