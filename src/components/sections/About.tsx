import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GitMerge, Database, Wind, Cog, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import profilepicture from "@/images/profile.webp";
import getMyData from "@/lib/getMyData";

const skills = [
  { name: "JavaScript", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "TypeScript", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "React", icon: <Cog className="h-6 w-6 text-primary" /> },
  { name: "Next.js", icon: <Cog className="h-6 w-6 text-primary" /> },
  { name: "Node.js", icon: <Cog className="h-6 w-6 text-primary" /> },
  { name: "Tailwind CSS", icon: <Wind className="h-6 w-6 text-primary" /> },
  { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-primary" /> },
  { name: "MongoDB", icon: <Database className="h-6 w-6 text-primary" /> },
  { name: "Git", icon: <GitMerge className="h-6 w-6 text-primary" /> },
  { name: "Figma", icon: <PenTool className="h-6 w-6 text-primary" /> },
];

const About = async () => {
  const data = await getMyData();
  const { name, about } = data?.[0];
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <AnimatedWrapper
            animation="animate-fade-in-right"
            delay={200}
            className="md:col-span-3 space-y-6"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">{about}</p>
          </AnimatedWrapper>
          <AnimatedWrapper
            animation="animate-fade-in-left"
            delay={200}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
              <Image
                src={profilepicture}
                alt={name}
                fill
                className="object-cover"
                data-ai-hint="profile picture"
              />
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper
          animation="animate-fade-in-up"
          delay={400}
          className="mt-20"
        >
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-center">
                My Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="text-md p-3 flex items-center gap-2 transition-all hover:bg-primary/10"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default About;
