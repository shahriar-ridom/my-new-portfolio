"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FolderOpen,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FolderOpen,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Profile",
    href: "/admin/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-card border-r border-border">
      <div className="p-6">
        <h2 className="text-xl font-bold text-foreground">Admin Panel</h2>
      </div>
      <nav className="px-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
