"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed right-4 top-1/3 z-50 flex flex-col gap-2 animate-slideIn">
      <SidebarIcon
        href="https://wa.me/25377506510"
        icon={<FaWhatsapp className="text-[18px] sm:text-[22px]" />}
        bg="bg-green-600"
      />
      <SidebarIcon
        href="tel:+25377506510"
        icon={<FaPhoneAlt className="text-[16px] sm:text-[20px]" />}
        bg="bg-blue-600"
      />
      <SidebarIcon
        href="mailto:Ephmetdji@gmail.com"
        icon={<FaEnvelope className="text-[16px] sm:text-[20px]" />}
        bg="bg-orange-500"
      />
      <SidebarIcon
        href="#"
        icon={<FaArrowUp className="text-[16px] sm:text-[20px]" />}
        bg="bg-gray-700"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}

function SidebarIcon({ href, icon, bg, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${bg} text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl
      flex items-center justify-center hover:scale-110 transition-transform
      hover:shadow-2xl backdrop-blur-md border border-white/20`}
    >
      {icon}
    </Link>
  );
}
