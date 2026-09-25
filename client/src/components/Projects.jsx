import {
    ArrowUpRight,
    ScanFace
} from "lucide-react";

function Projects() {

    const technologies = [
        "Facial Recognition",
        "Liveness Detection",
        "Attendance",
        "RBAC",
        "Analytics"
    ];

    return (
        <section
            id="projects"
            className="bg-slate-900/40 px-6 py-28"
        >

            <div className="mx-auto max-w-6xl">

                <p className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                    04 / PROJECTS
                </p>

                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                    What I've built.
                </h2>

                <article className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

                    <div className="grid lg:grid-cols-5">

                        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 lg:col-span-2">

                            <div className="absolute h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                            <div className="relative text-center">

                                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/5">

                                    <ScanFace
                                        size={64}
                                        strokeWidth={1}
                                        className="text-cyan-400"
                                    />

                                </div>

                                <p className="mt-7 font-mono text-xs tracking-[0.3em] text-slate-500">
                                    AI-POWERED ATTENDANCE
                                </p>

                            </div>

                        </div>


                        <div className="p-8 lg:col-span-3 lg:p-10">

                            <div className="flex flex-wrap items-center gap-3">

                                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-400">
                                    Backend Developer
                                </span>

                                <span className="text-sm text-slate-600">
                                    2025
                                </span>

                            </div>

                            <h3 className="mt-6 text-3xl font-black">
                                FACECHECK
                            </h3>

                            <p className="mt-2 text-xl text-slate-400">
                                AI-Powered Attendance System
                            </p>

                            <p className="mt-6 leading-8 text-slate-400">

                                A biometric attendance system designed
                                to automate attendance logging and provide
                                real-time monitoring through facial
                                recognition and liveness detection.

                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">

                                {technologies.map((technology) => (

                                    <span
                                        key={technology}
                                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                                    >
                                        {technology}
                                    </span>

                                ))}

                            </div>

                            <button
                                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
                            >

                                View project

                                <ArrowUpRight size={17} />

                            </button>

                        </div>

                    </div>

                </article>

            </div>

        </section>
    );
}

export default Projects;