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
        <section id="skills" className="max-w-4xl mx-auto px-4 py-20 border-t border-border">

            <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-mono font-semibold text-fg">What I work with</h2>
            </div>

            <div className="space-y-8">
                {skillCategories.map((group, i) => (
                    <div key={group.category}>
                        <p className="text-xs font-mono text-fg-muted mb-3">{group.category}</p>
                        <div className="marquee-row">
                            <div
                                className={`marquee-track ${i % 2 === 0 ? "left" : "right"}`}
                                style={{ animationDuration: `${group.skills.length * 4}s` }}
                            >
                                {[...group.skills, ...group.skills].map((skill, idx) => (
                                    <div
                                        key={`${skill.name}-${idx}`}
                                        className="flex items-center gap-2 border border-border rounded-sm px-3 py-2 shrink-0 bg-bg"
                                    >
                                        {skill.invert ? (
                                            <div className="w-4 h-4 rounded-sm bg-white flex items-center justify-center">
                                                <skill.icons size={12} color={skill.color} />
                                            </div>
                                        ) : (
                                            <skill.icons size={16} color={skill.color} /> 
                                        )}

                                        <p className="text-xs font-mono text-fg-muted whitespace-nowrap">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills