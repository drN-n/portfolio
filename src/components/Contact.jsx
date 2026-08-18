function Contact() {
    return (
        <section id="contact" className="max-w-2xl mx-auto text-center px-6 py-16">
            <div className="border border-gray-200 rounded-lg p-10">
                <p className="text-sm font-mono uppercase tracking-wide text-accent mb-3">// 06 — Contact</p>
                <h2 className="text-3xl font-semibold mb-3">Let's work together</h2>
                <p className="text-sm text-gray-500 mb-6">Open to entry-level frontend roles. Reach out anytime.</p>

                <div className="flex justify-center gap-3 mb-6">
                    <a href="mailto:amangubat18@gmail.com" className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium">Email me</a>
                    <a href="https://github.com/drN-n" className="border border-gray-300 text-black px-5 py-2.5 rounded-lg text-sm font-medium">GitHub</a>
                </div>

                <p className="text-xs text-gray-400">Liloan, Cebu, PH | +63 926-636-5622</p>
            </div>
        </section>
    )
}

export default Contact;