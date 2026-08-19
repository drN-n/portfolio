function Contact() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-4 py-20">
            <div className="bg-surface border border-border rounded-lg p-10 text-center">
                <h2 className="text-3xl font-bold text-fg mb-3">Let's work together</h2>
                <p className="text-sm text-fg-muted mb-6">Open to entry-level frontend roles. Reach out anytime.</p>

                <div className="flex justify-center gap-3 mb-6">
                    <a href="mailto:amangubat18@gmail.com" className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium">Email me</a>
                    <a href="https://github.com/drN-n" className="border border-border text-fg px-5 py-2.5 rounded-lg text-sm font-medium">GitHub</a>
                </div>

                <p className="text-xs text-fg-muted">Liloan, Cebu, PH · +63 926-636-5622</p>
            </div>
        </section>
    )
}

export default Contact;