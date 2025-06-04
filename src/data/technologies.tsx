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

export const frontend = [
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

export const backend = [
    { name: "Python", icon: <FaPython className="size-7 text-[#3776AB]" /> },
    { name: "Django", icon: <SiDjango className="size-7 text-[#179269]" /> },
    { name: "Golang", icon: <FaGolang className="size-7 text-[#00ADD8]" /> },
    { name: "C#", icon: <SiSharp className="size-7 text-[#239120]" /> },
    { name: ".NET", icon: <SiDotnet className="size-7 text-[#6f59c0]" /> },
    { name: "SQL", icon: <FaDatabase className="size-7 text-[#336791]" /> },
];

export const tools = [
    { name: "Git", icon: <FaGitAlt className="size-7 text-[#F05032]" /> },
    {
        name: "GitHub",
        icon: (
            <SiGithub className="size-7 dark:text-[#fcf4f4] text-[#181717]" />
        ),
    },
];
