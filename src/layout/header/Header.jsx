import Button from "../../components/ui/Button"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-wrapper relative z-20 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="logo-wrapper w-[130px]">
              <img src="/assets/images/logo/logo.png" alt="Logo" />
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-white hover:text-pink-400 cursor-pointer">
              <span>Products</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-chevron-down-icon lucide-chevron-down">
                <path d="m6 9 6 6 6-6" />
              </svg>

            </div>
            <div className="flex items-center space-x-1 text-white hover:text-pink-400 cursor-pointer">
              <span>Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-chevron-down-icon lucide-chevron-down">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="lucide lucide-download-icon lucide-download">
                <path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              Download Stream
            </Button>
            <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-white/10 cursor-pointer">
              Log in
            </Button>
            <Button className="text-black bg-white rounded-sm hover:bg-gray-100 cursor-pointer">Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header