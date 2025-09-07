// app/page.js
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-24">
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Next.js Streaming
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link href="/streaming-auto-demo" prefetch={false}>
          <Button size="lg" className="cursor-pointer">
            Streaming Auto Demo
          </Button>
        </Link>
        <Link href="/streaming-custom-demo" prefetch={false}>
          <Button size="lg" className="cursor-pointer">
            Streaming Custom/Manual Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
