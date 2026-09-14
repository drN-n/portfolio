import { useState, useEffect } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { scrollToSection } from "../utils/scrollToSection"
import { useActiveSection } from "../hooks/useActiveSection"

const navLinks = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
]

function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("theme")
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        
        return saved ? saved === "dark" : systemPrefersDark
    })

    const activeSection = useActiveSection()

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark)
    }, [isDark])
    
    function toggleTheme() {
        const newIsDark = !isDark
        setIsDark(newIsDark)
        localStorage.setItem("theme", newIsDark ? "dark" : "light")
    }

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border bg-bg/95 backdrop-blur-sm font-mono">
            <button onClick={() => scrollToSection("hero")} className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-fg">
                    AM<span className="text-accent">.</span>
                    <span className="hidden sm:inline text-xs text-fg-muted">Mangubat</span>
                </span>
            </button>

            <div className="flex items-center gap-5 sm:gap-7">
                {navLinks.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(id)
                        }}
                        className={`text-xs pb-1 border-b transition-colors ${activeSection === id ? "text-fg border-accent" : "text-fg-muted border-transparent hover:text-fg"}`}
                    >
                        {label}
                    </a>
                ))}

                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode theme"
                    className="w-10 h-5 rounded-sm border border-border relative shrink-0"
                >
                    <span
                        className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-sm bg-accent flex items-center justify-center transistion-transofrm ${isDark ? "translate-x-[22px]" : "translate-x-0"}`}
                    >
                        {isDark ? (
                            <FiMoon size={8} className="text-white" />
                        ) : (
                            <FiSun size={8} className="text-white" />
                        )}
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar