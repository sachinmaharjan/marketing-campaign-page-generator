import fs from "fs";

const html = fs.readFileSync('wiki.html', 'utf-8');
console.log(html.length);
console.log(html.substring(0, 500));
