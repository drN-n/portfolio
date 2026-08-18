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
        <section id="about" className="max-w-2xl mx-auto text-center px-6 py-16">
            <p className="text-sm font-mono uppercase tracking-wide text-accent">// 02 — About</p>

            <h2 className="text-3xl font-medium mt-4 mb-6">What I'm about</h2>
            <p className="max-w-xl mx-auto text-gray-600 text-sm leading-relaxed mb-16">
                I like working across the whole process, from a rough layout to a working, polished interface. My internship and capstone project gave me hands-on experience translating designs into responsive, functional code. I'm looking for an entry-level role where I can keep learning while contributing real, useful work.
            </p>

            <h3 className="text-sm font-mono uppercase tracking-wide text-gray-400 mb-8">Timeline</h3>

            <div className="max-w-md mx-auto text-left space-y-6">
                {timeline.map((item) => (
                    <div key={item.title} className="flex gap-4">
                        <p className="w-28 shrink-0 text-sm text-gray-400">{item.year}</p>
                        <div>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About