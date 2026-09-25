import { ArrowUpRight, Download, Mail } from "lucide-react";

import { downloadVCard } from "../utils/vcard";

function Contact() {
    return (
        <section id="contact" className="px-6 py-28">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1f3a] via-[#0e2444] to-[#0b1f3a] px-8 py-16 text-center sm:px-16 sm:py-20">
                <p className="text-sm font-bold uppercase tracking-widest text-[#d4af62]">
                    07 / Contact
                </p>

                <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
                    Let's connect.
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    Interested in technology, development, or collaboration?
                    Feel free to reach out or save my details for later.
                </p>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="mailto:rovic.steve@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#d4af62] px-7 py-3.5 font-bold text-[#0b1f3a] transition hover:bg-[#e0c17e]"
                    >
                        <Mail size={18} />
                        Send me an email
                        <ArrowUpRight size={17} />
                    </a>

                    <button
                        onClick={downloadVCard}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 font-bold text-white transition hover:border-white/40 hover:bg-white/5"
                    >
                        <Download size={18} />
                        Save my contact
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
