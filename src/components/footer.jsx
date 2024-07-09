export function Footer() {
  return (
    <footer className="bg-[#3A1D0E] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <a href="#">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="#">Support</a>
              </li>
              <li className="mb-2">
                <a href="#">Shipping & Returns</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Shop Coffee</a>
              </li>
              <li className="mb-2">
                <a href="#">Shop Mugs</a>
              </li>
              <li className="mb-2">
                <a href="#">Shop Jugs</a>
              </li>
              <li className="mb-2">
                <a href="#">Tees</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Coffee</a>
              </li>
              <li className="mb-2">
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 flex-1 rounded-l bg-[#5A3A2A] text-white"
              />
              <button className="p-2 bg-[#FFA500] rounded-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
            <p className="mt-4 text-sm">
              Sign up for our newsletter to receive exclusive offers, new
              product updates, and coffee inspiration.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-600 pt-6 text-sm">
          <div className="flex justify-between items-center">
            <p>© 2024 BrewHut. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFA500]">
                Terms
              </a>
              <a href="#" className="hover:text-[#FFA500]">
                Privacy
              </a>
              <a href="#" className="hover:text-[#FFA500]">
                Cookies
              </a>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a
                href="mailto:support@brewhut.com"
                className="hover:text-[#FFA500]"
              >
                Email: support@brewhut.com
              </a>
              <span className="hidden md:block">|</span>
              <a href="tel:1-800-273-9488" className="hover:text-[#FFA500]">
                Phone: 1-800-BREWHUT (1-800-273-9488)
              </a>
              <span className="hidden md:block">|</span>
              <address className="not-italic">
                123 Coffee Lane, Seattle, WA 98101
              </address>
            </div>
            {/* <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFA500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636A9 9 0 116.636 18.364 9 9 0 0118.364 5.636z"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-[#FFA500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l-2-2-2 2m4-4l2 2 2-2m-4 4V8"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-[#FFA500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18v18H3V3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9h6v6H9z"
                  />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
