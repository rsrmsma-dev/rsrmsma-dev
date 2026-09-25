function About() {

    const cards = [
        {
            label: "Education",
            value: "BS Information Technology"
        },
        {
            label: "Location",
            value: "Cebu City, Philippines"
        },
        {
            label: "Focus",
            value: "Web Development"
        },
        {
            label: "Interests",
            value: "Cybersecurity & Networking"
        }
    ];

    return (
        <section
            id="about"
            className="border-t border-white/5 px-6 py-28"
        >

            <div className="mx-auto max-w-6xl">

                <p className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                    01 / ABOUT
                </p>

                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                    A little about me.
                </h2>

                <div className="mt-12 grid gap-12 lg:grid-cols-2">

                    <div>

                        <p className="text-lg leading-9 text-slate-400">

                            I'm an Information Technology graduate
                            interested in building practical software
                            and technology solutions.

                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-400">

                            I enjoy solving technical problems,
                            learning new technologies, and working
                            with others to develop practical solutions.

                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        {cards.map((card) => (

                            <div
                                key={card.label}
                                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-400/30"
                            >

                                <p className="text-sm text-slate-500">
                                    {card.label}
                                </p>

                                <p className="mt-3 font-bold">
                                    {card.value}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;