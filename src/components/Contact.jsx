function Contact() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-border">
            <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-mono font-semibold text-fg">Let's work together</h2>
            </div>

            <p className="text-sm text-fg-muted mb-8 max-w-md leading-relaxed">Open to entry-level roles. Reach out anytime.</p>

            <div className="flex flex-wrap gap-3 mb-10">
                <a href="mailto:amangubat18@gmail.com" className="bg-accent text-white px-5 py-2.5 rounded-sm text-sm font-medium font-mono">
                    Email me
                </a>
                <a href="https://github.com/drN-n" className="border border-border text-fg px-5 py-2.5 rounded-sm text-sm font-medium font-mono">
                    GitHub
                </a>
            </div>
        </section>
    )
}

export default Contact;