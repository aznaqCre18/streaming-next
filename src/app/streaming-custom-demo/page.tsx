// app/streaming-demo/page.js
export const dynamic = "force-dynamic";

import ToolsCards from "@/components/tools-card";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <ToolsCards />
    </div>
  );
}
