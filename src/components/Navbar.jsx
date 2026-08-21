import { useState, useEffect } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { scrollToSection } from "../utils/scrollToSection"

const navLinks = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
]

const observedSections = ["hero", ...navLinks.map(link => link.id)]

function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("theme")
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        
        return saved ? saved === "dark" : systemPrefersDark
    })

    const [activeSection, setActiveSection] = useState("hero")

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark)
    }, [isDark])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, { rootMargin: "0px 0px -50% 0px" })

        observedSections.forEach((id) => {
            const section = document.getElementById(id)
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    function toggleTheme() {
        const newIsDark = !isDark
        setIsDark(newIsDark)
        localStorage.setItem("theme", newIsDark ? "dark" : "light")
    }

    useEffect(() => {
        function handleScroll() {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
            if (scrolledToBottom) {
                setActiveSection("contact")
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border bg-bg">
            <div className="flex items-baseline gap-2">
                <p className="font-mono text-sm font-bold text-accent">{"{ AM }"}</p>
                <p className="hidden sm:inline text-sm font-semibold text-fg">Aldrin Mangubat</p>
            </div>

            <div className="flex items-center gap-6">
                {navLinks.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(id)
                        }}
                        className={`text-xs pb-1 border-b-2 transition-colors ${activeSection === id ? "text-fg border-accent" : "text-fg-muted border-transparent"}`}
                    >
                        {label}
                    </a>
                ))}

                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode theme"
                    className="w-11 h-6 rounded-full bg-border relative transition-colors"
                >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-accent flex items-center justify-center transition-transform ${isDark ? "translate-x-5" : "translate-x-0.5"}`} >
                    {isDark ? (
                        <FiMoon size={11} className="text-white" />
                    ) : (
                        <FiSun size={11} className="text-white" />
                    )}
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar