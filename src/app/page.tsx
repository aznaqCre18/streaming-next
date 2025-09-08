// app/page.js
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center flex-col gap-24 p-16">
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold">Next.js Streaming</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Demo Streaming Auto</h3>
            <p className="w-[50%] mb-4">
              Streaming Auto - next.js otomatis melakukan streaming dengan
              memanfaatkan loading.js yang akan di handle otomatis oleh next.js
              sebagai fallback atau return dari keseluruhan page yang sedang
              proses rendering di server
            </p>
          </div>
          <Link href="/streaming-auto-demo" prefetch={false}>
            <Button size="lg" className="cursor-pointer">
              Demo - Streaming Auto
            </Button>
          </Link>
        </div>
        <div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Demo Streaming Custom/Manual
            </h3>
            <p className="w-[50%] mb-4">
              Streaming Custom/Manual - next.js otomatis melakukan streaming
              dengan memanfaatkan component Suspense dari React yang akan
              menghandle otomatis sesuai dengan fallback yang di berikan sebagai
              props dari component yang dibungkus oleh{" "}
              <b>
                <i>{`<Suspense fallback={...} />`}</i>
              </b>
              .
            </p>
          </div>
          <Link href="/streaming-custom-demo" prefetch={false}>
            <Button size="lg" className="cursor-pointer">
              Demo - Streaming Custom/Manual
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
