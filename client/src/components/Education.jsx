import { GraduationCap } from "lucide-react";

function Education() {

    return (
        <section
            id="education"
            className="px-6 py-28"
        >

            <div className="mx-auto max-w-6xl">

                <p className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                    05 / EDUCATION
                </p>

                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                    Education.
                </h2>

                <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">

                    <div className="flex gap-6">

                        <div className="hidden rounded-xl bg-cyan-400/10 p-4 sm:block">

                            <GraduationCap
                                size={28}
                                className="text-cyan-400"
                            />

                        </div>

                        <div>

                            <p className="font-mono text-sm text-cyan-400">
                                2022 — 2026
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                Bachelor of Science in Information Technology
                            </h3>

                            <p className="mt-2 text-slate-400">
                                University of Cebu – Main Campus
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;