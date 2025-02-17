import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Link href="/map" >
        <Button className="rounded-xl flex size-full items-cente text-6xl p-5 gap-0">
          <h1 className="font-">Scopri</h1>
          <div className="flex items-center gap-0 -rotate-12">
            <span className="text-red-500 text-7xl font-secondary">&#40;</span>
            <span className="font-bold">MI</span>
            <span className="text-red-500 text-7xl">&#41;</span>
            <h1>!</h1>
          </div>
        </Button >
      </Link>
    </div >
  );
}
