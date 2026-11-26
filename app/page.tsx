import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-emerald-700">
            My Marketing App
          </Link>
          <nav className="space-x-6 text-sm font-medium text-slate-600">
            <Link href="/" className="text-emerald-700 font-semibold">
              Home
            </Link>
            <Link href="/about" className="hover:text-emerald-700 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-emerald-700 transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/farhan.jpg.jpeg"
              alt="Farhan Aman"
              width={140}
              height={140}
              priority
              className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-emerald-600 shadow-md"
            />
            <p className="mt-3 text-lg font-bold text-slate-800">Farhan Aman</p>
          </div>

          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-800 uppercase bg-emerald-100 rounded-full">
            Welcome to My Marketing App
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Welcome to <span className="text-emerald-600">My Marketing App</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            A dedicated marketing app built to promote brands, manage campaigns, and connect
            businesses with the right audience through smart, result-driven strategies.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-sm"
            >
              Explore Our App
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-white text-slate-800 font-medium border border-slate-300 hover:bg-slate-100 transition"
            >
              Start a Campaign
            </Link>
          </div>
        </section>

        {/* Marketing App Highlights Section */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Brand Promotion</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Showcase products and services with targeted campaigns designed to maximize reach.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Digital Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Data-backed marketing tools to boost customer engagement and business visibility.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Client Connect</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Seamless communication and lead generation to turn prospects into loyal clients.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
       
      </footer>
    </div>
  );
}