import { useState, useEffect } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

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

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-950">
            <p className="text-sm font-bold text-black dark:text-white">AM</p>

            <div className="flex items-center gap-6">
                {navLinks.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`text-xs pb-1 border-b-2 transition-colors ${activeSection === id ? "text-black dark:text-white border-accent" : "text-gray-500 dark:text-gray-400 border-transparent"}`}
                    >
                        {label}
                    </a>
                ))}

                <button
                    onClick={toggleTheme}
                    className="w-11 h-6 rounded-full bg-gray-200 dark:bg-zinc-700 relative transition-colors"
                >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-accent flex items-center justify-center transition-transform ${isDark ? "translate-x-5" : "translate-x-0.5"}`} >
                    {isDark ? (
                        <FiMoon size={11} className="text-black dark:text-white" />
                    ) : (
                        <FiSun size={11} className="text-black dark:text-white" />
                    )}
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar