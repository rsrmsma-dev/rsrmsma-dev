import { GraduationCap } from "lucide-react";

function Education() {
    return (
        <section id="education" className="px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b8892e]">
                    05 / Education
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Education.
                </h2>

                <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                    <div className="flex gap-6">
                        <div className="hidden rounded-xl bg-[#0b1f3a]/5 p-4 sm:block">
                            <GraduationCap
                                size={28}
                                className="text-[#0b1f3a]"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#b8892e]">
                                2022 — 2026
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                Bachelor of Science in Information Technology
                            </h3>

                            <p className="mt-2 text-slate-500">
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
