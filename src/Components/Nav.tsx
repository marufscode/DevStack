import React from 'react';
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="w-full h-[70px] border border-cyan-400 bg-white">
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={Logo} alt="" />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[13px]">
          {["Home", "Technologies", "Projects", "About", "Contact"].map(
            (item, index) => (
              <a
                key={item}
                href="#"
                className={`transition ${
                  index === 0
                    ? "text-pink-600 font-medium"
                    : "text-slate-700 hover:text-pink-600"
                }`}
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Auth */}
        <div className="flex items-center gap-5 text-[13px]">
          <a
            href="#"
            className="text-slate-700 hover:text-pink-600 transition"
          >
            Sign In
          </a>

          <a
            href="#"
            className="px-5 py-2 rounded-full bg-pink-600 text-white
                       font-semibold hover:bg-pink-700 transition"
          >
            Sign Up
          </a>
        </div>

      </div>
    </nav>
    );
};

export default Nav;