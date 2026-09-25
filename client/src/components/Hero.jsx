import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, GitBranch, Mail } from "lucide-react";

import BusinessCard from "./BusinessCard";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pt-24"
        >
            {/* Background accents */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(11,31,58,0.05),_transparent_55%)]" />
                <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
            </div>

            <div className="mx-auto grid w-full max-w-6xl gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

                {/* LEFT */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8892e]/25 bg-[#b8892e]/5 px-4 py-2"
                    >
                        <span className="h-2 w-2 rounded-full bg-[#b8892e]" />
                        <span className="text-sm font-medium text-[#8a6a24]">
                            IT Associate · Developer at MSMA Solutions Dept.
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-[3.4rem] xl:text-6xl"
                    >
                        Building{" "}
                        <span className="text-[#b8892e]">practical</span>
                        <br />
                        technology solutions.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="mt-7 max-w-xl text-lg leading-8 text-slate-600"
                    >
                        I'm Rovic Steve Real, an IT professional focused on
                        web and business systems — currently contributing to
                        a cloud-based HRIS with biometric attendance at MSMA
                        Solutions Department.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-9 flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-lg bg-[#0b1f3a] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#12294a] hover:shadow-lg hover:shadow-slate-900/15"
                        >
                            View my work
                            <ArrowRight
                                size={18}
                                className="transition duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-[#0b1f3a] hover:text-[#0b1f3a]"
                        >
                            Contact me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        className="mt-9 flex flex-wrap gap-6 text-slate-500"
                    >
                        <a
                            href="https://github.com/rsrmsma-dev"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="group inline-flex items-center gap-2 transition duration-300 hover:text-[#0b1f3a]"
                        >
                            <GitBranch
                                size={19}
                                className="transition group-hover:-translate-y-0.5"
                            />
                            <span className="text-sm font-medium">
                                GitHub
                            </span>
                            <ArrowUpRight
                                size={14}
                                className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                            />
                        </a>

                        <a
                            href="mailto:rovic.steve@gmail.com"
                            aria-label="Email"
                            className="group inline-flex items-center gap-2 transition duration-300 hover:text-[#0b1f3a]"
                        >
                            <Mail
                                size={19}
                                className="transition group-hover:-translate-y-0.5"
                            />
                            <span className="text-sm font-medium">
                                Email
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT — Business card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                >
                    <BusinessCard />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
