import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Github, Mail, Linkedin } from "lucide-react";
import EducationCodeBlock from "@/components/EducationCodeBlock";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen w-full flex flex-col items-center justify-center gap-8 snap-start animate-in fade-in slide-in-from-bottom-6 px-8 pt-24"
        >
            <Avatar className="size-64 border">
                <AvatarImage src="/avatar.png" alt="Your avatar" />
            </Avatar>
            <h1 className="text-3xl font-bold tracking-tight text-center text-neutral-400">
                Luciano Carvalho Neto
            </h1>
            <p className="text-5xl font-bold tracking-tight text-center bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-gradient">
                Full Stack Developer
            </p>
            <EducationCodeBlock />
            <div className="flex gap-3 mt-2">
                <a
                    href="mailto:lguedesdecarvalhon2@huskers.unl.edu"
                    className="hover:text-primary transition-colors"
                    aria-label="Email"
                >
                    <Mail className="size-5" />
                </a>
                <a
                    href="https://github.com/luneto10"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                >
                    <Github className="size-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/luciano-carvalho-honors-computerscience-developer/"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="size-5" />
                </a>
            </div>
        </section>
    );
}
