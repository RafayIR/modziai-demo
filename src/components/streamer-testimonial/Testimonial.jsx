import './testimonial.scss';

const testimonials = [
  {
    title: "Icebreaker Effect:",
    text: "Modzi can prompt people to type when they otherwise wouldn't.",
    user: "@RS ITz Ghost",
    role: "Streamer",
  },
  {
    title: "Retention Loop:",
    text: "People stick around longer if their message get acknowledged instantly",
    user: "@Alpal",
    role: "Streamer"
  },
  {
    title: "Community feel:",
    text: "Personalities and inside jokes make the stream feel alive.",
    user: "SlayEM",
    role: "Streamer"
  },
  {
    title: "",
    checklist: [
      "Less stress",
      "More engagement",
      "Professional solo streams",
      "Extra entertainment",
    ],
    user: "",
    role: "Summary"
  },
];

export function StreamerTestimonials() {
  return (
    <div className="relative z-20 text-white py-20">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="modzi-subheading">
            Why Streamers Love It
          </h2>
          <p className="text-[#E6E6E6] text-[28px] font-normal leading-[30px]">Real results, real creators.</p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`p-6 card-border card-border-animated rounded-2xl bg-transparent hover:scale-105 transform transition-all ${[2, 3].includes(i) ? 'card-blue' : ''}`}>
              {/* Title */}
              {item.title && (
                <h3 className={`font-medium mb-3 card-title ${[2, 3].includes(i) ? 'card-title-blue' : 'card-title-purple'}`}>
                  {item.title}
                </h3>
              )}

              {/* Normal text or checklist */}
              {item.text && <p className="text-[34px] font-medium leading-[42px] mb-4">{item.text}</p>}


              {item.checklist && (
                <ul className="space-y-2 mb-4">
                  {item.checklist.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {/* <FaCheckCircle className="text-green-400" /> */}
                      <span className='text-[34px] font-medium leading-[42px]'>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* User info */}
              <p className="text-[25px] text-white">
                {item.user}{" "}
                {item.role && <span className="text-purple-400 block card-bottom-text">{item.role}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}