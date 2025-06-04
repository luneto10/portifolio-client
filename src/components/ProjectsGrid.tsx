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
                    className="transition-shadow hover:shadow-lg bg-background/80"
                >
                    <CardContent className="flex flex-col gap-2 py-4">
                        <div className="font-semibold flex items-center gap-1">
                            {project.name}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener"
                                className="ml-1 text-neutral-400 hover:text-primary transition-colors"
                            >
                                <ArrowUpRight className="size-4" />
                            </a>
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            {project.description}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400"
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
