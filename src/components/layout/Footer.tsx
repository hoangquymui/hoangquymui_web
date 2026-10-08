import { Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="main-footer" className="relative z-30 w-full backdrop-blur-sm border-t bg-gray-950/70 border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between items-center text-center md:text-left text-gray-400 text-sm">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Contact:</span>
              <a
                href="mailto:hoangquymui.work@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                hoangquymui.work@gmail.com
              </a>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Ho Chi Minh City, Vietnam</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <span>© 2026</span>
            <span className="font-semibold text-gray-300">Hoàng Quý Mùi</span>
            <span>• Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>& AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
