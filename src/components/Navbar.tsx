import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-black/80 border-b border-[#333336]">
      <Link to="/" className="flex items-center space-x-3">
        <span className="text-[#f5f5f7] font-medium tracking-tight text-xl">Ascend</span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8 text-[15px] font-normal text-[#86868b]">
         <a href="#features" className="hover:text-[#f5f5f7] transition-colors">Features</a>
         <a href="#showcase" className="hover:text-[#f5f5f7] transition-colors">Showcase</a>
      </div>

      <div className="flex items-center space-x-4">
        <a  
          href="https://github.com/saditya93/landingpageascendnetwork/releases/download/v0/AscendNetwork.exe" 
          download
          className="bg-[#f5f5f7] text-black px-4 py-1.5 text-[13px] font-medium rounded-full hover:bg-white transition-all hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
