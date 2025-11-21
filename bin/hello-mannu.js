#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Create a beautiful box with information
const info = `
${chalk.bold.yellow("👋 Hello! I am Mannu.")}

${chalk.green("💻 Passionate Developer")}
${chalk.blue("🚀 Loves building stuff and exploring new technologies")}
${chalk.magenta(
  "🌐 Find me on GitHub or connect on discord for collaborations!"
)}

${chalk.cyan("🔗 GitHub: https://github.com/MannuVilasara")}
${chalk.cyan("🌐 Portfolio: https://mannu.live")}
${chalk.cyan("📧 Email: mannuvilasara@gmail.com")}

${chalk.red("✨ Thanks for checking out my CLI tool!")}
`;

console.log(
  boxen(info, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "cyan",
    backgroundColor: "#000000",
    dimBorder: false,
  })
);
