import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-emerald-700">
            MyPortfolio
          </Link>
          <nav className="space-x-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-emerald-700 transition">
              Home
            </Link>
            <Link href="/about" className="text-emerald-700 font-semibold">
              About
            </Link>
            <Link href="/contact" className="hover:text-emerald-700 transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Top Intro Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-800 uppercase bg-emerald-100 rounded-full">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Driven by <span className="text-emerald-600">Research &amp; Clarity</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            I focus on structured learning, analytical problem-solving, and clear communication—turning
            detailed ideas into practical and easy-to-follow work.
          </p>
        </section>

        {/* Two Column Cards */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-10">
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Background &amp; Focus</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Strong foundation in academic study, biological and agricultural concepts, and
                methodical documentation. Always aiming for accuracy and depth.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-3">How I Work</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether preparing visual presentations, organizing research notes, or building web
                pages, I prioritize clean structure and natural explanation.
              </p>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Core Strengths</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-700">
                <div className="p-4 rounded-lg bg-white border border-slate-200 font-medium">
                  Structured Research
                </div>
                <div className="p-4 rounded-lg bg-white border border-slate-200 font-medium">
                  Visual Presentations
                </div>
                <div className="p-4 rounded-lg bg-white border border-slate-200 font-medium">
                  Analytical Writing
                </div>
                <div className="p-4 rounded-lg bg-white border border-slate-200 font-medium">
                  Continuous Learning
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="max-w-6xl mx-auto px-6 mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-sm"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
       
      </footer>
    </div>
  );
}