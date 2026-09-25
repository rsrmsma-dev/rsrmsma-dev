function Footer() {
    return (
        <footer className="border-t border-slate-100 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
                <p>© 2026 Rovic Steve Real</p>

                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="transition hover:text-[#b8892e]"
                >
                    Back to top ↑
                </button>
            </div>
        </footer>
    );
}

export default Footer;
