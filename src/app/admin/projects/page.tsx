"use client";

import { ProjectsTable } from "@/components/admin/ProjectsTable";
import { CreateProjectDialog } from "@/components/admin/CreateProjectDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleProjectCreated = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            Manage your portfolio projects
          </p>
        </div>
        <CreateProjectDialog onProjectCreated={handleProjectCreated}>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        </CreateProjectDialog>
      </div>

      <ProjectsTable key={refreshKey} />
    </div>
  );
}
