import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-gray-100 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-md mx-auto space-y-6">
          <div className="inline-block p-4 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-5xl font-extrabold tracking-wider">
            404
          </div>
          <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
          <p className="text-sm text-gray-400">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-gray-700 bg-gray-800/80 hover:bg-gray-800 text-gray-200 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go to Portfolio</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
