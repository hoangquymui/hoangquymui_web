import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { AIPage } from "@/pages/AIPage";
import { ComponentDetailPage } from "@/pages/ai_pages/ComponentDetail/ComponentDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chủ phong cách http://trongajtt.com/ */}
        <Route path="/" element={<HomePage />} />

        {/* /portfolio và /portforlio sử dụng folder portfolio làm trang chính */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portforlio" element={<PortfolioPage />} />

        {/* /project: Trang ghi các ứng dụng & sản phẩm của Hoàng Quý Mùi */}
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/projects" element={<Navigate to="/project" replace />} />
        <Route path="/apps" element={<Navigate to="/project" replace />} />

        {/* /ai: Trang sử dụng Component Library (Tailwind Lab + Speech STT) */}
        <Route path="/ai" element={<AIPage />} />

        {/* Component detail routes & aliases */}
        <Route path="/component/:id" element={<ComponentDetailPage />} />
        <Route path="/ai/component/:id" element={<ComponentDetailPage />} />
        <Route path="/buttons" element={<Navigate to="/ai?tab=buttons" replace />} />
        <Route path="/cards" element={<Navigate to="/ai?tab=cards" replace />} />
        <Route path="/forms" element={<Navigate to="/ai?tab=forms" replace />} />
        <Route path="/navigation" element={<Navigate to="/ai?tab=navigation" replace />} />
        <Route path="/others" element={<Navigate to="/ai?tab=others" replace />} />
        <Route path="/chat" element={<Navigate to="/ai?tab=chat" replace />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
