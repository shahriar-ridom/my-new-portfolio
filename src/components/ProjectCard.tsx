import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
  tags,
}: ProjectCardProps) => {
  return (
    <div className="h-full group transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <Card className="flex flex-col overflow-hidden h-full">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              data-ai-hint={title}
            />
          </div>
        </CardHeader>
        <div className="flex flex-col flex-grow p-6">
          <CardTitle className="font-headline text-2xl mb-2">{title}</CardTitle>
          <CardContent className="p-0 flex-grow">
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-0 pt-6 flex justify-start gap-4">
            <Button asChild variant="outline">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
