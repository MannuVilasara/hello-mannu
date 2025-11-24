#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import { info } from "../lib/info.js";

// Check for --fetch flag
const args = process.argv.slice(2);
const isGh = args.includes("--gh");

if (isGh) {
  // Show system info ASCII art
  console.log(
    chalk.cyan(`
                   .~vVeZNgQBBBQQg9Ze1v~.
              \`^}%B@@@@@@@@@@@@@@@@@@@@@@8%}= \`                ${chalk.bold.cyan(
                info.name.toLowerCase() + "@archlinux",
              )}
           -Lq#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#qr-              ${chalk.gray(
             "─────────────────────────────────",
           )}
        .V0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0?.           ${chalk.yellow(
          "󰣇 OS:",
        )}       ${chalk.white(info.os)}
      _l#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#l\`         ${chalk.yellow(
        "󱎫 Uptime:",
      )}   ${chalk.magenta(info.age + " Years")} ${chalk.red("🚗💨")}
    \`o@@@@@@@@v^r}P0@@@@@@@@@@@@@@@@@@@@ghlr<r@@@@@@@#o\`       ${chalk.yellow(
      " Packages:",
    )} ${chalk.white(info.packages)} ${chalk.green("📦")}
   ;0@@@@@@@@0      .?szL?*;!!!!~*|]Vox_      P@@@@@@@@0.      ${chalk.yellow(
     " Shell:",
   )}    ${chalk.white(info.shell)} 
  ?@@@@@@@@@@q                                z@@@@@@@@@#?     ${chalk.yellow(
    " Editors:",
  )}  ${chalk.white(info.editors)}
 :@@@@@@@@@@@Q                                R@@@@@@@@@@@"    ${chalk.yellow(
   " Theme:",
 )}    ${chalk.white(info.theme)}
_g@@@@@@@@@@2-                                \`M@@@@@@@@@@0
a@@@@@@@@@@2                                    v@@@@@@@@@@;   ${chalk.bold.green(
      "⚙️  tech stack",
    )}
#@@@@@@@@@@_                                     @@@@@@@@@@y   ${chalk.gray(
      "─────────────────────────────────",
    )} 
@@@@@@@@@@@.                                     @@@@@@@@@@%   ${chalk.cyan(
      "▓▓▓▓▓▓▓▓▓░",
    )} ${chalk.white("JS/TS/Python")} ${chalk.blue("")}  
#@@@@@@@@@@r                                    :@@@@@@@@@@s   ${chalk.green(
      "▓▓▓▓▓▓▓▓░░",
    )} ${chalk.white("Node.js/Express/Next.js")} ${chalk.cyan("")}
W@@@@@@@@@@Q\`                                  _0@@@@@@@@@@*   ${chalk.red(
      "▓▓▓▓▓▓▓▓▓░",
    )} ${chalk.white("MongoDB/PostgreSQL/Redis")} ${chalk.green("🍃")}
~#@@@@@@@@@@9!                                ,Q@@@@@@@@@@#    ${chalk.magenta(
      "▓▓▓▓▓▓▓░░░",
    )} ${chalk.white("Docker/Kubernetes/AWS/GCP")} ${chalk.blue("🐳")}
 ;@@@@@@@@@@@@6^.                          \`\\p@@@@@@@@@@@@~    
  n@@@@@PlVd@@@@#6Vv~_\`              \`_!?zd#@@@@@@@@@@@@#n     ${chalk.bold.magenta(
    "🔗 contact & links",
  )}
   2#@@@#hr _Y#@@@@@@@#q\`          \`X#@@@@@@@@@@@@@@@@@#~     ${chalk.gray(
     " ─────────────────────────────────",
   )}
    .d@@@@@D\` .n6#@@@#V\`             Q@@@@@@@@@@@@@@@@d.      ${chalk.blue(
      "  GitHub:",
    )}    ${chalk.cyan(info.gh)}
      x0@@@@0^   \`__\`-                M@@@@@@@@@@@@@@0=       ${chalk.green(
        "  Portfolio:",
      )} ${chalk.cyan(info.porfolio)}
        =p#@@@#%Il]]L1,              M@@@@@@@@@@@#V=          ${chalk.red(
          " 󰇮 Email:",
        )}     ${chalk.cyan(info.email)}
          \`vR#@@@@@@@@?              M@@@@@@@@#Pv\`
              "Lf8@@@@v              q@@@#Qa?:
                  -!v|\`              _?v!\`
                  `),
  );
  process.exit(0);
}

// Create a beautiful box with information
const art = `
${chalk.bold.yellow(`👋 Hello! I am ${info.name}.`)}

${chalk.green("💻 Passionate Developer")}
${chalk.blue("🚀 Loves building stuff and exploring new technologies")}
${chalk.magenta(
  "❤️ Find me on GitHub or connect on discord for collaborations!",
)}

${chalk.cyan("🔗 GitHub: " + info.gh)}
${chalk.cyan("🌐 Portfolio: " + info.porfolio)}
${chalk.cyan("📧 Email: " + info.email)}

${chalk.red("✨ Also try `npx hello-mannu --gh`")}
`;

console.log(
  boxen(art, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "cyan",
    // backgroundColor: "#000000",
    dimBorder: false,
  }),
);
