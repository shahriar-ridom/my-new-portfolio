import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ProjectCard";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import type { Metadata } from "next";
import getProjects from "@/lib/getProjects";

export const metadata: Metadata = {
  title: "Projects - Shahriar Ridom",
  description: "A collection of projects by Shahriar Ridom.",
};

export default async function ProjectsPage() {
  const projectsData = await getProjects();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section id="all-projects" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedWrapper animation="animate-fade-in-down" className="mb-12">
              <h2 className="text-center font-headline text-4xl md:text-5xl font-bold">
                All Projects
              </h2>
              <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
                Here's a collection of my work. Feel free to browse through and
                explore the live demos and GitHub repositories.
              </p>
            </AnimatedWrapper>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <AnimatedWrapper
                  key={project.id}
                  animation="animate-fade-in-up"
                  delay={project.createdAt.getTime() % 1000}
                >
                  <ProjectCard {...project} />
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
