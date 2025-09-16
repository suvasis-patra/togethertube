import {
  CircleArrowRight,
  MessageCircle,
  Play,
  Share2,
  Shield,
  Users,
  Zap,
} from "lucide-react";

import { FeatureCard } from "../components";

const LandingPage = () => {
  return (
    <div>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Watch YouTube
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Share the magic of videos with friends. Synchronized playback,
            real-time chat, and unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r cursor-pointer from-red-500 to-orange-500 text-white inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25">
              Start Watching Together
              <span>
                <Play />
              </span>
            </button>
            <button className="bg-black/30 cursor-pointer backdrop-blur-sm inline-flex items-center gap-2.5 border border-red-500/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300">
              See How It Works
              <CircleArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Everything you need for the perfect watch party
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8 text-red-400" />}
              title="Perfect Sync"
              description="Everyone watches at exactly the same time. No more 'wait, let me catch up' moments."
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8 text-orange-400" />}
              title="Live Chat"
              description="React, comment, and share thoughts in real-time while watching your favorite videos."
            />
            <FeatureCard
              icon={<Share2 className="w-8 h-8 text-red-400" />}
              title="Easy Sharing"
              description="Create a room and share the link. Your friends join instantly, no accounts required."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-orange-400" />}
              title="Lightning Fast"
              description="Optimized for speed and reliability. Start watching together in seconds."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-red-400" />}
              title="Private & Safe"
              description="Your watch parties are private. We don't store or share your viewing data."
            />
            <FeatureCard
              icon={<Play className="w-8 h-8 text-orange-400" />}
              title="Any Video"
              description="Works with any YouTube video. Paste the link and start your watch party."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start watching together?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of people already having amazing watch parties.
              Create your first room in under 30 seconds.
            </p>
            <button className="bg-gradient-to-r cursor-pointer from-red-500 to-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25">
              Create Your First Room
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-red-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Play className="w-3 h-3 text-white" />
            </div>
            <span className="text-lg font-bold text-white">WatchTogether</span>
          </div>
          <p className="text-gray-400">
            Making YouTube more social, one watch party at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
