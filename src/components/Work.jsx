const experiences = [
    {
        company: "Ollopa Corporation",
        role: "Frontend Developer Intern (OJT) | Co-Team Lead",
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
        <section id="work" className="max-w-2xl mx-auto text-center px-6 py-16">
            <p className="text-sm font-mono uppercase tracking-wide text-accent">// 03 — Work</p>
            <h2 className="text-3xl font-medium mt-4 mb-10">Experience</h2>

            <div className="text-left space-y-6">
                {experiences.map((exp) => (
                    <div key={exp.company} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg font-semibold text-black">{exp.role}</h3>
                            <span className="text-xs text-gray-400 shrink-0 ml-4">{exp.duration}</span>
                        </div>

                        <p className="text-sm text-gray-500 mb-4">{exp.company}</p>

                        <ul className="space-y-2 list-disc list-inside">
                            {exp.bullets.map((bullet) => (
                                <li key={bullet} className="text-sm text-gray-600 leading-relaxed">
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