import ProjectCard from "@/components/ProjectCard";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import getProjects from "@/lib/getProjects";

const Projects = async () => {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 3);
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animation="animate-fade-in-down" className="mb-12">
          <h2 className="text-center font-headline text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
        </AnimatedWrapper>
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <AnimatedWrapper
                key={project.id}
                animation="animate-fade-in-up"
                delay={project.createdAt.getTime() % 1000}
              >
                <ProjectCard {...project} />
              </AnimatedWrapper>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <p>No projects found.</p>
          </div>
        )}
        <AnimatedWrapper
          animation="animate-fade-in-up"
          delay={600}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <Link href="/projects">
              Browse More Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Projects;
