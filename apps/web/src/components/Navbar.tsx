import { Play } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 border-b border-white/10 backdrop-blur-lg bg-black/30">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Play className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-white">TogetherTube</span>
        </div>
        <button className="bg-black/30 backdrop-blur-sm border border-red-500/30 text-white px-6 py-2 rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
