//Icons from react-icons : double check here "https://react-icons.github.io/"

import {
    SiReact, SiNextdotjs, SiHtml5, SiTailwindcss, SiBootstrap,
    SiJavascript, SiTypescript, SiPython, SiPhp, SiC,
    SiMysql, SiPhpmyadmin,
    SiGit, SiGithub,
} from "react-icons/si"

import {
    DiCss3, DiJava
} from "react-icons/di"

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "React.js", icons: SiReact, color: "#61DAFB" },
            { name: "Next.js", icons: SiNextdotjs, color: "#000000", invert: true },
            { name: "HTML5", icons: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icons: DiCss3, color: "#1572B6" },
            { name: "TailwindCSS", icons: SiTailwindcss, color: "#06B6D4" },
            { name: "Bootstrap", icons: SiBootstrap, color: "#7952B3" },
        ]
    },
    {
        category: "Languages",
        skills: [
            { name: "JavaScript", icons: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icons: SiTypescript, color: "#3178C6" },
            { name: "Python", icons: SiPython, color: "#3776AB" },
            { name: "Java", icons: DiJava, color: "#007396" },
            { name: "PHP", icons: SiPhp, color: "#777BB4" },
            { name: "C", icons: SiC , color: "#A8B9CC" },
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MySQL", icons: SiMysql, color: "#4479A1" },
            { name: "phpMyAdmin", icons: SiPhpmyadmin, color: "#6C78AF" },
        ]
    },
    {
    category: "Tools",
    skills: [
        { name: "Git", icons: SiGit, color: "#F05032" },
        { name: "GitHub", icons: SiGithub, color: "#181717", invert: true },
    ],
  },
]

function Skills() {
    return (
        <section id="skills" className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-fg mb-10">What I work with</h2>

            <div className="space-y-10">
                {skillCategories.map((group) => (
                    <div key={group.category}>
                        <p className="text-xs uppercase tracking-widest text-fg-muted mb-4">{group.category}</p>

                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {group.skills.map((skill) => (
                                <div key={skill.name} className="bg-surface border border-border rounded-lg p-4 flex flex-col items-center justify-center gap-2">
                                    {skill.invert ? (
                                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                                            <skill.icons size={24} color={skill.color} />
                                        </div>
                                    ) : (
                                        <skill.icons size={28} color={skill.color} />
                                    )}
                                    <p className="text-xs text-fg-muted text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills