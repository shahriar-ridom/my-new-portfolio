import getMyData from "@/lib/getMyData";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = async () => {
  const data = await getMyData();
  const { name, githubUrl, linkedinUrl, twitterUrl } = data?.[0];
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted-foreground text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href={twitterUrl}
            className="text-muted-foreground hover:text-primary"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href={githubUrl}
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href={linkedinUrl}
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
