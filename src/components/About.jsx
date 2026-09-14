const timeline = [
    {
        year: "2025 - 2026",
        title: "AncesTREE - Capstone Project",
        detail: "Frontend Developer | UI/UX Designer",
    },
    {
        year: "Feb - May 2026",
        title: "Frontend Developer Intern (OJT)",
        detail: "Ollopa Corporation",
    },
    {
        year: "2026",
        title: "BS Information Technology",
        detail: "Cebu Institute of Technology - Graduated",
    },
]
function About() {
    return (
        <section id="about" className="max-w-4xl mx-auto px-4 py-20 border-t border-border">
            <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-mono font-semibold text-fg">What I'm about</h2>
            </div>

            <div className="border-l-2 border-accent pl-4 mb-14 max-w-2xl">
                <p className="text-sm text-fg-muted leading-relaxed">
                    I like working across the whole process, from a rough layout to a working, polished interface. My internship and capstone project gave me hands-on experience translating designs into responsive, functional code. I'm looking for an entry-level role where I can keep learning while contributing real, useful work.
                </p>
            </div>

            <div className="divide-y divide-border">
                {timeline.map((item) => (
                    <div key={item.title} className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-2 sm:gap-6 py-5 first:pt-0">
                        <p className="text-xs font-mono text-fg-muted pt-0.5">{item.year}</p>
                        <div>
                            <p className="text-sm font-semibold text-fg mb-1">{item.title}</p>
                            <p className="text-sm text-fg-muted/80">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About