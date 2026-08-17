import { useState, useEffect } from "react"

function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("theme")
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        
        return saved ? saved === "dark" : systemPrefersDark
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark)
    }, [isDark])

    function toggleTheme() {
        const newIsDark = !isDark
        setIsDark(newIsDark)
        localStorage.setItem("theme", newIsDark ? "dark" : "light")
    }

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-950">
            <p className="text-sm font-bold text-black dark:text-white">AM</p>

            <div className="flex items-center gap-6">
                <a href="#about" className="text-xs text-gray-500 dark:text-gray-400">About</a>
                <a href="#work" className="text-xs text-gray-500 dark:text-gray-400">Work</a>
                <a href="#projects" className="text-xs text-gray-500 dark:text-gray-400">Projects</a>
                <a href="#skills" className="text-xs text-gray-500 dark:text-gray-400">Skills</a>
                <a href="#contact" className="text-xs text-gray-500 dark:text-gray-400">Contact</a>

                <button
                    onClick={toggleTheme}
                    className="w-11 h-6 rounded-full bg-gray-200 dark:bg-zinc-700 relative transition-colors"
                >
                    <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-accent transition-transform ${
              isDark ? "translate-x-5" : "translate-x-0.5"
            }`} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar