function About() {
    const cards = [
        { label: "Education", value: "BS Information Technology" },
        { label: "Location", value: "Cebu City, Philippines" },
        { label: "Focus", value: "Web & Business Systems" },
        { label: "Interests", value: "Cybersecurity & Networking" },
    ];

    return (
        <section id="about" className="border-t border-slate-100 px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b8892e]">
                    01 / About
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    A little about me.
                </h2>

                <div className="mt-12 grid gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-lg leading-9 text-slate-600">
                            I'm an Information Technology graduate interested
                            in building practical software and technology
                            solutions.
                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">
                            I enjoy solving technical problems, learning new
                            technologies, and working with others to develop
                            practical solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {cards.map((card) => (
                            <div
                                key={card.label}
                                className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 transition hover:border-[#b8892e]/40 hover:bg-white hover:shadow-sm"
                            >
                                <p className="text-sm text-slate-500">
                                    {card.label}
                                </p>
                                <p className="mt-3 font-bold text-slate-900">
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
