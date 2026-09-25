import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrolled, setScrolled] = useState(false);

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
            setScrolled(scrollTop > 8);
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
            {/* Scroll progress bar */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-transparent">
                <div
                    className="h-full bg-[#b8892e] transition-[width] duration-100"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Navbar */}
            <nav
                className={`border-b bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
                    scrolled
                        ? "border-slate-200 shadow-sm shadow-slate-900/5"
                        : "border-transparent"
                }`}
            >
                <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="font-display text-xl font-bold tracking-tight text-slate-900 transition duration-300 hover:text-[#0b1f3a]"
                    >
                        RSR<span className="text-[#b8892e]">.</span>
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-7 md:flex">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-medium text-slate-600 transition duration-300 hover:text-[#0b1f3a]"
                            >
                                {link.name}
                            </button>
                        ))}

                        <button
                            onClick={() => scrollToSection("contact")}
                            className="rounded-lg bg-[#0b1f3a] px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-[#12294a]"
                        >
                            Let's talk
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:border-[#0b1f3a] hover:text-[#0b1f3a] md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile navigation */}
                <div
                    className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
                        mobileOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex flex-col gap-5 px-6 py-6">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-left text-sm font-medium text-slate-600 transition duration-300 hover:translate-x-1 hover:text-[#0b1f3a]"
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
