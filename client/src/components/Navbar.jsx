import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const links = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Education", id: "education" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setMobileOpen(false);
    };

    return (
        <header className="fixed left-0 right-0 top-0 z-50">
            {/* Scroll Progress Bar */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-transparent">
                <div
                    className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-[width] duration-100"
                    style={{
                        width: `${scrollProgress}%`,
                    }}
                />
            </div>

            {/* Navbar */}
            <nav className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
                    
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="text-xl font-black tracking-tight transition duration-300 hover:text-cyan-400"
                    >
                        RSR<span className="text-cyan-400">.</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 md:flex">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-sm transition duration-300 ${
                                    link.id === "home"
                                        ? "text-slate-200 hover:text-cyan-400"
                                        : "text-slate-400 hover:text-cyan-400"
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {mobileOpen ? (
                            <X size={22} />
                        ) : (
                            <Menu size={22} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`overflow-hidden border-t border-slate-800 bg-slate-950 transition-all duration-300 md:hidden ${
                        mobileOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex flex-col gap-5 px-6 py-6">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() =>
                                    scrollToSection(link.id)
                                }
                                className="text-left text-sm text-slate-300 transition duration-300 hover:translate-x-1 hover:text-cyan-400"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;