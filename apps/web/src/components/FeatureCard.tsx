type TFeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: TFeatureCardProps) => {
  return (
    <div className="group bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105">
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
