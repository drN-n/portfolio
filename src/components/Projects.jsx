import { useState, useEffect } from "react"

const projects = [
    {
        title: "AncesTREE",
        description: "A collaborative genealogy web app for building and managing family trees together. I worked on the frontend and UI/UX side, designing prototypes in Figma and building responsive interfaces and reusable components with Next.js and Tailwind CSS.",
        tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "Firebase"],
        status: "Live",
        github: "https://github.com/drN-n/Capstone-AncesTREE",
        live: "https://ancestree2025.netlify.app/",
        screenshots: ["/projects/AT_landing.png", "/projects/AT_login.png", "/projects/AT_register.png", "/projects/AT_forgotPassword.png", "/projects/AT_dashboard.png", "/projects/AT_createGroup.png"],
        },
        {
        title: "Desk O'clock",
        description: "A lightweight, distraction-free clock for a browser tab or second monitor. Built with plain HTML, CSS, and JavaScript. It's still a work in progress, with a few more features on the way.",
        tags: ["HTML", "CSS", "JavaScript"],
        status: "In progress",
        github: "https://github.com/drN-n/desk-o-clock",
        live: null,
        screenshots: ["/projects/DO_defaultWhite.png", "/projects/DO_darkMode.png", "/projects/DO_settingsConfig.png"],
        },
        {
        title: "Job Application Tracker",
        description:
            "A job application tracker to help organize and monitor job search progress. Built with a Java/Spring Boot backend and a React + TypeScript frontend. Still early in development, with more features planned.",
        tags: ["Java", "Spring Boot", "React", "TypeScript"],
        status: "In progress",
        github: "https://github.com/drN-n/job-application-tracker",
        live: null,
        screenshots: [], // on its early phase of development, no screenshots yet
    },
]

function urlLabel(project) {
    return project.live ? project.live.replace(/^https?:\/\//, "") : "local preview"
}

function ScreenshotViewer({ project, interactive = false, index: controlledIndex, onIndexChange, fit = "contain" }) {
    const [internalIndex, setInternalIndex] = useState(0)
    const [errors, setErrors] = useState({})

    const index = controlledIndex ?? internalIndex
    const setIndex = onIndexChange ?? setInternalIndex
    const total = project.screenshots.length
    const current = total > 0 ? project.screenshots[index] : null

    function prev(e) {
        e.stopPropagation()
        setIndex((i) => (i - 1 + total) % total)
    }
    function next(e) {
        e.stopPropagation()
        setIndex((i) => (i + 1) % total)
    }
    function goTo(e, i) {
        e.stopPropagation()
        setIndex(i)
    }

    return (
        <div className="border border-border rounded-sm overflow-hidden">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-border bg-surface">
                <span className="w-2 h-2 rounded-full border border-border" />
                <span className="w-2 h-2 rounded-full border border-border" />
                <span className="w-2 h-2 rounded-full border border-border" />
                <span className="ml-2 text-[10px] font-mono text-fg-muted truncate flex-1">{urlLabel(project)}</span>
                {total > 1 && (
                    <span className="text-[10px] font-mono text-fg-muted shrink-0">
                        {index + 1}/{total}
                    </span>
                )}
            </div>

            <div className="aspect-video bg-bg relative">
                {total === 0 ? (
                    <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{
                            backgroundImage: "repeating-linear-gradient(45deg, var(--color-border) 0 1px, transparent 1px 10px)",
                        }}
                    >
                        <span className="text-xs font-mono text-fg-muted bg-bg px-2 py-1 border border-border rounded-sm">
                            No screenshot for this project
                        </span>
                    </div>
                ) : current && !errors[index] ? (
                    <img 
                        src={current}
                        alt={`${project.title} screenshot ${index + 1}`}
                        onError={() => setErrors((e) => ({ ...e, [index]: true}))}
                        className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
                    />
                ) : (
                    <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{
                            backgroundImage: "repeating-linear-gradient(45deg, var(--color-border) 0 1px, transparent 1px 10px)",
                        }}
                    >
                        <span className="text-xs font-mono text-fg-muted bg-bg px-2 py-1 border border-border rounded-sm">
                            Screenshot - pending
                        </span>
                    </div>
                )}

                {interactive && total > 1 && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Previous screenshot"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-bg/85 border border-border rounded-sm text-fg-muted hover:text-fg"
                        >
                            ‹
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next screenshot"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-bg/85 border border-border rounded-sm text-fg-muted hover:text-fg"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {interactive && total > 1 && (
                <div className="flex items-center justify-center gap-1.5 py-2 border-t border-border bg-surface">
                    {project.screenshots.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => goTo(e, i)}
                            aria-label={`Go to screenshot ${i + 1}`}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? "bg-accent" : "bg-border"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

function Projects() {
    const [openProject, setOpenProject] = useState(null)
    const [modalIndex, setModalIndex] = useState(0)

    useEffect(() => {
        setModalIndex(0)
    }, [openProject])

    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") {
                setOpenProject(null)
                return
            }
            if (!openProject) return
            const total = openProject.screenshots.length
            if (total === 0) return
            if (e.key === "ArrowLeft") setModalIndex((i) => (i - 1 + total) % total)
            if (e.key === "ArrowRight") setModalIndex((i) => (i + 1) % total)
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [openProject])

    return (
        <section id="projects" className="max-w-4xl mx-auto px-6 py-20 border-t border-border">
            <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-mono font-semibold text-fg">Things I've built</h2>
            </div>

            <div className="divide-y divide-border">
                {projects.map((project) => (
                    <div key={project.title} className="py-8 first:pt-0">
                        <button
                            onClick={() => setOpenProject(project)}
                            className="group block w-full text-left mb-6"
                            aria-label={`Preview ${project.title}`}
                        >
                            <ScreenshotViewer project={project} interactive={false} />
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-6">
                            <div>
                                <p className="text-base font-semibold text-fg mb-2">{project.title}</p>
                                <span
                                    className={`inline-block text-xs font-mono px-2 py-0.5 border rounded-sm mb-3 ${project.status === "Live" ? "border-accent text-accent" : "border-border text-fg-muted"}`}
                                >
                                    {project.status}
                                </span>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[11px] font-mono px-1.5 py-0.5 border border-border text-fg-muted rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="sm:border-l sm:border-border sm:pl-6">
                                <p className="text-sm text-fg-muted leading-relaxed mb-3">{project.description}</p>

                                <div className="flex gap-4 text-sm font-mono">
                                    <a href={project.github} className="text-fg-muted underline underline-offset-2 hover:text-accent">
                                        GitHub
                                    </a>
                                    {project.live && (
                                        <a href={project.live} className="text-fg-muted underline underline-offset-2 hover:text-accent">
                                            Live demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {openProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60"
                    onClick={() => setOpenProject(null)}
                >
                    <div className="bg-bg w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
                        <ScreenshotViewer
                            project={openProject}
                            interactive
                            index={modalIndex}
                            onIndexChange={setModalIndex}
                            fit="contain"
                        />
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-sm font-semibold text-fg">{openProject.title}</p>

                            <div className="flex items-center gap-4 text-sm font-mono">
                                <a href={openProject.github} target="_blank" rel="noopener noreferrer" className="text-fg-muted underline underline-offset-2 hover:text-accent">
                                    GitHub
                                </a>
                                {openProject.live && (
                                    <a href={openProject.live} target="_blank" rel="noopener noreferrer" className="text-fg-muted underline underline-offset-2 hover:text-accent">
                                        Open live site
                                    </a>
                                )}
                                <button
                                    onClick={() => setOpenProject(null)}
                                    aria-label="Close preview"
                                    className="text-fg-muted hover:text-fg font-mono text-base leading-none px-1"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects