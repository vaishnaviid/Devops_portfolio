"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/NavLinks";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiExternalLink, FiHome } from "react-icons/fi";

export function PageStepper() {
  const pathname = usePathname();
  const currentIndex = navLinks.findIndex((item) => item.href === pathname);

  // 🚨 If current page is NOT part of navLinks
  if (currentIndex === -1) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Link href="/" className="resumelink">Go Home <FiHome /></Link>
      </div>
    );
  }

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === navLinks.length - 1;

  const prevItem = !isFirst ? navLinks[currentIndex - 1] : null;
  const nextItem = !isLast ? navLinks[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between mt-10">

      {/* LEFT SIDE BUTTON */}
      {isFirst ? (
        <Link href="/resume.pdf" target="_blank" className="resumelink">Get Resume <FiExternalLink /></Link>
      ) : (
        <Link href={prevItem!.href} className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-700 rounded-md hover:bg-gray-800 transition group">
          <IoIosArrowBack className="h-4 w-4 transition group-hover:-translate-x-1" /> {prevItem!.label}
        </Link>
      )}

      {/* RIGHT SIDE BUTTON */}
      {isLast ? (
        <Link href="/resume.pdf" target="_blank" className="resumelink">Get Resume <FiExternalLink /></Link>
      ) : (
        <Link
          href={nextItem!.href}
          className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-700 rounded-md hover:bg-gray-800 transition group"
        >
          {nextItem!.label}
          <IoIosArrowForward className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
