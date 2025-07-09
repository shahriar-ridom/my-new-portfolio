"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Theme</Label>
                <div className="text-sm text-muted-foreground">
                  Choose your preferred theme
                </div>
              </div>
              <ThemeToggle />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reduced-motion">Reduced Motion</Label>
                <div className="text-sm text-muted-foreground">
                  Reduce animations and transitions
                </div>
              </div>
              <Switch id="reduced-motion" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive notifications via email
                </div>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="project-updates">Project Updates</Label>
                <div className="text-sm text-muted-foreground">
                  Get notified when projects are updated
                </div>
              </div>
              <Switch id="project-updates" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics-reports">Analytics Reports</Label>
                <div className="text-sm text-muted-foreground">
                  Weekly analytics summary
                </div>
              </div>
              <Switch id="analytics-reports" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="cache-optimization">Cache Optimization</Label>
                <div className="text-sm text-muted-foreground">
                  Enable aggressive caching for better performance
                </div>
              </div>
              <Switch id="cache-optimization" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="image-optimization">Image Optimization</Label>
                <div className="text-sm text-muted-foreground">
                  Automatically optimize images
                </div>
              </div>
              <Switch id="image-optimization" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data & Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics-tracking">Analytics Tracking</Label>
                <div className="text-sm text-muted-foreground">
                  Allow anonymous usage analytics
                </div>
              </div>
              <Switch id="analytics-tracking" defaultChecked />
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="space-y-0.5">
                <Label>Data Export</Label>
                <div className="text-sm text-muted-foreground">
                  Export all your data
                </div>
              </div>
              <Button variant="outline" size="sm">
                Export Data
              </Button>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="space-y-0.5">
                <Label className="text-destructive">Danger Zone</Label>
                <div className="text-sm text-muted-foreground">
                  Permanently delete all data
                </div>
              </div>
              <Button variant="destructive" size="sm">
                Delete All Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
