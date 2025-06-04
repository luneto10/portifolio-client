import TechBackground from "@/components/TechBackground";
import AboutSection from "@/components/sections/AboutSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
    return (
        <>
            <TechBackground />
            <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory relative z-10 no-scrollbar">
                <AboutSection />
                <TechnologiesSection />
                <ProjectsSection />
            </main>
        </>
    );
}
