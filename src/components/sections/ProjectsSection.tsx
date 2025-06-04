import { projects } from "@/data/projects";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen w-full flex flex-col items-center justify-center gap-8 snap-start animate-in fade-in slide-in-from-bottom-6 px-8 pt-24"
        >
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ProjectsGrid projects={projects} />
        </section>
    );
}
