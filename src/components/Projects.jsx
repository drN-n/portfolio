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
        title: "Desk-o'clock",
        description: "A lightweight, distraction-free clock for a browser tab or second monitor. Built with plain HTML, CSS, and JavaScript. It's still a work in progress, with a few more features on the way.",
        tags: ["HTML", "CSS", "JavaScript"],
        status: "In progress",
        github: "https://github.com/drN-n/desk-o-clock",
        live: null,
    },
]

function Projects() {
    return (
        <section className="max-w-2xl mx-auto text-center px-6 py-16">
            <p className="text-sm font-mono uppercase tracking-wide text-accent">// 04 — Projects</p>
            <h2 className="text-3xl font-medium mt-4 mb-10">Things I've built</h2>

            <div className="text-left space-y-6">
                {projects.map((project) => (
                    <div key={project.title} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                            <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">{project.status}</span>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">{tag}</span>
                            ))}
                        </div>

                        <div className="flex gap-4 text-sm">
                            <a href={project.github} className="text-gray-700 underline">GitHub</a>
                            {project.live && (
                                <a href={project.live} className="text-accent underline">Live demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects