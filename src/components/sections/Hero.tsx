import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import getMyData from "@/lib/getMyData";

const Hero = async () => {
  const data = await getMyData();
  const { name, title, subtitle } = data?.[0];
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-primary/30 bg-[length:200%_200%] animate-gradient-xy"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <AnimatedWrapper animation="animate-fade-in-down" delay={200}>
          <p className="font-headline text-lg md:text-xl text-primary">
            Hi, my name is
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper animation="animate-fade-in-down" delay={300}>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground mt-2">
            {name}
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animation="animate-fade-in-down" delay={400}>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-muted-foreground/80 mt-2">
            {title}
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper animation="animate-fade-in-up" delay={500}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper animation="animate-fade-in-up" delay={600}>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">Explore Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Hero;
