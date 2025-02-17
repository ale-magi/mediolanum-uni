"use client"
import { Map, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  if (pathname !== "/")
    return (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 rounded-full p-1 flex justify-center items-center bg-white border-2 border-black">
        {pathname === "/map" && <Link href="/user"> <UserRound className="size-16" /></Link>}
        {pathname === "/user" && <Link href="/map"> <Map className="size-16" /></Link>}
      </div >
    )
}