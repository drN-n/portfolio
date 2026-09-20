import { scrollToSection } from "../utils/scrollToSection"

function Hero() {
    return (
        <section id="hero" className="max-w-4xl mx-auto px-6 pt-16 pb-24">
            <div className="flex items-center justify-between text-xs font-mono text-fg-muted mb-10 border-b border-border pb-3">
                <span className="hidden sm:inline">Liloan, Cebu, PH</span>
            </div>

            <h1 className="font-mono font-bold text-fg leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl mb-8">
                Aldrin R.<br />Mangubat
            </h1>

            <svg viewBox="0 0 600 20" className="w-full max-w-md h-5 mb-10 text-border" preserveAspectRatio="none">
                <line x1="0" y1="10" x2="600" y2="10" stroke="currentColor" strokeWidth="1" />
                {Array.from({ length: 31 }).map((_, i) => (
                    <line 
                        key={i}
                        x1={i * 20} y1={i % 5 === 0 ? 2 : 6} x2={i * 20} y2="10"
                        stroke="currentColor" strokeWidth="1"
                    />
                ))}
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-10 items-start">
                <div className="space-y-1.5 font-mono text-sm">
                    <div className="flex gap-4">
                        <span className="text-fg-muted w-16 shrink-0">Role</span>
                        <span className="text-fg">Software Developer</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-fg-muted w-16 shrink-0">Status</span>
                        <span className="text-accent">Available</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-fg-muted w-16 shrink-0">Based</span>
                        <span className="text-fg">Cebu, PH</span>
                    </div>
                </div>

                <div>
                    <div className="border-l-2 border-accent pl-4 mb-6">
                        <p className="text-sm text-fg-muted leading-relaxed">
                            I like getting the small things right, because that's what makes the big picture hold together.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <a 
                            href="#work"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("work")
                            }}
                            className="bg-accent text-white px-5 py-2.5 rounded-sm text-sm font-medium font-mono"
                        >
                            View work
                        </a>
                        <a
                            href="/mangubatAldrin-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-border text-fg px-5 py-2.5 rounded-sm text-sm font-medium font-mono"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero