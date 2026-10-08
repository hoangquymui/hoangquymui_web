import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { APPS_DATA, type AppItem } from "@/data/appsData";
import { 
  Search, 
  ExternalLink, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ArrowLeft,
  Code2,
  Filter,
  Activity,
  Video,
  FileText,
  Music,
  BarChart3,
  Globe
} from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";

const renderAppIcon = (iconType: string) => {
  switch (iconType) {
    case "activity":
      return <Activity className="w-6 h-6" />;
    case "video":
      return <Video className="w-6 h-6" />;
    case "file-text":
      return <FileText className="w-6 h-6" />;
    case "music":
      return <Music className="w-6 h-6" />;
    case "bar-chart":
      return <BarChart3 className="w-6 h-6" />;
    case "globe":
      return <Globe className="w-6 h-6" />;
    default:
      return <Layers className="w-6 h-6" />;
  }
};

export function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & Machine Learning",
    "Developer Tools",
    "Web Applications",
    "Data Science",
  ];

  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((app: AppItem) => {
      const matchesCategory =
        selectedCategory === "All" || app.category === selectedCategory;
      const matchesSearch =
        app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#071229] text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back navigation & header */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Full Application Ecosystem
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-400 tracking-tight">
                  My Applications & Projects
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mt-2">
                  A curated collection of web applications, artificial intelligence models, speech processing systems, and developer tools built by Hoàng Quý Mùi.
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex gap-4 sm:gap-6 bg-gray-900/60 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm self-start md:self-auto">
                <div>
                  <div className="text-2xl font-bold text-cyan-300">{APPS_DATA.length}</div>
                  <div className="text-xs text-gray-400">Total Apps</div>
                </div>
                <div className="w-[1px] bg-gray-800" />
                <div>
                  <div className="text-2xl font-bold text-blue-400">37+</div>
                  <div className="text-xs text-gray-400">UI Components</div>
                </div>
                <div className="w-[1px] bg-gray-800" />
                <div>
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-xs text-gray-400">Open Source</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search applications, technologies, or keywords..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-700 bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm backdrop-blur-sm"
                />
              </div>

              {/* Result counter */}
              <div className="text-xs text-gray-400 flex items-center gap-1.5 self-start sm:self-auto">
                <Filter className="w-3.5 h-3.5 text-blue-400" />
                <span>Showing <strong>{filteredApps.length}</strong> of {APPS_DATA.length} applications</span>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Applications */}
          {filteredApps.length === 0 ? (
            <div className="text-center py-20 bg-gray-900/30 rounded-3xl border border-gray-800">
              <Code2 className="w-12 h-12 text-gray-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-300">No applications found</h3>
              <p className="text-sm text-gray-500 mt-1">Try tweaking your search query or choosing another category filter.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-medium"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  className="group relative flex flex-col rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 h-full bg-[#161a23] border-gray-700/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(59,130,246,0.18)] hover:border-blue-500/40 hover:bg-[#1a1f2b]"
                >
                  {/* Glowing background blob */}
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 rounded-full blur-3xl transition-all duration-500 bg-blue-500/10 group-hover:bg-blue-500/25 pointer-events-none" />

                  <div className="relative p-6 flex-1 flex flex-col z-10">
                    {/* Header with App Logo & Status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center p-2 border border-white/10 shadow-lg bg-gradient-to-br ${app.iconBg} text-white font-bold group-hover:scale-105 transition-transform`}
                        >
                          {renderAppIcon(app.iconType)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-100 group-hover:text-blue-300 transition-colors line-clamp-1">
                            {app.title}
                          </h3>
                          <span className="text-xs text-gray-400 font-medium">
                            {app.category}
                          </span>
                        </div>
                      </div>

                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${app.badgeColor}`}>
                        {app.status}
                      </span>
                    </div>

                    {/* Subtitle & Description */}
                    <p className="text-xs font-semibold text-cyan-400 mb-2">
                      {app.subtitle}
                    </p>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed flex-1">
                      {app.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mb-5 space-y-1.5 bg-gray-900/40 p-3 rounded-xl border border-gray-800">
                      <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Key Features
                      </div>
                      {app.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges & Actions */}
                    <div className="mt-auto flex flex-col gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {app.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium border bg-gray-800/80 text-gray-300 border-gray-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                        <div className="flex items-center gap-2">
                          {app.demoUrl.startsWith("/") ? (
                            <Link
                              to={app.demoUrl}
                              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm shadow-blue-500/20"
                            >
                              <span>Try App</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          ) : (
                            <a
                              href={app.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm shadow-blue-500/20"
                            >
                              <span>Try App</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        <a
                          href={app.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 bg-gray-800/60 hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
