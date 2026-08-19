const projects = [
    {
        title: "AncesTREE",
        description: "A collaborative genealogy web app for building and managing family trees together. I worked on the frontend and UI/UX side, designing prototypes in Figma and building responsive interfaces and reusable components with Next.js and Tailwind CSS.",
        tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "Firebase"],
        status: "Live",
        github: "https://github.com/drN-n/Capstone-AncesTREE",
        live: "https://ancestree2025.netlify.app/",
        },
        {
        title: "Desk O'clock",
        description: "A lightweight, distraction-free clock for a browser tab or second monitor. Built with plain HTML, CSS, and JavaScript. It's still a work in progress, with a few more features on the way.",
        tags: ["HTML", "CSS", "JavaScript"],
        status: "In progress",
        github: "https://github.com/drN-n/desk-o-clock",
        live: null,
    },
]

function Projects() {
    return (
        <section id="projects" className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-fg mb-10">Things I've built</h2>

            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.title} className="bg-surface border border-border rounded-lg p-6 grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-6">
                        <div>
                            <p className="text-base font-semibold text-fg mb-2">{project.title}</p>
                            <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent mb-3">{project.status}</span>

                            <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded bg-border/40 text-fg-muted">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="sm:border-l sm:border-border sm:pl-6">
                            <p className="text-sm text-fg-muted leading-relaxed mb-3">{project.description}</p>

                            <div className="flex gap-4 text-sm">
                                <a href={project.github} className="text-fg-muted underline hover:text-accent">
                                    GitHub
                                </a>
                                {project.live && (
                                    <a href={project.live} className="text-fg-muted underline hover:text-accent">
                                        Live demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects