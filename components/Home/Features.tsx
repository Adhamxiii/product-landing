import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md";

const featuredData = [
  {
    title: "Touch to buy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <MdOutlineTouchApp className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Secure Data",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <FaFingerprint className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Instant Chat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <HiOutlineChat className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Live Notification",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <MdNotifications className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Wifi Support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <IoWifiOutline className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "App Watch",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <IoAppsOutline className="w-12 h-12 text-pink-600 mx-auto" />,
  },
];

const Features = () => {
  return (
    <div className="py-16 ">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredData.map((item, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-anchor-placement="top-center"
            key={item.title}
            className="text-center mx-auto"
          >
            <div className="mx-auto text-center">{item.icon}</div>
            <h1 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">
              {item.title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
