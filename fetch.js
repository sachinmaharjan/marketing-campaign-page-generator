import https from "https";
import fs from "fs";

const options = {
  hostname: 'en.wikipedia.org',
  path: '/wiki/List_of_multinational_festivals_and_holidays',
  method: 'GET',
  headers: {
    'User-Agent': 'CoolAgent/1.0 (sachin.gen@gmail.com)'
  }
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    fs.writeFileSync('wiki.html', data);
    console.log("Written to wiki.html, length: " + data.length);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
