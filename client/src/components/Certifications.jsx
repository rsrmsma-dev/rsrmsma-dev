const certifications = [
    {
        year: "2025",
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
    },
    {
        year: "2024",
        title: "CCNAv7 Switching, Routing, Wireless Essentials",
        issuer: "Cisco Networking Academy",
    },
    {
        year: "2024",
        title: "CCNAv7 Introduction to Networks",
        issuer: "Cisco Networking Academy",
    },
    {
        year: "—",
        title: "Introduction to Penetration Testing",
        issuer: "Street Level Ministry",
    },
];

function Certifications() {
    return (
        <section className="bg-slate-50/60 px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b8892e]">
                    06 / Certifications
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Continuous learning.
                </h2>

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                    {certifications.map((cert) => (
                        <div
                            key={cert.title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#b8892e]/40 hover:shadow-sm"
                        >
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#b8892e]">
                                {cert.year}
                            </p>

                            <h3 className="mt-4 text-lg font-bold text-slate-900">
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
