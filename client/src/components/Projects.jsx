import { ArrowUpRight, ScanFace } from "lucide-react";

function Projects() {
    const technologies = [
        "Facial Recognition",
        "Liveness Detection",
        "Attendance",
        "RBAC",
        "Analytics",
    ];

    return (
        <section id="projects" className="bg-slate-50/60 px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b8892e]">
                    04 / Projects
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    What I've built.
                </h2>

                <article className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="grid lg:grid-cols-5">
                        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#0e2444] to-[#12294a] lg:col-span-2">
                            <div className="absolute h-64 w-64 rounded-full bg-[#d4af62]/10 blur-3xl" />

                            <div className="relative text-center">
                                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-[#d4af62]/30 bg-white/5">
                                    <ScanFace
                                        size={64}
                                        strokeWidth={1}
                                        className="text-[#d4af62]"
                                    />
                                </div>

                                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                                    AI-Powered Attendance
                                </p>
                            </div>
                        </div>

                        <div className="p-8 lg:col-span-3 lg:p-10">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-[#b8892e]/30 bg-[#b8892e]/5 px-3 py-1 text-xs font-semibold text-[#8a6a24]">
                                    Backend Developer
                                </span>
                                <span className="text-sm text-slate-400">
                                    2025
                                </span>
                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-slate-900">
                                FACECHECK
                            </h3>

                            <p className="mt-2 text-xl text-slate-500">
                                AI-Powered Attendance System
                            </p>

                            <p className="mt-6 leading-8 text-slate-600">
                                A biometric attendance system designed to
                                automate attendance logging and provide
                                real-time monitoring through facial
                                recognition and liveness detection.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0b1f3a] transition hover:text-[#b8892e]">
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
