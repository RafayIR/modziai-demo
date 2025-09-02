import './service.scss';


const integrations = [
  {
    name: "Twitch",
    image: '/assets/images/services/twitch.png',
  },
  {
    name: "YouTube",
    image: '/assets/images/services/youtube.png',
  },
  {
    name: "Discord",
    image: '/assets/images/services/discord.png',
  },
  {
    name: "Kick",
    image: '/assets/images/services/kick.png',
  },
];


export function Integrations() {

  return (
    <div className='integration-wrapper z-10 py-20'>
      <div className='container'>
        <div className="relative ">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              <span className="modzi-heading">ModziAI</span> increases chat activity
              by <span className="text-green-400">30-60%</span> for smaller
              streamers.
            </h1>
            <p className="service-text mt-4">
              Giving you better engagement and boosting your streams.
            </p>
          </div>

          {/* Integration cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-cols-2 md:gap-3 justify-between mx-auto w-full max-w-5xl">
            {integrations.map((integration, i) => (
              <div
                key={i}
                className={`relative text-center text-white hover:scale-105 transform transition-all shadow-lg`}>
                <img src={integration?.image} className="w-full" width="994" height="1168" alt={integration?.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}