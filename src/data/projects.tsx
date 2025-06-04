import { FaPython, FaReact, FaDatabase, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiDjango, SiTypescript, SiTailwindcss } from "react-icons/si";

export const projects = [
    {
        name: "Tango React",
        description:
            "A <strong>React</strong> application that implements the classic Binairo/Tango puzzle game. Players can solve logic puzzles by filling a grid following specific rules. Built with <strong>TypeScript</strong> and <strong>Tailwind CSS</strong>.",
        link: "https://github.com/luneto10/tango-react",
        technologies: [
            {
                name: "React",
                icon: <FaReact className="size-5 text-[#61DAFB]" />,
            },
            {
                name: "TypeScript",
                icon: <SiTypescript className="size-5 text-[#3178C6]" />,
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss className="size-5 text-[#38BDF8]" />,
            },
        ],
    },
    {
        name: "PayBy",
        description:
            "Full-stack web app for mobile restaurant bill payments. Built APIs, managed databases, and implemented features using <strong>Python</strong>, <strong>Django</strong>, <strong>SQL</strong>, and <strong>React</strong>.",
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
            "Scalable algorithms and databases in <strong>Python</strong> (Pandas) for high-throughput omics data integration.",
        link: "https://cse.unl.edu/~qyao/",
        technologies: [
            {
                name: "Python",
                icon: <FaPython className="size-5 text-[#3776AB]" />,
            },
        ],
    },
    {
        name: "Voting System",
        description:
            "A full-stack voting system built with <strong>Go</strong> and <strong>React</strong>. Features include form creation, answer submission, and submission management. Implements <strong>Docker</strong> containerization and <strong>PostgreSQL</strong> database.",
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
