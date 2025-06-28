import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Description */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="text-white"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p className="font-semibold text-lg">
            ACME Industries Ltd.
            <br />
            <span className="font-normal">
              Providing reliable tech since 1992
            </span>
          </p>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </aside>

        {/* Social Icons */}
        <nav>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557c-.883.392-1.832..."></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604..."></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v..."></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
