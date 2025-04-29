import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-grey-800 dark:text-white">
        Get In Touch
      </h1>
      <span className="w-16 h-1 bg-pink-600 block mx-auto my-3" />
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200">
        Esse vel corrupti aspernatur cum, officiis eius laudantium sapiente
        reprehenderit.
      </p>

      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 items-center">
        <div className="h-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md"
          />
        </div>
        <div className="h-full">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md h-full resize-none"
          />
        </div>
      </div>
      <button className="px-6 py-4 bg-pink-800 text-white mt-8 rounded-md flex items-center gap-2 shadow-md hover:bg-pink-900 transition mx-auto">
        <FaPaperPlane size={18} /> Send Message
      </button>
    </div>
  );
};

export default Contact;
