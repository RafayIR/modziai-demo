import { Link } from "react-router-dom"

export const Footer = () => {

  return (
    <footer className="flex relative z-20 flex-col md:flex-row justify-between items-center md:items-start text-gray-400 border-t border-gray-800 py-10 pb-20 max-w-6xl mx-auto" >
      {/* Logo */}
      <div className="mb-8 md:mb-0" >
        <div className="flex items-center">
          <Link to="/" className="logo-wrapper w-[130px]">
            <img src="/assets/images/logo/logo.png" alt="Logo" />
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-3 gap-12 text-sm" >
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>
      </div>
    </footer >
  )
}