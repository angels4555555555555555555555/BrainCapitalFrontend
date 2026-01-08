import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-gray-200 py-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <img
          src="/logo.png"
          alt="RCH Capital Holding GMBH. Logo"
          className="w-30 h-auto mb-2"
        />

        <div className="flex flex-col gap-3 mt-4">
          <a href="/">
            <button className="border border-gray-400 text-gray-600 px-6 py-2 font-bold rounded-lg text-lg hover:bg-gray-100 transition w-full">
              Home
            </button>
          </a>
          <Link href="/impressum">
            <button className="border border-gray-400 text-gray-600 px-6 py-2 font-bold rounded-lg text-lg hover:bg-gray-100 transition">
              Impressum
            </button>
          </Link>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-24 text-center">
          {/* Email */}
          <div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 29 29" style={{ width: "30px" }}>
                <path
                  fill="currentColor"
                  d="M5.135 5.37c-1.531 0-2.772 1.209-2.772 2.7v12.958c0 1.491 1.241 2.7 2.772 2.7h18.848c1.53 0 2.771-1.209 2.771-2.7V8.07c0-1.491-1.24-2.7-2.771-2.7H5.135zm0-1.62h18.848c2.449 0 4.434 1.934 4.434 4.32v12.958c0 2.386-1.985 4.32-4.434 4.32H5.135c-2.45 0-4.435-1.934-4.435-4.32V8.07c0-2.386 1.986-4.32 4.435-4.32z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23.998 7.48c.335.306.35.819.036 1.145l-5.898 6.103 5.88 5.728c.298.29.323.745.075 1.062l-.075.083a.847.847 0 01-1.176 0l-5.844-5.693-1.832 1.896a.847.847 0 01-1.21 0l-1.833-1.896L6.277 21.6a.847.847 0 01-1.176 0 .795.795 0 010-1.145l5.88-5.728-5.897-6.103a.795.795 0 01.035-1.145.847.847 0 011.176.035l8.264 8.552 8.264-8.552a.847.847 0 011.175-.035z"
                ></path>
              </svg>
              <span className="font-bold">E-Mail</span>
              <p className="text-gray-600 text-base">
                info@rch-capital-holding.com
              </p>
            </div>
          </div>

          {/* Telefon */}
          <div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 29 29" style={{ width: "30px" }}>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.7"
                  d="M6.364 3.81c1.496-1.503 5.032-2.139 6.907-2.108 1.88-.218 1.273 8.104.313 8.263 0 0-3.039.384-3.125 1.275-.116 1.217 3.009 8.67 4.22 8.84.65.091 2.606-1.402 2.606-1.402 1.521-1.145 4.678 2.2 6.161 3.596.649.627.617 1.159-.059 1.947-1.181 1.322-4.29 3.439-5.52 3.266-2.988-.42-8.05-4.592-10.483-9.582-2.743-5.629-2.712-12.82-1.02-14.095z"
                ></path>
              </svg>
              <span className="font-bold">Telefon</span>
              <p className="text-gray-600 text-base">0305199994482</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
