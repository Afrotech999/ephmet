"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div
      className="
      fixed right-4 top-1/2 -translate-y-1/2
      z-50 flex flex-col animate-slideIn
    "
    >
      <SidebarIcon
        href="https://wa.me/25377506510"
        icon={<FaWhatsapp className="text-[22px] sm:text-[28px]" />}
        bg="bg-[#25D366]" // Official WhatsApp Green
      />
    </div>
  );
}

function SidebarIcon({ href, icon, bg }: any) {
  return (
    <Link
      href={href}
      className={`${bg} text-white
      w-12 h-12 sm:w-14 sm:h-14
      rounded-full shadow-xl
      flex items-center justify-center
      hover:scale-110 transition-transform
      hover:shadow-2xl backdrop-blur-md
      border border-white/10`}
    >
      {icon}
    </Link>
  );
}
