import { useState } from "react"
import Button from "../../components/ui/Button"
import { NavLink } from "react-router-dom"
import './header.scss';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className={`header-wrapper relative z-20 py-4 active`}>

      {isOpen && <div className="header-overlay active" onClick={() => setIsOpen(false)}></div>}

      <div className="container">
        <div className="header-menu md:hidden">
          <div className="flex items-center justify-between">
            <div className="logo-wrapper">
              <NavLink to="/" className="logo-link w-[130px]">
                <img src="/assets/images/logo/logo.png" alt="Logo" />
              </NavLink>
            </div>

            <button
              className="text-white md:hidden"
              onClick={() => setIsOpen(!isOpen)} >
              {
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              }
            </button>
          </div>
        </div>
        <div className={`header-mobile md:py-0 py-4 px-4 ${isOpen ? 'header-fixed' : ''}`}>
          <button className="cross-wrapper md:hidden flex justify-end w-full mt-2" onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <div className="flex md:items-center md:flex-row flex-col justify-between space-y-5">
            <div className="flex items-center justify-between md:py-0 py-8">
              <div className="flex md:items-center md:flex-row flex-col">
                <NavLink to="/" className="logo-wrapper w-[130px]">
                  <img src="/assets/images/logo/logo.png" alt="Logo" />
                </NavLink>
              </div>
            </div>

            <nav className="md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center justify-between md:justify-start md:space-x-1 text-white hover:text-pink-400 cursor-pointer">
                <span>Products</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-down-icon lucide-chevron-down">
                  <path d="m6 9 6 6 6-6" />
                </svg>

              </div>
              <div className="flex items-center justify-between md:justify-start md:space-x-1 text-white hover:text-pink-400 cursor-pointer">
                <span>Resources</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-down-icon lucide-chevron-down">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </nav>

            <div className="flex md:items-center md:flex-row flex-col space-x-4 space-y-2 md:space-y-0 right-btn-wrapper">
              <Button variant="ghost" className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 cursor-pointer px-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="lucide lucide-download-icon lucide-download">
                  <path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
                Download Stream
              </Button>
              <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-white/10 cursor-pointer px-0">
                Log in
              </Button>
              <Button className="md:text-black md:bg-white text-white rounded-sm hover:bg-gray-100 cursor-pointer">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}




export default Header