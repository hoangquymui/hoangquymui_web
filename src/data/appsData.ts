export interface AppItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "AI & Machine Learning" | "Developer Tools" | "Web Applications" | "Data Science";
  techStack: string[];
  status: "Featured" | "Live Demo" | "Open Source" | "Full Stack";
  demoUrl: string;
  githubUrl: string;
  iconType: "activity" | "video" | "file-text" | "layers" | "music" | "bar-chart" | "globe";
  iconBg: string;
  badgeColor: string;
  highlights: string[];
}

export const APPS_DATA: AppItem[] = [
  {
    id: "zzzcrawl",
    title: "zzzCrawl — Video Tracker Realtime",
    subtitle: "Realtime Social Video Tracking & Analytics",
    description: "Hệ thống Fullstack theo dõi, cào dữ liệu và phân tích video realtime đa nền tảng (TikTok, Douyin, YouTube, Facebook). Frontend xây dựng với React, TypeScript, Chart.js, Socket.IO Client và xuất Excel (.xlsx); Backend NestJS với WebSocket Gateway cập nhật dữ liệu tự động tức thì.",
    category: "Web Applications",
    techStack: ["React", "TypeScript", "NestJS", "Socket.IO", "Chart.js", "TailwindCSS"],
    status: "Live Demo",
    demoUrl: "https://frontend-sage-alpha-40.vercel.app",
    githubUrl: "https://github.com/hoangquymui/zzzCrawl",
    iconType: "activity",
    iconBg: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    highlights: [
      "Cập nhật realtime qua Socket.IO Gateway",
      "Trực quan hóa xu hướng video với Chart.js",
      "Xuất báo cáo số liệu phân tích định dạng Excel (.xlsx)",
      "Kiến trúc Monorepo hiệu năng cao React + NestJS"
    ]
  },
  {
    id: "video-chat-app",
    title: "Video Chat Realtime App",
    subtitle: "WebRTC & WebSocket Video Calling Platform",
    description: "Ứng dụng gọi video trực tuyến thời gian thực hiện đại, độ trễ thấp và bảo mật cao. Frontend xây dựng với React 19, Tailwind CSS v4, Socket.IO Client và giao diện chia ô kéo thả Resizable Panels; Backend NestJS 11 với WebSocket Gateway, xác thực JWT, TypeORM và cơ sở dữ liệu MySQL.",
    category: "Web Applications",
    techStack: ["React 19", "Tailwind CSS v4", "NestJS 11", "WebRTC", "Socket.IO", "MySQL"],
    status: "Full Stack",
    demoUrl: "https://github.com/hoangquymui/video-chat-app",
    githubUrl: "https://github.com/hoangquymui/video-chat-app",
    iconType: "video",
    iconBg: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    highlights: [
      "Truyền video thời gian thực độ trễ thấp qua WebRTC",
      "NestJS 11 WebSocket Gateway xử lý sự kiện tức thì",
      "Xác thực tài khoản bảo mật JWT & MySQL TypeORM",
      "Giao diện chia màn hình hiện đại với Resizable Panels"
    ]
  },
  {
    id: "ocr-project",
    title: "OCR Studio AI — Vietnamese Extraction",
    subtitle: "High-Speed OCR & Native Word (.docx) Exporter",
    description: "Hệ thống trích xuất văn bản Tiếng Việt siêu tốc chính xác 100% từ tài liệu PDF và hình ảnh sang file Microsoft Word (.docx). Tích hợp RapidOCR C++ ONNX Detector (~0.02s/trang) và VietOCR C++ JIT Engine, xuất file Word định dạng Reflowable Native Paragraphs và Bảng ẩn không viền.",
    category: "AI & Machine Learning",
    techStack: ["Python", "RapidOCR", "VietOCR", "ONNX Runtime", "python-docx", "PyTorch"],
    status: "Featured",
    demoUrl: "https://github.com/hoangquymui/ocr_project",
    githubUrl: "https://github.com/hoangquymui/ocr_project",
    iconType: "file-text",
    iconBg: "from-purple-600 to-pink-600",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    highlights: [
      "RapidOCR C++ ONNX Detector siêu tốc (~0.02s/trang)",
      "VietOCR C++ JIT Engine nhận diện 100% tiếng Việt chuẩn",
      "Xuất file Word Reflowable Native Paragraphs & Bảng ẩn",
      "Hỗ trợ trích xuất trọn vẹn tài liệu PDF đa trang và bảng biểu"
    ]
  },
  {
    id: "component-library",
    title: "Tailwind Lab — UI Component Library",
    subtitle: "37+ Modern UI Components with AI Prompts & Voice STT",
    description: "Bộ sưu tập 37+ UI components hiện đại xây dựng bằng React 19, TypeScript, Tailwind CSS v4 và Vite 8. Mỗi component đều kèm AI Prompt chi tiết để tái tạo lại bằng bất kỳ mô hình AI nào. Tích hợp trọn bộ hệ thống nhận dạng giọng nói ngoại tuyến Voice STT bằng Python Sherpa-ONNX.",
    category: "Developer Tools",
    techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite 8", "Sherpa-ONNX", "FastAPI"],
    status: "Live Demo",
    demoUrl: "/ai",
    githubUrl: "https://github.com/hoangquymui/ComponentLibrary",
    iconType: "layers",
    iconBg: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    highlights: [
      "37+ UI Components phân thành 5 nhóm lớn hoàn thiện",
      "AI Prompts chi tiết đi kèm từng component",
      "Chuyển đổi Dark/Light Mode mượt mà chuẩn Design Token",
      "Tích hợp Voice STT nhận dạng giọng nói cục bộ Sherpa-ONNX"
    ]
  },
  {
    id: "mp3-downloader",
    title: "mp3Downloader — Smart YouTube to MP3",
    subtitle: "High-Speed Audio Downloader & Name Normalizer",
    description: "Công cụ tải và chuẩn hóa nhạc MP3 128kbps từ YouTube về máy tính với 3 giao diện: Web UI, Chrome Extension (1-click) và CLI dòng lệnh. Tự động nhận diện Ca sĩ & Bài hát, chuyển đổi tên file chuẩn không dấu và loại bỏ hoàn toàn các rác tiêu đề (Official MV, Lyrics, 4K, HD).",
    category: "Developer Tools",
    techStack: ["Python", "HTML5", "Chrome Extension API", "FFmpeg", "yt-dlp"],
    status: "Open Source",
    demoUrl: "https://github.com/hoangquymui/mp3Downloader",
    githubUrl: "https://github.com/hoangquymui/mp3Downloader",
    iconType: "music",
    iconBg: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    highlights: [
      "3 giao diện linh hoạt: Web UI, Chrome Extension & CLI",
      "Tự động nhận diện và làm sạch tên Ca sĩ & Bài hát",
      "Chuẩn hóa tên file tiếng Việt không dấu tự động",
      "Chất lượng MP3 128kbps chuẩn, tối ưu dung lượng và tốc độ tải"
    ]
  },
  {
    id: "orbit-analytics",
    title: "Orbit Analytics Dashboard",
    subtitle: "Interactive Data Science & Metrics Explorer",
    description: "Bảng điều khiển trực quan hóa dữ liệu và số liệu phân tích Machine Learning với bộ lọc đa chiều, biểu đồ phân phối dữ liệu và theo dõi hiệu suất mô hình theo thời gian thực.",
    category: "Data Science",
    techStack: ["TypeScript", "React", "D3.js", "TailwindCSS", "Recharts"],
    status: "Featured",
    demoUrl: "/portfolio#projects",
    githubUrl: "https://github.com/hoangquymui",
    iconType: "bar-chart",
    iconBg: "from-violet-600 to-purple-600",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    highlights: [
      "Bộ lọc dữ liệu tương tác đa chiều",
      "Cập nhật số liệu mô hình thời gian thực",
      "Tùy biến biểu đồ D3.js linh hoạt",
      "Xuất báo cáo định kỳ tự động"
    ]
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Platform",
    subtitle: "High-Converting Product Launch Web",
    description: "Giao diện website giới thiệu sản phẩm SaaS hiện đại, tối ưu tỉ lệ chuyển đổi với thiết kế responsive, hiệu ứng chuyển động mượt mà, theme switcher và tích hợp xác thực tài khoản qua Supabase.",
    category: "Web Applications",
    techStack: ["React 19", "Tailwind CSS", "Supabase", "Lucide Icons"],
    status: "Live Demo",
    demoUrl: "/portfolio#projects",
    githubUrl: "https://github.com/hoangquymui",
    iconType: "globe",
    iconBg: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    highlights: [
      "Thiết kế tối ưu chuyển đổi chuẩn UI/UX",
      "Hiệu ứng chuyển động Micro-interactions mượt mà",
      "Tích hợp Supabase Auth",
      "Tối ưu điểm SEO và hiệu năng tải trang"
    ]
  }
];
