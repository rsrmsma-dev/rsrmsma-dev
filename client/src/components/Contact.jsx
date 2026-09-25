import {
    ArrowUpRight,
    Mail
} from "lucide-react";

function Contact() {

    return (
        <section
            id="contact"
            className="px-6 py-32"
        >

            <div className="mx-auto max-w-3xl text-center">

                <p className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                    07 / CONTACT
                </p>

                <h2 className="mt-4 text-5xl font-black sm:text-6xl">
                    Let's connect.
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">

                    Interested in technology, development,
                    or collaboration? Feel free to reach out.

                </p>

                <a
                    href="mailto:rovic.steve@gmail.com"
                    className="mt-9 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
                >

                    <Mail size={18} />

                    Send me an email

                    <ArrowUpRight size={17} />

                </a>

            </div>

        </section>
    );
}

export default Contact;