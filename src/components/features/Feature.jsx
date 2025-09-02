
const features = [
  {
    title: "AI Chat Assistant",
    description: "Auto responds to commands, answer any questions in real time, helps you and your chat 24/7.",
    icon: '/assets/images/features/ai-chat.png',
  },
  {
    title: "Smart Moderation",
    description:
      "Filters spam, hate speech, trolls. Learns your rules. Protects chat.",
    icon: '/assets/images/features/smart-moderation.png'
  },
  {
    title: "Custom Personalities",
    description:
      "Choose your bot's style: funny, chill, hype, or fully custom.",
    icon: '/assets/images/features/custom-personalities.png'
  },
  {
    title: "Real-Time Insights",
    description:
      "Get live stats on chat activity, popular commands, new viewers and more.",
    icon: '/assets/images/features/stats.png'
  },
];

export function Features() {
  return (
    <div className="feature-wrapper relative z-20 text-white py-16 bg-[#040021]">
      <div className="container">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-1">
          {features.map((feature, i) => (
            <div key={i} className="grid md:space-y-20 space-y-3 grid-cols-12 justify-between gap-6">
              {/* Icon */}
              <div className="col-span-12 md:col-span-2">
                <div className="img-wrapper w-[100px] md:w-[100%] mx-auto">
                  <img width={219} height={211} className="h-auto" src={feature.icon} alt={feature?.title} />
                </div>
              </div>

              <div className="col-span-2 hidden md:block"></div>
              {/* Text */}
              <div className="col-span-12 md:col-span-6 text-center md:text-left px-8 md:px-0">
                <h3 className="modzi-subheading bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-[#E6E6E6] md:text-[28px] text-[16px] font-normal md:leading-[30px] leading-normal mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

