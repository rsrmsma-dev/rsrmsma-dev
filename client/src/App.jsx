import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    GraduationCap,
    Mail,
    MapPin,
    ShieldCheck,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "PHP",
    "SQL",
    "Git",
    "GitHub",
];

const certifications = [
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        year: "2025",
    },
    {
        title: "Introduction to Penetration Testing",
        issuer: "Street Level Ministry",
        year: "",
    },
    {
        title: "CCNAv7 Switching, Routing, Wireless Essentials",
        issuer: "Cisco Networking Academy",
        year: "2024",
    },
    {
        title: "CCNAv7 Introduction to Networks",
        issuer: "Cisco Networking Academy",
        year: "2024",
    },
];

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* NAVBAR */}
            <Navbar />

            <main>
                {/* =========================
                    HOME / HERO
                ========================== */}
                <section id="home">
                    <Hero />
                </section>

                {/* =========================
                    ABOUT
                ========================== */}
                <section
                    id="about"
                    className="border-t border-slate-800/60 px-6 py-32"
                >
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm tracking-widest text-cyan-400">
                                01 / ABOUT
                            </p>

                            <div className="mt-5 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                                <div>
                                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                                        Building with purpose.
                                    </h2>
                                </div>

                                <div className="space-y-6 text-lg leading-8 text-slate-400">
                                    <p>
                                        I'm Rovic Steve Real, an Information
                                        Technology graduate with interests in
                                        web development, cybersecurity, network
                                        infrastructure, and IT support.
                                    </p>

                                    <p>
                                        I enjoy solving technical problems,
                                        learning new technologies, and working
                                        with others to create practical
                                        technology solutions.
                                    </p>

                                    <p>
                                        My approach is simple: keep learning,
                                        understand the problem, and build
                                        solutions that are useful and reliable.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =========================
                    SKILLS
                ========================== */}
                <section
                    id="skills"
                    className="border-t border-slate-800/60 px-6 py-32"
                >
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm tracking-widest text-cyan-400">
                                02 / SKILLS
                            </p>

                            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                                Technical toolkit
                            </h2>

                            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.04,
                                        }}
                                        className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
                                    >
                                        <Code2
                                            size={22}
                                            className="text-cyan-400"
                                        />

                                        <h3 className="mt-5 text-lg font-bold">
                                            {skill}
                                        </h3>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =========================
                    EXPERIENCE
                ========================== */}
                <section
                    id="experience"
                    className="border-t border-slate-800/60 px-6 py-32"
                >
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm tracking-widest text-cyan-400">
                                03 / EXPERIENCE
                            </p>

                            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                                Professional experience
                            </h2>

                            <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
                                <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <BriefcaseBusiness
                                                size={22}
                                                className="text-cyan-400"
                                            />

                                            <span className="font-mono text-sm text-cyan-400">
                                                FEB 2026 — MAY 2026
                                            </span>
                                        </div>

                                        <h3 className="mt-5 text-3xl font-black">
                                            Intern — SAP ABAP
                                        </h3>

                                        <p className="mt-2 text-xl text-slate-400">
                                            Accenture Inc.
                                        </p>

                                        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                            <MapPin size={16} />
                                            Philippines
                                        </div>
                                    </div>

                                    <div className="max-w-md text-slate-400 leading-7">
                                        Internship experience focused on SAP
                                        ABAP within a professional technology
                                        environment, gaining exposure to
                                        enterprise systems and business
                                        technology.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =========================
                    PROJECTS
                ========================== */}
                <section
                    id="projects"
                    className="border-t border-slate-800/60 px-6 py-32"
                >
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm tracking-widest text-cyan-400">
                                04 / PROJECTS
                            </p>

                            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                                Selected project
                            </h2>

                            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
                                <div className="p-8 sm:p-10 lg:p-12">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 font-mono text-sm text-cyan-400">
                                            BACKEND DEVELOPER
                                        </span>

                                        <span className="font-mono text-sm text-slate-500">
                                            2025
                                        </span>
                                    </div>

                                    <h3 className="mt-10 text-4xl font-black sm:text-5xl">
                                        FACECHECK
                                    </h3>

                                    <p className="mt-3 text-xl text-slate-400">
                                        AI-Powered Attendance System
                                    </p>

                                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                                        A biometric attendance system designed
                                        for university students and faculty.
                                        The system uses real-time facial
                                        recognition and liveness detection to
                                        automate attendance logging and reduce
                                        proxy attendance.
                                    </p>

                                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                        {[
                                            "Facial Recognition",
                                            "Liveness Detection",
                                            "Role-Based Access",
                                            "Reports & Analytics",
                                        ].map((feature) => (
                                            <div
                                                key={feature}
                                                className="rounded-xl border border-slate-800 p-4"
                                            >
                                                <ShieldCheck
                                                    size={19}
                                                    className="text-cyan-400"
                                                />

                                                <p className="mt-3 text-sm font-medium text-slate-300">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =========================
                    EDUCATION
                ========================== */}
                <section
                    id="education"
                    className="border-t border-slate-800/60 px-6 py-32"
                >
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm tracking-widest text-cyan-400">
                                05 / EDUCATION
                            </p>

                            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                                Education
                            </h2>

                            <div className="mt-12 grid gap-6 md:grid-cols-2">
                                <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
                                    <GraduationCap
                                        size={28}
                                        className="text-cyan-400"
                                    />

                                    <p className="mt-8 font-mono text-sm text-cyan-400">
                                        2022 — 2026
                                    </p>

                                    <h3 className="mt-3 text-2xl font-black">
                                        BS Information Technology
                                    </h3>

                                    <p className="mt-3 text-slate-400">
                                        University of Cebu — Main Campus
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
                                    <p className="font-mono text-sm text-cyan-400">
                                        AREAS OF INTEREST
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {[
                                            "Web Development",
                                            "Cybersecurity",
                                            "Network Infrastructure",
                                            "IT Support",
                                        ].map((interest) => (
                                            <span
                                                key={interest}
                                                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =========================
                    CERTIFICATIONS
                ========================== */}
                <section
                    id="certifications"
                    className="border-t border-slate-800/60 px-6 py-32"
                >
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm tracking-widest text-cyan-400">
                                06 / CERTIFICATIONS
                            </p>

                            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                                Continuous learning
                            </h2>

                            <div className="mt-12 grid gap-4 md:grid-cols-2">
                                {certifications.map((cert) => (
                                    <div
                                        key={cert.title}
                                        className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:border-cyan-400/40"
                                    >
                                        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                                            {cert.year || "CERTIFICATION"}
                                        </p>

                                        <h3 className="mt-4 text-lg font-bold">
                                            {cert.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =========================
                    CONTACT
                ========================== */}
                <section
                    id="contact"
                    className="border-t border-slate-800/60 px-6 py-32"
                >
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.03] p-8 text-center sm:p-12 lg:p-20"
                        >
                            <p className="font-mono text-sm tracking-widest text-cyan-400">
                                07 / CONTACT
                            </p>

                            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                                Let's build something useful.
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                                Interested in technology, development, and
                                solving practical problems. Feel free to reach
                                out.
                            </p>

                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <a
                                    href="mailto:rovic.steve@gmail.com"
                                    className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                                >
                                    <Mail size={18} />
                                    Email me
                                </a>

                                <a
                                    href="https://github.com/rsrmsma-dev"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-3 font-bold transition hover:border-cyan-400 hover:text-cyan-400"
                                >
                                    GitHub
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-slate-800/60 px-6 py-8">
                <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
                    <p>© 2026 Rovic Steve Real</p>

                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="transition hover:text-cyan-400"
                    >
                        Back to top ↑
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default App;