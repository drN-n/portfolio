import { useState, useEffect } from "react"

const defaultIds = ["hero", "about", "work", "projects", "skills", "contact"]

export function useActiveSection(ids = defaultIds) {
    const [activeSection, setActiveSection] = useState(ids[0])

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY + 150
            let current = ids[0]

            ids.forEach((id) => {
                const section = document.getElementById(id)
                if (section && section.offsetTop <= scrollPosition) {
                    current = id
                }
            })

            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5
            
            if (scrolledToBottom) {
                current = ids[ids.length - 1]
            }

            setActiveSection(current)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [ids])

    return activeSection
}