import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="absolute flex items-center flex-col z-10 top-1/3 left-1/4">
        <ArrowDown size={40} className="animate-bounce" />
        <div className="size-2 bg-red-500 rounded-full"></div>
      </div>
      <Image src="/image.png" fill alt="img" />
    </div>
  )
}