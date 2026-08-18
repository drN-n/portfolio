function Hero() {
    return (
        <section id="hero" className="max-w-2xl mx-auto text-center px-6 py-24">
            <p className="text-sm font-mono uppercase tracking-wide text-accent">// 01 — Introduction</p>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-black mt-6 mb-4">Aldrin R. Mangubat</h1>
            <p>Recent IT graduate learning by building - React, Next.js, and clean, responsive interfaces.</p>
            <div className="flex justify-center gap-3 mt-8">
                <button className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium">View work</button>
                <button className="border border-gray-300 text-black px-5 py-2.5 rounded-lg text-sm font-medium">Resume</button>
            </div>

            {/* Information: Role | Status | Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-200 rounded-lg mt-12 text-left">
                <div className="p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
                    <p className="text-xs uppercase text-gray-400 mb-1">Role</p>
                    <p className="text-sm font-medium">Frontend Developer</p>
                </div>
                <div className="p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
                    <p className="text-xs uppercase text-gray-400 mb-1">Status</p>
                    <p className="text-sm font-medium">Available</p>
                </div>
                <div className="p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
                    <p className="text-xs uppercase text-gray-400 mb-1">Location</p>
                    <p className="text-sm font-medium">Liloan, Cebu, PH</p>
                </div>
            </div>
        </section>
    )
}

export default Hero