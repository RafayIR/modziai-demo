import Button from "../ui/Button"

export const CallToAction = () => {
  return (
    <section className="relative z-20 text-white py-20 px-6">
      {/* CTA */}
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="modzi-subheading mb-4">
          Ready to Stream Smarter?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Join thousands of creators using ModziAI to level up their chat.
        </p>
        <Button className="try-free-btn hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg cursor-pointer">
          Try ModziAI Free
          <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3561 38.3297C30.7652 38.3297 38.3908 30.7029 38.3908 21.295C38.3908 11.8871 30.7652 4.26019 21.3561 4.26019C11.9482 4.26019 4.32129 11.8871 4.32129
                 21.295C4.32129 30.7029 11.9482 38.3297 21.3561 38.3297ZM21.3561 5.62292C29.9975 5.62292 37.0281 12.6535 37.0281 21.295C37.0281 29.9364 29.9975 36.967 21.3561 
                 36.967C12.7133 36.967 5.68402 29.9364 5.68402 21.295C5.68402 12.6535 12.7133 5.62292 21.3561 5.62292Z" fill="white" />
            <path d="M22.39 28.6179L23.3539 29.5818L31.6394 21.295L23.3539 13.0082L22.39 13.9721L29.0309 20.613H12.4976V21.9757H29.0309L22.39 28.6179Z" fill="white" />
          </svg>
        </Button>
      </div>
    </section>
  )
}