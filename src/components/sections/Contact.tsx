import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import getMyData from "@/lib/getMyData";

const Contact = async () => {
  const data = await getMyData();
  const { email, address, githubUrl, twitterUrl, linkedinUrl } = data?.[0];
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animation="animate-fade-in-down" className="mb-12">
          <h2 className="text-center font-headline text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>
        </AnimatedWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedWrapper
            animation="animate-fade-in-right"
            delay={200}
            className="space-y-6"
          >
            <h3 className="font-headline text-3xl font-semibold">
              Let's build something great!
            </h3>
            <p className="text-muted-foreground text-lg">
              Have a project in mind, or just want to say hi? Feel free to reach
              out. I'm always open to discussing new opportunities and creative
              ideas.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@shahriarridom.dev"
                className="flex items-center gap-4 text-lg transition-colors hover:text-primary"
              >
                <Mail className="h-6 w-6" />
                <span>{email}</span>
              </a>
              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-6 w-6" />
                <span>{address}</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-7 w-7" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper animation="animate-fade-in-left" delay={200}>
            <ContactForm />
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
