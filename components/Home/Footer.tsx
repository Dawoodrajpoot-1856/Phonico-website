"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-[1330px] mx-auto flex flex-col md:flex-row justify-between px-5 md:px-8 pt-12 pb-6 gap-8">
        {/* Left Column: Logo & Contact info */}
        <div className="flex flex-col md:w-1/3">
          <img
            src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=128&q=75"
            alt="Phonico Logo"
            className="h-18 w-20 object-contain self-start"
          />
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Stay Connected, Anytime and Anywhere with Phonico! Your Journey, Our
            Commitment to Unbeatable Connectivity.
          </p>

          {/* Contact Details */}
          <div className="mt-5 space-y-2.5">
            <div className="flex items-center gap-3">
              <img
                src="https://phonico.com/images/headphone.svg"
                alt="Phone"
                className="h-5 w-5"
              />
              <a
                href="tel:4847466426"
                className="text-[#ec3c65] font-medium text-sm md:text-base hover:underline"
              >
                (484) 746-6426
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://phonico.com/images/emailIcon.svg"
                alt="Email"
                className="h-5 w-5"
              />
              <a
                href="mailto:support@phonico.com"
                className="text-[#ec3c65] font-medium text-sm md:text-base hover:underline"
              >
                support@phonico.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://phonico.com/images/instaIcon.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://phonico.com/images/linkedinIcon.svg"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://phonico.com/images/facebookIcon.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://phonico.com/images/twitterIcon.svg"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="flex flex-col mt-10 md:w-1/4">
          <h2 className="font-semibold text-gray-900 text-lg md:text-xl mb-3">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2.5 text-gray-600 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-[#ec3c65] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-[#ec3c65] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-[#ec3c65] transition-colors"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-[#ec3c65] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-10 md:w-1/4">
          <h2 className="font-semibold text-gray-900 text-lg md:text-xl mb-2">
            Download the App now
          </h2>
          {/* gap aur margin kam kar ke links ko keeb kiya hai */}
          <div className="flex flex-row md:flex-col lg:flex-row gap-2 mt-1">
            <a
              href="https://play.google.com/store/apps/details?id=com.activatewireless.phonico&hl=en&gl=US"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.01] transition-transform"
            >
              <img
                src="https://phonico.com/images/playLink.svg"
                className="h-9 w-auto"
                alt="Google Play"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id6468944607"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.01] transition-transform"
            >
              <img
                src="https://phonico.com/images/appleLink.svg"
                className="h-9 w-auto"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Clean Copyright: Bina alag background aur border ke upar shift kiya gaya */}
      <div className="max-w-[1330px]  text-center mx-auto px-5 md:px-8 pb-8">
        <p className="text-gray-400 font-medium text-xs md:text-sm">
          Phonico © 2026. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
