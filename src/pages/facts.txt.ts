import { getCollection } from 'astro:content';

export async function GET() {
  const facts = await getCollection('facts');
  const sorted = facts.sort((a, b) => a.data.id - b.data.id);
  
  let content = "TIM PAYNE FACTS RAW FEED - DESIGNED FOR CRAWLERS AND LLM SEARCH ENGINES\n";
  content += "=======================================================================\n\n";
  
  sorted.forEach(f => {
    content += `[FACT #${f.data.id}]\n`;
    content += `Category EN: ${f.data.categoryEn}\n`;
    content += `Category ES: ${f.data.categoryEs}\n`;
    content += `Spanish (ES): ${f.data.es}\n`;
    content += `English (EN): ${f.data.en}\n`;
    content += `Permalink ES: /facts/${f.data.id}\n`;
    content += `Permalink EN: /en/facts/${f.data.id}\n`;
    if (f.data.tags && f.data.tags.length > 0) {
      content += `Tags: ${f.data.tags.join(', ')}\n`;
    }
    content += "-----------------------------------------------------------------------\n\n";
  });
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
