const experiences = [
    {
        company: "Ollopa Corporation",
        role: "Frontend Developer Intern",
        subRole: "Co-Team Lead",
        duration: "Feb - May 2026",
        bullets: [
            "Served as Co-Team Lead, coordinating a team of interns by managing daily task assignments, tracking progress, and handling most of the team's day-to-day coordination.",
            "Proposed a redesigned UI/UX for the Fibei Digi E-Cards website, with the team's design selected by the company for implementation.",
            "Built responsive frontend pages by translating approved Figma prototypes into code for the Contact, About, Anniversary, and Admin Panel pages.",        
        ],
    },
]

function Work() {
    return (
        <section id="work" className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-fg mb-10">Experience</h2>

            <div className="space-y-6">
                {experiences.map((exp) => (
                    <div key={exp.company} className="bg-surface border border-border rounded-lg p-6 grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-6">
                        <div>
                            <p className="text-sm font-semibold text-fg mb-1">{exp.role}</p>
                            <p className="text-xs uppercase tracking-wide text-accent mb-2">{exp.subRole}</p>
                            <p className="text-sm text-fg-muted mb-0.5">{exp.company}</p>
                            <p className="text-sm text-fg-muted/70">{exp.duration}</p>
                        </div>

                        <div className="sm:border-l sm:border-border sm:pl-6 flex flex-col gap-2">
                            {exp.bullets.map((bullet) => (
                                <p key={bullet} className="text-sm text-fg-muted leading-relaxed">
                                    {bullet}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work