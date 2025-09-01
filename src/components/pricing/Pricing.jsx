import './pricing.scss';

export const Pricing = () => {
  return (
    <section className="pricing-wrapper relative z-20 text-white py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="modzi-subheading">Pricing</h2>
        <p className="text-[35px] mt-1">Start free, upgrade anytime.</p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Free Plan */}
        <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 hover:scale-105 transition-transform">
          <h3 className="text-[14px] font-semibold mb-2 text-[#777777]">Free Plan</h3>
          <p className="text-[30px] font-bold mb-6 price-text">$0</p>
          <ul className="mb-8 space-y-2 text-gray-600">
            <li>✔ Connect 1 platform</li>
            <li>✔ No personality customization</li>
            <li>✔ Limited command triggers</li>
          </ul>
          <button className="w-full py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition">
            Start Free
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 hover:scale-105 transition-transform">
          <h3 className="text-[14px] font-semibold mb-2 text-[#9147FE]">Pro Plan</h3>
          <p className="text-[30px] font-bold mb-6 price-text">$4.99</p>
          <ul className="mb-8 space-y-2 text-gray-600">
            <li>✔ Connect all platforms</li>
            <li>✔ Custom personalities</li>
            <li>✔ Unlimited commands</li>
          </ul>
          <button className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
            Upgrade Anytime
          </button>
        </div>
      </div>
    </section>
  );
};

