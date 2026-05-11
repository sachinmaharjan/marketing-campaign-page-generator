import fs from "fs";

const text = fs.readFileSync('exact_holidays.txt', 'utf-8');
const lines = text.split('\n');

const result = {};
let currentMonth = null;

const cleanup = (str) => {
  return str.replace(/"/g, "'").replace(/\n/g, " ").trim();
};

for (const line of lines) {
  if (line.startsWith("=== ")) {
    currentMonth = line.replace(/=== /g, "").replace(/ ===/g, "").trim();
    if (currentMonth === "Movable_date") currentMonth = "Movable date";
    result[currentMonth] = [];
  } else if (line.trim().length > 0 && currentMonth) {
    // format is often "Name : Date - Description"
    const match = line.match(/^([^:]+):(.*)$/);
    if (match) {
      let name = match[1].trim();
      let rest = match[2].trim();
      
      let dateStr = rest;
      let category = "";
      
      const dashMatch = rest.match(/^[^\–\-\u2013\u2014]+[\–\-\u2013\u2014](.*)$/);
      if (dashMatch) {
         dateStr = rest.replace(dashMatch[1], "").replace(/^[\–\-\u2013\u2014]\s*/, "").trim();
         category = dashMatch[1].trim();
         // Actually, dateStr is usually before dash
         const actualDateMatch = rest.match(/^([^\–\-\u2013\u2014]+)[\–\-\u2013\u2014]\s*(.*)$/);
         if (actualDateMatch) {
             dateStr = actualDateMatch[1].trim();
             category = actualDateMatch[2].trim();
         }
      }
      
      if (name.length > 50) name = name.substring(0, 47) + "...";
      if (category.length > 100) category = category.substring(0, 97) + "...";
      if (dateStr.length > 50) {
          category = dateStr;
          dateStr = "";
      }
      if (category.length > 100) category = category.substring(0, 97) + "...";
      
      const id = name.toLowerCase().replace(/[^a-z0-9]/g, "").substring(0, 15) + Math.floor(Math.random()*1000);
      result[currentMonth].push(`    { id: '${id}', name: "${cleanup(name)}", dateStr: "${cleanup(dateStr)}", category: "${cleanup(category)}" }`);
    } else {
      const id = line.toLowerCase().replace(/[^a-z0-9]/g, "").substring(0, 15) + Math.floor(Math.random()*1000);
      let name = cleanup(line);
      if (name.length > 50) name = name.substring(0, 47) + "...";
      result[currentMonth].push(`    { id: '${id}', name: "${name}", dateStr: "", category: "" }`);
    }
  }
}

let out = "";
for (const month in result) {
  out += `  '${month}': [\n${result[month].join(',\n')}\n  ],\n`;
}

fs.writeFileSync('generated_holidays.txt', out);
