import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileEdit, BarChart3, Settings } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    title: "Add Project",
    description: "Create a new portfolio project",
    icon: Plus,
    href: "/admin/projects",
    color: "bg-blue-500",
  },
  {
    title: "Edit Profile",
    description: "Update your profile information",
    icon: FileEdit,
    href: "/admin/profile",
    color: "bg-green-500",
  },
  {
    title: "View Analytics",
    description: "Check detailed analytics",
    icon: BarChart3,
    href: "/admin/analytics",
    color: "bg-purple-500",
  },
  {
    title: "Settings",
    description: "Configure site settings",
    icon: Settings,
    href: "/admin/settings",
    color: "bg-orange-500",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.title} href={action.href}>
              <Button
                variant="ghost"
                className="w-full justify-start h-auto p-4"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mr-3`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              </Button>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
