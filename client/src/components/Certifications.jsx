const certifications = [
    {
        year: "2025",
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy"
    },
    {
        year: "2024",
        title: "CCNAv7 Switching, Routing, Wireless Essentials",
        issuer: "Cisco Networking Academy"
    },
    {
        year: "2024",
        title: "CCNAv7 Introduction to Networks",
        issuer: "Cisco Networking Academy"
    },
    {
        year: "—",
        title: "Introduction to Penetration Testing",
        issuer: "Street Level Ministry"
    }
];

function Certifications() {

    return (
        <section className="bg-slate-900/40 px-6 py-28">

            <div className="mx-auto max-w-6xl">

                <p className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                    06 / CERTIFICATIONS
                </p>

                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                    Certifications.
                </h2>

                <div className="mt-12 grid gap-4 md:grid-cols-2">

                    {certifications.map((cert) => (

                        <div
                            key={cert.title}
                            className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-400/30"
                        >

                            <p className="font-mono text-sm text-cyan-400">
                                {cert.year}
                            </p>

                            <h3 className="mt-3 font-bold">
                                {cert.title}
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                {cert.issuer}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Certifications;