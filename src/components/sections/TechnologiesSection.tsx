import { frontend, backend, tools } from "@/data/technologies";

export default function TechnologiesSection() {
    return (
        <section
            id="technologies"
            className="min-h-screen w-full flex flex-col items-center justify-center gap-8 snap-start animate-in fade-in slide-in-from-bottom-6 px-8 pt-24"
        >
            <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
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
    );
}
