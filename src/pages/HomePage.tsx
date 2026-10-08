import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { APPS_DATA } from "@/data/appsData";
import { 
  Briefcase, 
  LayoutGrid, 
  Sparkles, 
  Mail, 
  ExternalLink, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Activity,
  Video,
  FileText,
  Music,
  BarChart3,
  Globe
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons/SocialIcons";

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

export function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1200);
  };

  const techCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "C++"]
    },
    {
      title: "AI & Data Science",
      skills: ["PyTorch", "TensorFlow", "Sherpa-ONNX", "Scikit-Learn", "Pandas", "NumPy", "Apache Spark", "Hugging Face"]
    },
    {
      title: "Web & Frontend",
      skills: ["React 19", "Tailwind CSS v4", "Vite", "TypeScript", "Radix UI", "HTML5/CSS3"]
    },
    {
      title: "Backend & Systems",
      skills: ["FastAPI", "Python WebSocket", "Node.js", "Express", "PostgreSQL", "SQLite", "Docker", "Git"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#060d1f] text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* ========================================================================= */}
        {/* SECTION 1: ABOUT (Styling identical to trongajtt.com) */}
        {/* ========================================================================= */}
        <section
          id="about"
          className="scroll-mt-24 relative py-12 md:py-20 border-b border-blue-900/40 bg-gradient-to-b from-[#060d1f] via-[#091734] to-[#0a1d3b]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14 mb-12">
              {/* Left Column: Avatar */}
              <div className="w-full lg:w-[30%] flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-blue-400 bg-gray-900 flex items-center justify-center shadow-2xl">
                    {/* Stylized AI/Tech Portrait avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center text-center p-4">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-3xl font-black text-white shadow-lg mb-2">
                        HQM
                      </div>
                      <span className="text-sm font-bold text-cyan-300">Hoàng Quý Mùi</span>
                      <span className="text-[11px] text-gray-400 font-mono">Data Scientist & AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio */}
              <div className="w-full lg:w-[70%]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4 tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome to my digital space
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-400 mb-6 tracking-tight">
                  Hello, I'm <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">Hoàng Quý Mùi</span> 👋
                </h1>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-300">
                  <p>
                    I am a <strong className="text-cyan-300 font-semibold">Data Scientist & AI Engineer</strong>, expanding passionately into <strong className="text-blue-300 font-semibold">Full Stack Development</strong>. My mission is to build intelligent, practical software systems that connect cutting-edge Machine Learning models with high-performance web user experiences.
                  </p>
                  <p>
                    I have deep hands-on expertise in data collection, statistical modeling, feature engineering, and training/deploying deep learning architectures (Computer Vision, NLP, and Realtime Audio Speech Recognition).
                  </p>
                  <p>
                    I'm enthusiastic about open-source technologies, local-first computing, and crafting accessible design components with modern tools like <strong className="text-white">React 19</strong>, <strong className="text-white">TypeScript</strong>, and <strong className="text-white">Tailwind CSS v4</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation Cards (View More About Me) */}
            <div className="mt-14 pt-8 border-t border-blue-900/40">
              <div className="mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-transparent via-cyan-200 to-transparent bg-clip-text text-transparent">
                  Explore My Spaces
                </h2>
                <p className="text-sm text-gray-400 mt-1">Discover my portfolio, applications, and AI component laboratory</p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {/* 1. Portfolio */}
                <Link
                  to="/portfolio"
                  className="group relative block w-full overflow-hidden rounded-2xl border bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-cyan-500/20 border-cyan-400/60 shadow-lg shadow-cyan-500/10 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-cyan-500/25"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 text-cyan-300 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                        My Portfolio
                      </h3>
                      <p className="text-xs text-gray-300">Cosmic theme & CV download</p>
                    </div>
                  </div>
                </Link>

                {/* 2. Apps & Projects */}
                <Link
                  to="/project"
                  className="group relative block w-full overflow-hidden rounded-2xl border bg-gradient-to-r from-violet-500/20 via-indigo-500/15 to-violet-500/20 border-violet-400/60 shadow-lg shadow-violet-500/10 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-violet-500/25"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 text-violet-300 border border-violet-500/30 group-hover:scale-110 transition-transform">
                      <LayoutGrid className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                        My Apps
                      </h3>
                      <p className="text-xs text-gray-300">Web apps & AI solutions</p>
                    </div>
                  </div>
                </Link>

                {/* 3. AI Component Lab */}
                <Link
                  to="/ai"
                  className="group relative block w-full overflow-hidden rounded-2xl border bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/20 border-amber-400/60 shadow-lg shadow-amber-500/10 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-amber-500/25"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 text-amber-300 border border-amber-500/30 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                        AI Component Lab
                      </h3>
                      <p className="text-xs text-gray-300">37+ UI kits + AI Prompts</p>
                    </div>
                  </div>
                </Link>

                {/* 4. Contact */}
                <a
                  href="#contact"
                  className="group relative block w-full overflow-hidden rounded-2xl border bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-emerald-500/20 border-emerald-400/60 shadow-lg shadow-emerald-500/10 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-emerald-500/25"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 text-emerald-300 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">
                        Contact Me
                      </h3>
                      <p className="text-xs text-gray-300">Get in touch & collaborate</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-16 pt-10 border-t border-blue-900/30">
              <h3 className="text-center text-xl font-bold text-blue-300 mb-8 flex items-center justify-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" /> Technologies & Core Competencies
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800/80 backdrop-blur-sm"
                  >
                    <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-3">
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-lg bg-gray-800/80 border border-gray-700/60 text-gray-200 hover:border-blue-400/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: FEATURED APPS (Styling identical to trongajtt.com) */}
        {/* ========================================================================= */}
        <section
          id="apps"
          className="scroll-mt-24 relative py-16 md:py-24 border-b border-indigo-900/45 bg-gradient-to-b from-[#071229] via-[#10163d] to-[#1a1547]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                <LayoutGrid className="w-3.5 h-3.5" /> Functional Applications & Products
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">
                Featured Applications
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-300 mt-3">
                Here are some of my projects that are complete enough to become fully functional applications and can be released.
              </p>
            </div>

            {/* Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {APPS_DATA.map((app) => (
                <div
                  key={app.id}
                  className="group relative flex flex-col rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 h-full bg-[#161a23] border-gray-700/50 cursor-pointer hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(59,130,246,0.18)] hover:border-blue-500/40 hover:bg-[#1a1f2b]"
                >
                  {/* Glowing background blob */}
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 rounded-full blur-3xl transition-all duration-500 bg-blue-500/10 group-hover:bg-blue-500/25 pointer-events-none" />

                  <div className="relative p-6 flex-1 flex flex-col z-10">
                    {/* Header with App Logo */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2 border border-white/10 shadow-lg bg-gradient-to-br ${app.iconBg} text-white font-bold group-hover:scale-105 transition-transform`}>
                          {renderAppIcon(app.iconType)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-100 group-hover:text-blue-300 transition-colors line-clamp-1">
                            {app.title}
                          </h3>
                          <span className="text-xs text-gray-400 font-medium">{app.subtitle}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed flex-1">
                      {app.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mb-5 space-y-1.5">
                      {app.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
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

                      <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${app.badgeColor}`}>
                          {app.status}
                        </span>

                        <div className="flex items-center gap-3">
                          {app.demoUrl.startsWith("/") ? (
                            <Link
                              to={app.demoUrl}
                              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          ) : (
                            <a
                              href={app.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}

                          <a
                            href={app.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Apps Button */}
            <div className="text-center mt-12">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span>View All Projects & Applications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: CONTACT (Styling identical to trongajtt.com) */}
        {/* ========================================================================= */}
        <section
          id="contact"
          className="scroll-mt-24 relative py-16 md:py-24 bg-gradient-to-b from-[#130f2e] via-[#1a1438] to-[#1f1430]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
                <Mail className="w-3.5 h-3.5" /> Let's Connect & Collaborate
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-300 mt-3">
                Have a project idea, want to build something impactful together, or discuss AI engineering? Feel free to reach out anytime!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Left Column: Contact Cards */}
              <div className="space-y-4 flex flex-col justify-between">
                {/* Email card */}
                <a
                  href="mailto:hoangquymui.work@gmail.com"
                  className="group relative flex items-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50 border-gray-700/50 hover:border-blue-500/40"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-700/50 bg-gray-900/60 text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-blue-300 block mb-0.5">Email</span>
                    <span className="text-base font-semibold text-gray-100 group-hover:text-blue-300 transition-colors truncate block">
                      hoangquymui.work@gmail.com
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-300 transition-colors" />
                </a>

                {/* Phone card */}
                <a
                  href="tel:+84335566205"
                  className="group relative flex items-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50 border-gray-700/50 hover:border-blue-500/40"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-700/50 bg-gray-900/60 text-emerald-400 mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-emerald-300 block mb-0.5">Phone / Zalo</span>
                    <span className="text-base font-semibold text-gray-100 group-hover:text-emerald-300 transition-colors truncate block">
                      +84 335 566 205
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-emerald-300 transition-colors" />
                </a>

                {/* GitHub card */}
                <a
                  href="https://github.com/hoangquymui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50 border-gray-700/50 hover:border-blue-500/40"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-700/50 bg-gray-900/60 text-cyan-400 mr-4 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-cyan-300 block mb-0.5">GitHub</span>
                    <span className="text-base font-semibold text-gray-100 group-hover:text-cyan-300 transition-colors truncate block">
                      https://github.com/hoangquymui
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-300 transition-colors" />
                </a>

                {/* LinkedIn card */}
                <a
                  href="https://www.linkedin.com/in/hoangquymui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50 border-gray-700/50 hover:border-blue-500/40"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-700/50 bg-gray-900/60 text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-blue-300 block mb-0.5">LinkedIn</span>
                    <span className="text-base font-semibold text-gray-100 group-hover:text-blue-300 transition-colors truncate block">
                      linkedin.com/in/hoangquymui
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-300 transition-colors" />
                </a>

                {/* Location card */}
                <div className="group relative flex items-center p-4 sm:p-5 rounded-2xl border bg-gray-800/20 border-gray-700/40">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-700/50 bg-gray-900/60 text-rose-400 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-rose-300 block mb-0.5">Location</span>
                    <span className="text-base font-medium text-gray-200 truncate block">
                      Ho Chi Minh City, Vietnam
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Send a message Form */}
              <div className="p-6 sm:p-8 rounded-2xl border bg-gray-900/70 border-gray-800 shadow-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-sm text-gray-400 mb-6">Drop me a line anytime, I'll get back to you as soon as possible.</p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
                    <h4 className="text-lg font-semibold text-white">Thank you!</h4>
                    <p className="text-sm text-gray-300">Your message has been recorded. I will contact you shortly!</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 bg-gray-800/60 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 bg-gray-800/60 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Your Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Mùi, I would like to discuss..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 bg-gray-800/60 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all duration-300 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
