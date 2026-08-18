function Hero() {
    return (
        <section id="hero" className="max-w-4xl mx-auto px-4 py-20">
            <div className="flex justify-between items-start border-b border-border pb-6 mb-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-fg mb-1">Aldrin R. Mangubat</h1>
                    <p className="text-xs font-mono uppercase tracking-widest text-accent">Frontend Developer</p>
                </div>
                <div className="text-right text-xs text-fg-muted">
                    <p>Available now</p>
                    <p>Cebu, PH</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="border-l-2 border-accent pl-4">
                    <p className="text-sm text-fg-muted leading-relaxed">
                        I care about the{" "}
                        <span className="text-accent font-semibold">details</span>{" "}
                        that make an interface{" "}
                        <span className="text-accent font-semibold">feel right</span>
                    </p>
                </div>

                <div className="flex gap-3">
                    <a
                        href="#work"
                        className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium">
                        View Work
                    </a>
                    <a
                        href="#"
                        className="border border-border text-fg px-5 py-2.5 rounded-lg text-sm font-medium">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero