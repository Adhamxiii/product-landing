import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-16 bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-white font-bold text-3xl">LOGO</div>
          <p className="text-gray-300 text-sm mt-5 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, quibusdam. Dolorum nam ad repellendus consequatur!
          </p>
          <div className="flex items-center space-x-4 mt-6 text-white">
            <div className="w-8 h-8 flex items-center justify-center flex-col rounded-full bg-blue-700">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 flex items-center justify-center flex-col rounded-full bg-blue-400">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 flex items-center justify-center flex-col rounded-full bg-pink-700">
              <FaDribbble />
            </div>
            <div className="w-8 h-8 flex items-center justify-center flex-col rounded-full bg-red-700">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-white font-bold text-lg">Company</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            About Us
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Services
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Our Customer
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Portfolio
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Blogs
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-white font-bold text-lg">Support</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Legal Information
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Report Abuse
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium text-sm cursor-pointer">
            Privacy Police
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-white font-bold text-lg">Get In Touch</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-white mt-1">+0123456789</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Address</h1>
            <h1 className="text-base font-bold text-white mt-1">
              123, Lorem ipsum.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright &copy; 2025. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaFacebookF />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
