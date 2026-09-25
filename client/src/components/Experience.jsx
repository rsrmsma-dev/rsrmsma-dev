import { Briefcase } from "lucide-react";

const roles = [
    {
        period: "2026 — Present",
        title: "IT Associate / Developer",
        org: "MSMA Solutions Department",
        current: true,
        description:
            "Contributing to the development of a cloud-based Human Resources Information System (HRIS) with biometric and facial-recognition attendance capabilities.",
    },
    {
        period: "Feb 2026 — May 2026",
        title: "SAP ABAP Intern",
        org: "Accenture Inc., Philippines",
        current: false,
        description:
            "Completed the SAP ABAP internship program, gaining exposure to enterprise systems and business technology within a professional environment.",
    },
];

function Experience() {
    return (
        <section id="experience" className="px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b8892e]">
                    03 / Experience
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Where I've worked.
                </h2>

                <div className="mt-12 space-y-6">
                    {roles.map((role) => (
                        <div
                            key={role.title}
                            className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-[#b8892e]/30 hover:shadow-md hover:shadow-slate-900/5 sm:p-10"
                        >
                            <div className="flex gap-6">
                                <div className="hidden h-fit rounded-xl bg-[#0b1f3a]/5 p-4 sm:block">
                                    <Briefcase
                                        size={26}
                                        className="text-[#0b1f3a]"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                        <div>
                                            <p className="text-sm font-semibold text-[#b8892e]">
                                                {role.period}
                                            </p>

                                            <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                                {role.title}
                                            </h3>

                                            <p className="mt-1 text-slate-500">
                                                {role.org}
                                            </p>
                                        </div>

                                        {role.current && (
                                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                                        {role.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
