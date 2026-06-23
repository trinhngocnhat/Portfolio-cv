const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Nhat Trinh
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Resume Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Resume
        </button>

      </div>
    </header>
  );
};

export default Header;