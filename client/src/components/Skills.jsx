import {
    Code2,
    Database,
    GitBranch,
    Globe,
    Server,
    Shield,
} from "lucide-react";

const skills = [
    { icon: Globe, title: "Web Development", items: ["HTML/CSS", "JavaScript"] },
    { icon: Server, title: "Backend", items: ["Node.js", "PHP"] },
    { icon: Database, title: "Database", items: ["SQL"] },
    {
        icon: Code2,
        title: "Frameworks & UI",
        items: ["React", "Tailwind CSS", "Bootstrap"],
    },
    { icon: GitBranch, title: "Tools", items: ["Git", "GitHub"] },
    {
        icon: Shield,
        title: "IT Interests",
        items: ["Cybersecurity", "Networking", "IT Support"],
    },
];

function Skills() {
    return (
        <section id="skills" className="bg-slate-50/60 px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b8892e]">
                    02 / Skills
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    My technical toolkit.
                </h2>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={skill.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b8892e]/40 hover:shadow-md hover:shadow-slate-900/5"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b1f3a]/5">
                                    <Icon
                                        size={22}
                                        className="text-[#0b1f3a]"
                                    />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    {skill.title}
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-600"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;
