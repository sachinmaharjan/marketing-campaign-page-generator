import fs from "fs";
const generated = fs.readFileSync('generated_holidays.txt', 'utf-8');
const replacement = `const HOLIDAYS_BY_MONTH: Record<string, Holiday[]> = {\n${generated}};\n`;

const targetFile = './src/CreateCampaign.tsx';
let targetText = fs.readFileSync(targetFile, 'utf-8');

const regex = /const HOLIDAYS_BY_MONTH: Record<string, Holiday\[\]> = \{[\s\S]*?\n};\n/;
targetText = targetText.replace(regex, replacement);

fs.writeFileSync(targetFile, targetText);
