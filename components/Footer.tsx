const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-12">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-10">
      {/* Location */}
      <div>
        <h4 className="text-white text-xl font-semibold mb-3">Location</h4>
        <address className="not-italic text-sm leading-relaxed">
          1287 Maplewood Drive<br />
          Los Angeles, CA 90026
        </address>
      </div>

      {/* Office Hours */}
      <div>
        <h4 className="text-white text-xl font-semibold mb-3">Office Hours</h4>
        <ul className="text-sm leading-relaxed space-y-1">
          <li>
            <span className="font-semibold">In-person:</span> Tue & Thu, 10 AM–6 PM
          </li>
          <li>
            <span className="font-semibold">Virtual (Zoom):</span> Mon, Wed & Fri, 1 PM–5 PM
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white text-xl font-semibold mb-3">Contact</h4>
        <p className="text-sm leading-relaxed">(323) 555-0192</p>
        <a
          href="mailto:serena@blakepsychology.com"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-300 text-sm block mt-1"
        >
          serena@blakepsychology.com
        </a>
      </div>
    </div>

    <div className="mt-10 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
    </div>
  </footer>
)

export default Footer
