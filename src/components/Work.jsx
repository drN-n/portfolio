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
        <section id="work" className="max-w-4xl mx-auto px-6 py-20 border-t border-border">
            <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-mono font-semibold text-fg">Experience</h2>
            </div>

            
            <div className="space-y-10">
                {experiences.map((exp) => (
                    <div key={exp.company} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-6">
                        <div>
                            <p className="text-sm font-semibold text-fg mb-1">{exp.role}</p>
                            <p className="text-xs font-mono text-accent mb-2">{exp.subRole}</p>
                            <p className="text-sm text-fg-muted mb-0.5">{exp.company}</p>
                            <p className="text-sm text-fg-muted/70">{exp.duration}</p>
                        </div>

                        <ul className="space-y-3 sm:border-l sm:border-border sm:pl-6">
                            {exp.bullets.map((bullet) => (
                                <li
                                    key={bullet}
                                    className="text-sm text-fg-muted leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                                >
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work