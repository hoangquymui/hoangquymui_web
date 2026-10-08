# 🌐 Hoàng Quý Mùi — Web Portal

> Cổng thông tin & sản phẩm cá nhân của **Hoàng Quý Mùi** (Data Scientist, AI Engineer & Full Stack Developer).  
> Tích hợp giao diện hiện đại lấy cảm hứng từ phong cách của `trongajtt.com`, trang Portfolio cá nhân, trang Showcase các ứng dụng, và phòng thí nghiệm Component Library (Tailwind Lab + Voice STT).

---

## 🚀 Cấu trúc Router & Các trang chính

| Route | Trang / Chức năng | Mô tả chi tiết |
|---|---|---|
| **`/`** | **Home Portal** | Trang chủ chuẩn phong cách `trongajtt.com`: Giới thiệu bản thân, 4 Quick action cards, Showcase các Featured Applications, Tech stacks, Thông tin liên hệ và Contact Form. |
| **`/portfolio`** *(và alias `/portforlio`)* | **Personal Portfolio** | Tích hợp toàn bộ nội dung từ thư mục `portfolio`: Hiệu ứng sao vũ trụ (Star & Meteor Background), Hero Section, About Me (Tải CV resume.pdf), Kỹ năng (Skills filter tabs & progress bars), Dự án nổi bật, Contact Section. |
| **`/project`** *(và alias `/projects`, `/apps`)* | **Applications & Projects** | Trang chuyên sâu liệt kê toàn bộ các ứng dụng (Apps) của Hoàng Quý Mùi: Hỗ trợ tìm kiếm theo từ khóa/công nghệ, lọc theo danh mục (AI & ML, Web Apps, Dev Tools, Data Science), xem tính năng nổi bật, nút Try App và GitHub. |
| **`/ai`** | **AI Component Lab** | Tích hợp thư viện `ComponentLibrary` (Tailwind Lab): 37+ UI components phân theo 5 danh mục (Buttons, Cards, Forms, Navigation, Others), AI Prompts cho từng component, và module AI Voice Chat (Speech-to-Text). |
| **`/component/:id`** | **Component Detail** | Trang xem chi tiết preview, mã nguồn, và sao chép **AI Prompt** của từng UI component. |

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

- **Frontend Core**: [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) + [Vite 6](https://vite.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`)
- **Routing**: [React Router DOM v7](https://reactrouter.com)
- **Icons**: [Lucide React](https://lucide.dev) + Bộ Custom SVG Social Icons (GitHub, LinkedIn, Twitter,...)
- **UI & Feedback**: Radix UI Toast Notification (`@radix-ui/react-toast`)
- **Voice STT Support**: Web Audio API + Sherpa-ONNX Local AI Server

---

## 💻 Hướng dẫn chạy dự án

### 1. Cài đặt thư viện
```bash
cd hoangquymui_web
npm install
```

### 2. Chạy môi trường phát triển (Dev Mode)
```bash
npm run dev
```
Truy cập trình duyệt tại: `http://localhost:5173`

### 3. Build sản phẩm (Production Build)
```bash
npm run build
```
Thư mục xuất bản: `dist/`

### 4. Xem trước bản build (Preview)
```bash
npm run preview
```

---

## 🎙️ Kích hoạt tính năng AI Voice STT (Tùy chọn)

Để sử dụng micro thu âm nhận diện giọng nói tiếng Việt/tiếng Anh trong tab **AI Voice & STT Chat** ở trang `/ai`:
1. Mở terminal tại `ComponentLibrary/src/components/Chat/SpeechFunc/python`
2. Cài thư viện: `pip install -r requirements.txt`
3. Chạy server: `python server_stt.py`
4. Server WebSocket sẽ mở tại: `ws://localhost:8000/ws/speech`
