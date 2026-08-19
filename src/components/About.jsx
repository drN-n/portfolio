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
        <section id="about" className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-medium text-fg mb-6">What I'm about</h2>

            <div className="border-l-2 border-accent pl-4 mb-12">
                <p className="text-sm text-fg-muted leading-relaxed max-w-2xl">
                    I like working across the whole process, from a rough layout to a working, polished interface. My internship and capstone project gave me hands-on experience translating designs into responsive, functional code. I'm looking for an entry-level role where I can keep learning while contributing real, useful work.
                </p>
            </div>

            <p className="text-xs uppercase tracking-widest text-fg-muted mb-4">Timeline</p>

            <div className="space-y-4">
                {timeline.map((item) => (
                    <div key={item.title} className="bg-surface border border-border rounded-lg p-5 grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4">
                        <p className="text-sm text-fg-muted">{item.year}</p>
                        <div className="sm:border-l sm:border-border sm:pl-6">
                            <p className="text-sm font-semibold text-fg mb-1">{item.title}</p>
                            <p className="text-sm text-fg-muted/70">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About