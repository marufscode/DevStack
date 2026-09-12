import React from 'react';

const Footer = () => {
    return (
       <footer className="border-t border-slate-100 bg-white">
      
      {/* Center Container */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-pink-500 text-[9px] font-bold text-white">
                DS
              </div>

              <span className="text-sm font-bold text-slate-900">
                Dev <span className="text-purple-600">Stack</span>
              </span>
            </div>

            <p className="mt-3 max-w-xs text-[10px] leading-4 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="#" className="text-[9px] text-slate-600 hover:text-purple-600">
                GitHub
              </a>

              <a href="#" className="text-[9px] text-slate-600 hover:text-purple-600">
                Twitter
              </a>

              <a href="#" className="text-[9px] text-slate-600 hover:text-purple-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[9px] font-bold uppercase text-slate-900">
              Product
            </h3>

            <div className="mt-3 space-y-2">
              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                Home
              </a>

              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                Technologies
              </a>

              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[9px] font-bold uppercase text-slate-900">
              Company
            </h3>

            <div className="mt-3 space-y-2">
              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                About
              </a>

              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                Contact
              </a>

              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[9px] font-bold uppercase text-slate-900">
              Legal
            </h3>

            <div className="mt-3 space-y-2">
              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                Privacy Policy
              </a>

              <a href="#" className="block text-[9px] text-slate-400 hover:text-purple-600">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-slate-100 py-5">
          
          <p className="text-[8px] text-slate-300">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="text-[8px] text-slate-300 hover:text-slate-500">
              Privacy
            </a>

            <a href="#" className="text-[8px] text-slate-300 hover:text-slate-500">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
    );
};

export default Footer;