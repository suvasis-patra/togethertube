import { Play } from "lucide-react";

const AuthImageSection = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-full px-6 py-12">
      <div className="flex flex-col items-center gap-8 text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
          Enjoy <span className="text-orange-600">YouTube</span> like never
          before with friends and family
        </h1>
        <div className="inline-flex items-center gap-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              TogetherTube
            </span>
          </h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Watch videos, share reactions, and interact in real-time with your
          loved ones.
        </p>
        <img
          src="/images/auth_page_image.svg"
          alt="TogetherTube preview"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default AuthImageSection;
