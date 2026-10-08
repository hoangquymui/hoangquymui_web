import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ButtonsPage } from "@/pages/ai_pages/Buttons/ButtonsPage";
import { CardsPage } from "@/pages/ai_pages/Cards/CardsPage";
import { FormsPage } from "@/pages/ai_pages/Forms/FormsPage";
import { NavigationPage } from "@/pages/ai_pages/Navigation/NavigationPage";
import { OthersPage } from "@/pages/ai_pages/Others/OthersPage";
import { ChatPage } from "@/pages/ai_pages/Chat/ChatPage";
import { 
  Sparkles, 
  Box, 
  CheckSquare, 
  LayoutGrid, 
  MoreHorizontal, 
  MessageSquare,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Layers,
  Code2,
  ExternalLink,
  Sliders,
  Cpu
} from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";

export function AIPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "buttons";
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const categories = [
    { 
      id: "buttons", 
      label: "Buttons & Badges", 
      count: 13,
      icon: Sparkles, 
      desc: "Nút bấm đa hiệu ứng: Gradient glow, Neumorphism, Glassmorphism, Loading state." 
    },
    { 
      id: "cards", 
      label: "Cards & Containers", 
      count: 8,
      icon: Box, 
      desc: "Thẻ profile, thống kê analytics, thẻ sản phẩm e-commerce, bảng giá pricing." 
    },
    { 
      id: "forms", 
      label: "Forms & Inputs", 
      count: 5,
      icon: CheckSquare, 
      desc: "Form đăng nhập, đăng ký, reset mật khẩu, feedback và ô tìm kiếm nhanh." 
    },
    { 
      id: "navigation", 
      label: "Navigation & Bars", 
      count: 7,
      icon: LayoutGrid, 
      desc: "Sidebars thu gọn/mở rộng, Top header, Segmented TabBar, Breadcrumbs, Mobile Bottom Nav." 
    },
    { 
      id: "others", 
      label: "Others & Progress", 
      count: 4,
      icon: MoreHorizontal, 
      desc: "Thanh tiến độ WCAG accessible, vòng tròn phần trăm, spinner tải trang." 
    },
    { 
      id: "chat", 
      label: "AI Voice & STT Chat", 
      count: 1,
      icon: MessageSquare, 
      desc: "Chatbot tích hợp microphone nhận diện giọng nói cục bộ (Sherpa-ONNX)." 
    },
  ];

  const activeCategory = categories.find((c) => c.id === currentTab) || categories[0];

  const handleSelectTab = (tabId: string) => {
    setSearchParams({ tab: tabId });
    setIsMobileDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#071229] text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16 flex flex-col">
        {/* Mobile Category Bar (Visible only on < md) */}
        <div className="md:hidden sticky top-16 z-30 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-800 border border-gray-700 text-sm font-medium text-blue-400"
          >
            <Menu className="w-4 h-4" />
            <span>Danh mục: <strong>{activeCategory.label}</strong></span>
          </button>
          <span className="text-xs text-gray-400 font-mono">
            {activeCategory.count} components
          </span>
        </div>

        {/* 2-Column Layout with Side Panel */}
        <div className="flex-1 flex max-w-[1600px] w-full mx-auto relative">
          {/* ========================================================================= */}
          {/* DESKTOP SIDE PANEL (Sidebar) */}
          {/* ========================================================================= */}
          <aside
            className={`hidden md:flex flex-col sticky top-16 h-[calc(100vh-4rem)] border-r border-gray-800/80 bg-gray-900/60 backdrop-blur-xl transition-all duration-300 ease-in-out shrink-0 z-20 ${
              isSidebarExpanded ? "w-64 lg:w-72" : "w-20"
            }`}
          >
            {/* Sidebar Header */}
            <div className="p-4 border-b border-gray-800/80 flex items-center justify-between">
              {isSidebarExpanded ? (
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/20 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-sm font-bold text-white truncate">Tailwind Lab</h2>
                    <span className="text-[10px] text-cyan-400 font-mono block">37+ UI Components</span>
                  </div>
                </div>
              ) : (
                <div className="w-full flex justify-center">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
              )}

              <button
                onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                aria-label={isSidebarExpanded ? "Thu gọn sidebar" : "Mở rộng sidebar"}
                className={`p-1.5 rounded-lg border border-gray-700/60 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors ${
                  !isSidebarExpanded ? "hidden" : ""
                }`}
                title={isSidebarExpanded ? "Thu gọn" : "Mở rộng"}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Uncollapse button when collapsed */}
            {!isSidebarExpanded && (
              <div className="py-2 flex justify-center border-b border-gray-800/60">
                <button
                  onClick={() => setIsSidebarExpanded(true)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                  title="Mở rộng menu"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Category Navigation Items */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
              {isSidebarExpanded && (
                <div className="px-3 py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Component Categories
                </div>
              )}

              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = currentTab === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectTab(cat.id)}
                    className={`group w-full flex items-center rounded-xl transition-all duration-200 cursor-pointer ${
                      isSidebarExpanded
                        ? "px-3 py-2.5 justify-between"
                        : "p-2.5 justify-center"
                    } ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/20 border border-blue-400/30"
                        : "text-gray-300 hover:bg-gray-800/70 hover:text-white"
                    }`}
                    title={!isSidebarExpanded ? `${cat.label} (${cat.count})` : undefined}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-1 rounded-lg shrink-0 ${isActive ? "text-cyan-200" : "text-gray-400 group-hover:text-blue-400"}`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      {isSidebarExpanded && (
                        <span className="text-xs sm:text-sm font-medium truncate text-left">
                          {cat.label}
                        </span>
                      )}
                    </div>

                    {isSidebarExpanded && (
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full shrink-0 font-mono ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-gray-800 text-gray-400 group-hover:text-gray-200"
                        }`}
                      >
                        {cat.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Sidebar Footer */}
            <div className="p-3 border-t border-gray-800/80 bg-gray-950/40">
              {isSidebarExpanded ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>React 19 • Tailwind v4</span>
                    <span className="text-cyan-400 font-mono">Ready</span>
                  </div>
                  <a
                    href="https://github.com/hoangquymui/ComponentLibrary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg border border-gray-700 hover:border-gray-600 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white text-xs transition-colors"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </div>
              ) : (
                <div className="flex justify-center">
                  <a
                    href="https://github.com/hoangquymui/ComponentLibrary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              )}
            </div>
          </aside>

          {/* ========================================================================= */}
          {/* MOBILE DRAWER (For small screens) */}
          {/* ========================================================================= */}
          {isMobileDrawerOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setIsMobileDrawerOpen(false)}
              />
              <div className="fixed left-0 top-0 bottom-0 w-72 max-w-[85%] bg-gray-900 border-r border-gray-800 p-4 flex flex-col justify-between shadow-2xl z-50">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
                    <div className="flex items-center gap-2">
                      <Layers className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white text-sm">Component Categories</span>
                    </div>
                    <button
                      onClick={() => setIsMobileDrawerOpen(false)}
                      className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = currentTab === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => handleSelectTab(cat.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-blue-600 text-white font-semibold"
                              : "text-gray-300 hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4 opacity-80" />
                            <span>{cat.label}</span>
                          </div>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-black/20 text-gray-300 font-mono">
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
                  © 2026 Hoàng Quý Mùi • Tailwind Lab
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* MAIN CONTENT AREA */}
          {/* ========================================================================= */}
          <section className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
            {/* Top Category Title Bar */}
            <div className="mb-6 pb-6 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium mb-1">
                  <Link to="/" className="hover:underline">Home</Link>
                  <span>/</span>
                  <Link to="/ai" className="hover:underline">AI Lab</Link>
                  <span>/</span>
                  <span className="text-gray-300">{activeCategory.label}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  <span>{activeCategory.label}</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {activeCategory.count} Items
                  </span>
                </h1>

                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-3xl">
                  {activeCategory.desc} Mỗi component có kèm mã nguồn và <strong>AI Prompt</strong> chi tiết để tái tạo.
                </p>
              </div>

              {/* Badges on right */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                  React 19
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
                  Tailwind CSS v4
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                  TypeScript
                </span>
              </div>
            </div>

            {/* Component Content Canvas */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm p-4 sm:p-6 shadow-xl min-h-[500px]">
              {currentTab === "buttons" && <ButtonsPage />}
              {currentTab === "cards" && <CardsPage />}
              {currentTab === "forms" && <FormsPage />}
              {currentTab === "navigation" && <NavigationPage />}
              {currentTab === "others" && <OthersPage />}
              {currentTab === "chat" && <ChatPage />}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
