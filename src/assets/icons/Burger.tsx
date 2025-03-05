"use client";

import { Link, usePathname } from "@/navigation";

export const Burger = () => {
  const pathname = usePathname();
  return pathname === "/menu" ? (
    <Link href="/">
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 10.5L10 30.5M10 10.5L30 30.5"
          stroke="#B0183C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  ) : (
    <Link href="/menu" className="cursor-pointer">
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 20.5H5M28.3333 30.5H5M35 10.5H5"
          stroke="#B0183C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
