import { Briefcase } from "lucide-react";

function Experience() {

    return (
        <section
            id="experience"
            className="px-6 py-28"
        >

            <div className="mx-auto max-w-6xl">

                <p className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                    03 / EXPERIENCE
                </p>

                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                    Where I've worked.
                </h2>

                <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">

                    <div className="flex gap-6">

                        <div className="hidden h-fit rounded-xl bg-cyan-400/10 p-4 sm:block">

                            <Briefcase
                                size={26}
                                className="text-cyan-400"
                            />

                        </div>

                        <div className="flex-1">

                            <div className="flex flex-col justify-between gap-2 sm:flex-row">

                                <div>

                                    <p className="font-mono text-sm text-cyan-400">
                                        FEB 2026 — MAY 2026
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold">
                                        SAP ABAP Intern
                                    </h3>

                                    <p className="mt-1 text-slate-500">
                                        Accenture Inc., Philippines
                                    </p>

                                </div>

                                <span className="text-sm text-slate-600">
                                    Internship
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Experience;