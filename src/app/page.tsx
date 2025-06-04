import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Github, Mail, Linkedin } from "lucide-react";
import {
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaJs,
    FaDatabase,
    FaDocker,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
    SiDjango,
    SiSharp,
    SiDotnet,
    SiTypescript,
    SiGithub,
    SiTailwindcss,
} from "react-icons/si";
import EducationCodeBlock from "@/components/EducationCodeBlock";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechBackground from "@/components/TechBackground";

const frontend = [
    { name: "React", icon: <FaReact className="size-7 text-[#61DAFB]" /> },
    { name: "HTML", icon: <FaHtml5 className="size-7 text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="size-7 text-[#1572B6]" /> },
    {
        name: "Tailwind",
        icon: <SiTailwindcss className="size-7 text-[#38BDF8]" />,
    },
    { name: "JavaScript", icon: <FaJs className="size-7 text-[#F7DF1E]" /> },
    {
        name: "TypeScript",
        icon: <SiTypescript className="size-7 text-[#3178C6]" />,
    },
];
const backend = [
    { name: "Python", icon: <FaPython className="size-7 text-[#3776AB]" /> },
    { name: "Django", icon: <SiDjango className="size-7 text-[#179269]" /> },
    { name: "Golang", icon: <FaGolang className="size-7 text-[#00ADD8]" /> },
    { name: "C#", icon: <SiSharp className="size-7 text-[#239120]" /> },
    { name: ".NET", icon: <SiDotnet className="size-7 text-[#6f59c0]" /> },
    { name: "SQL", icon: <FaDatabase className="size-7 text-[#336791]" /> },
];
const tools = [
    { name: "Git", icon: <FaGitAlt className="size-7 text-[#F05032]" /> },
    {
        name: "GitHub",
        icon: (
            <SiGithub className="size-7 dark:text-[#fcf4f4] text-[#181717]" />
        ),
    },
];

const about = {
    name: "Luciano Carvalho Neto",
    location: "Lincoln, NE, USA",
    university: "University of Nebraska - Lincoln",
    degree: "BSc in Computer Science, Minor in Mathematics and Business",
    graduation: "May 2027",
    honors: "University Honors Program, Dean's List, Global Laureate Tuition Scholarship",
    languages: "English, Portuguese",
};

const projects = [
    {
        name: "PayBy",
        description:
            "Full-stack web app for mobile restaurant bill payments. Built APIs, managed databases, and implemented features using Python, Django, SQL, and React.",
        link: "https://payby-dev2-app.web.app/donaurelio",
        technologies: [
            {
                name: "Python",
                icon: <FaPython className="size-5 text-[#3776AB]" />,
            },
            {
                name: "Django",
                icon: <SiDjango className="size-5 text-[#179269]" />,
            },
            {
                name: "React",
                icon: <FaReact className="size-5 text-[#61DAFB]" />,
            },
            {
                name: "SQL",
                icon: <FaDatabase className="size-5 text-[#336791]" />,
            },
        ],
    },
    {
        name: "Omics Data Integration",
        description:
            "Scalable algorithms and databases in Python (Pandas) for high-throughput omics data integration.",
        link: "https://cse.unl.edu/~qyao/",
        technologies: [
            {
                name: "Python",
                icon: <FaPython className="size-5 text-[#3776AB]" />,
            }
        ],
    },
    {
        name: "Voting System",
        description:
            "A full-stack voting system built with Go and React. Features include form creation, answer submission, and submission management. Implements Docker containerization and PostgreSQL database.",
        link: "https://github.com/luneto10/voting-system",
        technologies: [
            {
                name: "Golang",
                icon: <FaGolang className="size-5 text-[#00ADD8]" />,
            },
            {
                name: "React",
                icon: <FaReact className="size-5 text-[#61DAFB]" />,
            },
            {
                name: "TypeScript",
                icon: <SiTypescript className="size-5 text-[#3178C6]" />,
            },
            {
                name: "PostgreSQL",
                icon: <FaDatabase className="size-5 text-[#336791]" />,
            },
            {
                name: "Docker",
                icon: <FaDocker className="size-5 text-[#2496ED]" />,
            },
        ],
    },
];

export default function Home() {
    return (
        <>
            <TechBackground />
            <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory relative z-10 no-scrollbar px-8">
                <section
                    id="about"
                    className="h-screen w-full flex flex-col items-center justify-center gap-8 snap-start animate-in fade-in slide-in-from-bottom-6"
                >
                    <Avatar className="size-64 border">
                        <AvatarImage src="/avatar.png" alt="Your avatar" />
                    </Avatar>
                    <h1 className="text-4xl font-bold tracking-tight text-center">
                        {about.name}
                    </h1>
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
                <section
                    id="technologies"
                    className="h-screen w-full flex flex-col items-center justify-center gap-8 snap-start animate-in fade-in slide-in-from-bottom-6"
                >
                    <h2 className="text-2xl font-semibold mb-2">
                        Technologies
                    </h2>
                    <div className="flex flex-col gap-8 w-full max-w-5xl">
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-purple-400">
                                Frontend
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
                                {frontend.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 flex items-center justify-center mb-1">
                                            {tech.icon}
                                        </div>
                                        <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-green-400">
                                Backend
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
                                {backend.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 flex items-center justify-center mb-1">
                                            {tech.icon}
                                        </div>
                                        <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-blue-400">
                                Tools
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
                                {tools.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 flex items-center justify-center mb-1">
                                            {tech.icon}
                                        </div>
                                        <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="projects"
                    className="h-screen w-full flex flex-col items-center justify-center gap-8 snap-start animate-in fade-in slide-in-from-bottom-6"
                >
                    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                    <ProjectsGrid projects={projects} />
                </section>
            </main>
        </>
    );
}
