import {
    Code2,
    Database,
    GitBranch,
    Globe,
    Server,
    Shield
} from "lucide-react";

const skills = [
    {
        icon: Globe,
        title: "Web Development",
        items: ["HTML/CSS", "JavaScript"]
    },
    {
        icon: Server,
        title: "Backend",
        items: ["Node.js", "PHP"]
    },
    {
        icon: Database,
        title: "Database",
        items: ["SQL"]
    },
    {
        icon: Code2,
        title: "Frameworks & UI",
        items: ["React", "Tailwind CSS", "Bootstrap"]
    },
    {
        icon: GitBranch,
        title: "Tools",
        items: ["Git", "GitHub"]
    },
    {
        icon: Shield,
        title: "IT Interests",
        items: [
            "Cybersecurity",
            "Networking",
            "IT Support"
        ]
    }
];

function Skills() {

    return (
        <section
            id="skills"
            className="bg-slate-900/40 px-6 py-28"
        >

            <div className="mx-auto max-w-6xl">

                <p className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                    02 / SKILLS
                </p>

                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                    My technical toolkit.
                </h2>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {skills.map((skill) => {

                        const Icon = skill.icon;

                        return (
                            <div
                                key={skill.title}
                                className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                            >

                                <Icon
                                    size={28}
                                    className="text-cyan-400"
                                />

                                <h3 className="mt-6 text-xl font-bold">
                                    {skill.title}
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-2">

                                    {skill.items.map((item) => (

                                        <span
                                            key={item}
                                            className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-slate-400"
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