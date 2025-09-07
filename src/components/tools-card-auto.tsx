// components/tools-card.js
import IconCard from "@/components/icon-card";
import getTools from "@/lib/getTools";

const ToolsCardsManual = async () => {
  const toolsPromise = await getTools();
  const tools = await Promise.all(toolsPromise);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 py-6">
        {tools.map((tool, idx) => (
          <IconCard key={idx} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolsCardsManual;
