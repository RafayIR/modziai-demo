import Button from "../ui/Button"
import './herosection.scss';


export function HeroSection() {
  return (
    <section className="banner-section relative z-10 md:py-20 py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-[50px] lg:text-[62px] font-bold leading-[50px] text-balance">
                <span className="modzi-heading">ModziAI. </span>
                <span className="text-white">Your Smartest Mod Yet</span>
              </h1>
              <p className="text-[22px] text-gray-300 leading-[25px] max-w-lg">
                ModziAI is your personalized AI chat assistant built for streamers. It entertains your audience, sparks
                conversations, and protects your chat — all in real time.
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <Button className="try-free-btn w-auto hover:from-purple-700 hover:to-pink-700 text-white md:px-6 py-3 md:text-lg cursor-pointer">
                Try for Free
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3561 38.3297C30.7652 38.3297 38.3908 30.7029 38.3908 21.295C38.3908 11.8871 30.7652 4.26019 21.3561 4.26019C11.9482 4.26019 4.32129 11.8871 4.32129
                 21.295C4.32129 30.7029 11.9482 38.3297 21.3561 38.3297ZM21.3561 5.62292C29.9975 5.62292 37.0281 12.6535 37.0281 21.295C37.0281 29.9364 29.9975 36.967 21.3561 
                 36.967C12.7133 36.967 5.68402 29.9364 5.68402 21.295C5.68402 12.6535 12.7133 5.62292 21.3561 5.62292Z" fill="white" />
                  <path d="M22.39 28.6179L23.3539 29.5818L31.6394 21.295L23.3539 13.0082L22.39 13.9721L29.0309 20.613H12.4976V21.9757H29.0309L22.39 28.6179Z" fill="white" />
                </svg>
              </Button>
              <Button
                variant="outline" className="see-feature hover:bg-blue-500/10 md:px-6 py-3 text-lg  text-white bg-transparent cursor-pointer">
                See Features
              </Button>
            </div>
          </div>

          {/* Right content - Video player mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <img src="/assets/images/banner/vid-player.png" alt="Video Player" />
          </div>
        </div>

        <div className="banner-botttom absolute -z-1 bottom-0 left-0 right-0">
          <img src="/assets/images/banner/banner-bottom-gradient.png" alt="Banner Bottom" />
        </div>
      </div>
    </section>
  )
}
