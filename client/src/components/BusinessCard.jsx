import { useState } from "react";
import { motion } from "framer-motion";
import {
    Building2,
    Download,
    GitBranch,
    Mail,
    MapPin,
    RotateCw,
} from "lucide-react";

import { CONTACT, downloadVCard } from "../utils/vcard";

function BusinessCard() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <div className="flip-perspective w-full max-w-sm">
                <motion.div
                    role="button"
                    tabIndex={0}
                    aria-label="Flip business card"
                    onClick={() => setFlipped((f) => !f)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setFlipped((f) => !f);
                        }
                    }}
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flip-card relative aspect-[16/10] w-full cursor-pointer select-none outline-none"
                >
                    {/* FRONT */}
                    <div className="flip-face absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1f3a] via-[#12294a] to-[#0b1f3a] p-6 shadow-2xl shadow-slate-900/20 sm:p-7">
                        {/* decorative gold arcs */}
                        <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-[#d4af62]/20" />
                        <div className="pointer-events-none absolute -bottom-16 -right-6 h-40 w-40 rounded-full bg-[#d4af62]/10 blur-2xl" />

                        <div className="relative flex h-full flex-col justify-between text-white">
                            <div className="flex items-start justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#d4af62]/40 font-display text-lg font-bold text-[#d4af62]">
                                    RSR
                                </div>

                                <RotateCw
                                    size={16}
                                    className="mt-1 text-white/30"
                                />
                            </div>

                            <div>
                                <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                                    {CONTACT.fullName}
                                </p>

                                <p className="mt-1 text-sm font-medium text-[#d4af62]">
                                    {CONTACT.title}
                                </p>

                                <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                                    <Building2 size={13} />
                                    {CONTACT.org}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BACK */}
                    <div className="flip-face flip-face-back absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-7">
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <p className="font-display text-sm font-bold text-slate-900">
                                    Contact details
                                </p>

                                <div className="mt-4 space-y-3 text-sm text-slate-600">
                                    <div className="flex items-center gap-3">
                                        <Mail
                                            size={16}
                                            className="shrink-0 text-[#b8892e]"
                                        />
                                        <span className="truncate">
                                            {CONTACT.email}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <GitBranch
                                            size={16}
                                            className="shrink-0 text-[#b8892e]"
                                        />
                                        <span className="truncate">
                                            github.com/rsrmsma-dev
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <MapPin
                                            size={16}
                                            className="shrink-0 text-[#b8892e]"
                                        />
                                        <span>{CONTACT.location}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    downloadVCard();
                                }}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1f3a] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#12294a]"
                            >
                                <Download size={16} />
                                Save to contacts
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <p className="mt-4 text-center text-xs font-medium tracking-wide text-slate-400">
                {flipped
                    ? "Tap the card to flip back"
                    : "Tap the card to see contact details"}
            </p>
        </div>
    );
}

export default BusinessCard;
