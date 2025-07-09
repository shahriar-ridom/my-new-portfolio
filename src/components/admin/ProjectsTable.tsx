"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Edit,
  Trash2,
  ExternalLink,
  Github,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export function ProjectsTable({
  onProjectDeleted,
}: {
  onProjectDeleted?: () => void;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      setProjects(projects.filter((p) => p.id !== id));
      onProjectDeleted?.();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{project.title}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="max-w-xs truncate text-sm text-muted-foreground">
                  {project.description}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(project.createdAt), {
                    addSuffix: true,
                  })}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => deleteProject(project.id)}
                        className="text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
