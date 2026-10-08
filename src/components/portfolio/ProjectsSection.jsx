import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";

const projects = [
  {
    id: 1,
    title: "zzzCrawl — Video Tracker Realtime",
    description: "Hệ thống Fullstack theo dõi, cào dữ liệu và phân tích video realtime đa nền tảng (TikTok, Douyin, YouTube, Facebook) với Socket.IO & Chart.js.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "NestJS", "Socket.IO", "Chart.js"],
    demoUrl: "https://frontend-sage-alpha-40.vercel.app",
    githubUrl: "https://github.com/hoangquymui/zzzCrawl",
  },
  {
    id: 2,
    title: "Video Chat Realtime App",
    description: "Ứng dụng gọi video trực tuyến thời gian thực WebRTC độ trễ thấp, kết hợp NestJS 11 WebSocket Gateway, JWT và MySQL TypeORM.",
    image: "/projects/project2.png",
    tags: ["React 19", "Tailwind v4", "NestJS 11", "WebRTC", "MySQL"],
    demoUrl: "https://github.com/hoangquymui/video-chat-app",
    githubUrl: "https://github.com/hoangquymui/video-chat-app",
  },
  {
    id: 3,
    title: "OCR Studio AI — Vietnamese Extraction",
    description: "Hệ thống trích xuất văn bản tiếng Việt siêu tốc chính xác 100% từ PDF sang Microsoft Word (.docx) Reflowable Native Paragraphs.",
    image: "/projects/project3.png",
    tags: ["Python", "RapidOCR", "VietOCR", "ONNX", "PyTorch"],
    demoUrl: "https://github.com/hoangquymui/ocr_project",
    githubUrl: "https://github.com/hoangquymui/ocr_project",
  },
  {
    id: 4,
    title: "Tailwind Lab — UI Component Library",
    description: "Bộ sưu tập 37+ UI components hiện đại xây dựng bằng React 19, TypeScript và Tailwind CSS v4 kèm AI Prompts & Voice STT Sherpa-ONNX.",
    image: "/projects/project1.png",
    tags: ["React 19", "TypeScript", "Tailwind v4", "Sherpa-ONNX"],
    demoUrl: "/ai",
    githubUrl: "https://github.com/hoangquymui/ComponentLibrary",
  },
  {
    id: 5,
    title: "mp3Downloader — Smart YouTube to MP3",
    description: "Công cụ tải và chuẩn hóa nhạc MP3 128kbps từ YouTube với 3 giao diện: Web UI, Chrome Extension (1-click) và CLI dòng lệnh.",
    image: "/projects/project2.png",
    tags: ["Python", "Chrome Extension", "FFmpeg", "yt-dlp"],
    demoUrl: "https://github.com/hoangquymui/mp3Downloader",
    githubUrl: "https://github.com/hoangquymui/mp3Downloader",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-15 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hoangquymui"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
