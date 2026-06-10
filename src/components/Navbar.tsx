import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5">
      <Link to="/" className="flex items-center space-x-2.5">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
          <rect width="24" height="24" rx="7" fill="currentColor" />
          <g transform="translate(4.5, 4.5) scale(0.625)">
            <path fill="black" d="M11.134 2.19231C11.6698 1.88373 12.3302 1.88373 12.866 2.19231L20.2529 6.45293C20.789 6.76182 21.1202 7.33405 21.1202 7.95191V16.0481C21.1202 16.666 20.789 17.2382 20.2529 17.5471L12.866 21.8077C12.3302 22.1163 11.6698 22.1163 11.134 21.8077L3.74712 17.5471C3.21102 17.2382 2.87978 16.666 2.87978 16.0481V7.95191C2.87978 7.33405 3.21102 6.76182 3.74712 6.45293L11.134 2.19231Z" />
          </g>
        </svg>
        <span className="text-white font-semibold tracking-wide text-lg">Ascend Network</span>
      </Link>
      <div>
        <button className="bg-white text-black px-5 py-2 md:py-2.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center space-x-2">
          <span className="hidden sm:inline">Download</span>
          <Download size={16} />
        </button>
      </div>
    </nav>
  );
}
