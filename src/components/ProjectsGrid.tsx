import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsGrid({
    projects,
}: {
    projects: {
        name: string;
        description: string;
        link: string;
        technologies: { name: string; icon: React.ReactNode }[];
    }[];
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {projects.map((project) => (
                <Card
                    key={project.name}
                    className="group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-background/80 mb-4"
                >
                    <CardContent className="flex flex-col justify-between h-full pt-2 pb-2">
                        <div className="flex flex-col gap-2">
                            <div className="font-semibold flex items-center gap-1">
                                {project.name}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener"
                                    className="ml-1 text-neutral-400 group-hover:text-primary transition-colors"
                                >
                                    <ArrowUpRight className="size-4" />
                                </a>
                            </div>
                            <div
                                className="text-sm text-neutral-600 dark:text-neutral-400"
                                dangerouslySetInnerHTML={{
                                    __html: project.description,
                                }}
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-1 h-10 w-10 text-neutral-600 dark:text-neutral-400"
                                    title={tech.name}
                                >
                                    {tech.icon}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
