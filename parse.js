import fs from "fs";

const html = fs.readFileSync('wiki.html', 'utf-8');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Movable_date"];

for (let i = 0; i < months.length; i++) {
  const month = months[i];
  const nextMonth = months[i+1] ? `id="${months[i+1]}"` : 'id="See_also"';
  
  const startIdx = html.indexOf(`id="${month}"`);
  const endIdx = html.indexOf(nextMonth, startIdx);
  
  if (startIdx === -1) continue;
  
  const sectionHtml = endIdx !== -1 ? html.substring(startIdx, endIdx) : html.substring(startIdx);
  
  console.log(`\n=== ${month} ===`);
  
  const liRegex = /<li>([\s\S]*?)<\/li>/g;
  let match;
  while ((match = liRegex.exec(sectionHtml)) !== null) {
      let textContent = match[1];
      // remove nested uls
      textContent = textContent.replace(/<ul[\s\S]*?<\/ul>/g, '');
      // remove span/sup stuff optionally
      textContent = textContent.replace(/<sup[\s\S]*?<\/sup>/g, '');
      // strip html
      let stripped = textContent.replace(/<[^>]+>/g, " ").trim();
      // clean spaces
      stripped = stripped.replace(/\s+/g, ' ');
      // decode entities roughly
      stripped = stripped.replace(/&ndash;/g, '-').replace(/&#160;/g, ' ').replace(/&amp;/g, '&');
      
      // if it's too long, truncate it
      if (stripped.length > 0 && !stripped.startsWith("Category:")) {
         console.log(stripped.substring(0, 150));
      }
  }
}
