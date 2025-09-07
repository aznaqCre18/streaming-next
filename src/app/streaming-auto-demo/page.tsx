// app/streaming-auto-demo/page.js
export const dynamic = "force-dynamic";

import ToolsCardsManual from "@/components/tools-card-auto";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <ToolsCardsManual />
    </div>
  );
}
