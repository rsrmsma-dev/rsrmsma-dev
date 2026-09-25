import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    GitBranch,
    Mail
} from "lucide-react";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
        >
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut"
                    }}
                    className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.8,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
                />

            </div>

            <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">

                {/* =========================
                    LEFT SIDE
                ========================== */}

                <div>

                    {/* Status badge */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15
                        }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
                    >
                        <motion.span
                            animate={{
                                opacity: [1, 0.4, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="h-2 w-2 rounded-full bg-cyan-400"
                        />

                        <span className="text-sm text-cyan-400">
                            IT Associate · Developer
                        </span>
                    </motion.div>


                    {/* Main heading */}
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 45
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut"
                        }}
                        className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                    >
                        Building{" "}

                        <span className="text-cyan-400">
                            practical
                        </span>

                        <br />

                        technology solutions.
                    </motion.h1>


                    {/* Description */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.55,
                            ease: "easeOut"
                        }}
                        className="mt-7 max-w-xl text-lg leading-8 text-slate-400"
                    >
                        I'm Rovic Steve Real, an Information Technology
                        graduate interested in web development,
                        cybersecurity, network infrastructure, and
                        IT support.
                    </motion.p>


                    {/* Buttons */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.75,
                            ease: "easeOut"
                        }}
                        className="mt-9 flex flex-wrap gap-4"
                    >

                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
                        >
                            View my work

                            <ArrowRight
                                size={18}
                                className="transition duration-300 group-hover:translate-x-1"
                            />
                        </a>


                        <a
                            href="#contact"
                            className="rounded-lg border border-slate-700 px-6 py-3 font-bold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            Contact me
                        </a>

                    </motion.div>


                    {/* Social links */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.95
                        }}
                        className="mt-9 flex flex-wrap gap-5 text-slate-500"
                    >

                        {/* GitHub */}
                        <a
                            href="https://github.com/rsrmsma-dev"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="group inline-flex items-center gap-2 transition duration-300 hover:text-cyan-400"
                        >
                            <GitBranch
                                size={21}
                                className="transition group-hover:-translate-y-0.5"
                            />

                            <span className="text-sm">
                                GitHub
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                            />
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="group inline-flex items-center gap-2 transition duration-300 hover:text-cyan-400"
                        >
                            <span className="text-sm">
                                LinkedIn
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                            />
                        </a>


                        {/* Email */}
                        <a
                            href="mailto:rovic.steve@gmail.com"
                            aria-label="Email"
                            className="group inline-flex items-center gap-2 transition duration-300 hover:text-cyan-400"
                        >
                            <Mail
                                size={21}
                                className="transition group-hover:-translate-y-0.5"
                            />

                            <span className="text-sm">
                                Email
                            </span>
                        </a>

                    </motion.div>

                </div>


                {/* =========================
                    RIGHT SIDE
                ========================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 70
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.4,
                        ease: "easeOut"
                    }}
                    className="relative"
                >

                    {/* Card glow */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.04, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -inset-4 rounded-3xl bg-cyan-400/5 blur-2xl"
                    />


                    {/* Developer card */}
                    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-sm">

                        {/* Window header */}
                        <div className="mb-7 flex items-center gap-2">

                            <span className="h-3 w-3 rounded-full bg-red-400" />

                            <span className="h-3 w-3 rounded-full bg-yellow-400" />

                            <span className="h-3 w-3 rounded-full bg-green-400" />

                            <span className="ml-3 font-mono text-xs text-slate-600">
                                developer.js
                            </span>

                        </div>


                        {/* Code */}
                        <div className="font-mono text-sm leading-8 sm:text-base">

                            <p>
                                <span className="text-purple-400">
                                    const
                                </span>{" "}
                                developer = {"{"}
                            </p>

                            <p className="pl-5">
                                name:{" "}
                                <span className="text-green-400">
                                    "Rovic Steve Real"
                                </span>,
                            </p>

                            <p className="pl-5">
                                role:{" "}
                                <span className="text-green-400">
                                    "IT Associate"
                                </span>,
                            </p>

                            <p className="pl-5">
                                stack:{" "}
                                <span className="text-green-400">
                                    [
                                    "React",
                                    "Node.js",
                                    "Express"
                                    ]
                                </span>,
                            </p>

                            <p className="pl-5">
                                focus:{" "}
                                <span className="text-green-400">
                                    [
                                    "Web",
                                    "Cybersecurity"
                                    ]
                                </span>,
                            </p>

                            <p className="pl-5">
                                status:{" "}
                                <span className="text-green-400">
                                    "Always learning"
                                </span>
                            </p>

                            <p>
                                {"}"};
                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;