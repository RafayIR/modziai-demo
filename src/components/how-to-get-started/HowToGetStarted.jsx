import { useState } from "react";

export const HowToGetStarted = () => {
  const faqs = [
    { question: "Is ModziAI safe for my stream?", answer: "Yes, ModziAI is designed to be safe and secure for streaming platforms." },
    { question: "Does ModziAI work with my current mods?", answer: "Yes, ModziAI can work alongside your existing mods seamlessly." },
    { question: "Can I try ModziAI without paying?", answer: "Absolutely, there’s a free plan available to get started." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative z-20 text-white py-20 px-6 flex flex-col items-center">
      {/* How to Get Started */}
      <div className="max-w-5xl w-full mb-20 ">
        <h2 className="text-2xl font-bold modzi-subheading mb-6">
          How to Get Started
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-300 text-[20px] leading-relaxed">
          <li>Create your account in seconds. No credit card required for the free plan.</li>
          <li>Connect Twitch, YouTube, Discord, or Kick with just a few clicks.</li>
          <li>Choose your AI personality and go live, ModziAI takes care of the rest.</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl w-full text-center">
        <h3 className="text-2xl font-bold modzi-subheading mb-8">
          Frequently asked questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 text-black rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-left">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
