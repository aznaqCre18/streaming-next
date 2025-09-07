// lib/getTools.js
const TOOLS = [
  "JavaScript",
  "React",
  "Vue",
  "Svelte",
  "Preact",
  "Angular",
  "Astro",
  "Flutter",
  "Solid",
];

// lib/getTools.js
async function generateToolsData(tool: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * delay));

  return tool;
}

const getTools = async () => {
  "use server";

  const DELAY = 3000;
  console.log("LOG INI MASUK KE SERVER");

  return TOOLS.map((tool) => generateToolsData(tool, DELAY));
};

export default getTools;
