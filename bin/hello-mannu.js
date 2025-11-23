#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Check for --fetch flag
const args = process.argv.slice(2);
const isGh = args.includes("--gh");

if (isGh) {
  // Show system info ASCII art
  console.log(
    boxen(
      chalk.white(`
mannu@archbtw:~$ gitfetch

                   .~vVeZNgQBBBQQg9Ze1v~.
              \`^}%B@@@@@@@@@@@@@@@@@@@@@@8%}= \`                 mannu@archbtw
           -Lq#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#qr-              -----------------------
        .V0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0?.           OS: GNU/Linux
      _l#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#l\`         Uptime: 18 years
    \`o@@@@@@@@v^r}P0@@@@@@@@@@@@@@@@@@@@ghlr<r@@@@@@@#o\`       Packages: 1030 (pacman)
   ;0@@@@@@@@0      .?szL?*;!!!!~*|]Vox_      P@@@@@@@@0.      Shell: /bin/zsh
  ?@@@@@@@@@@q                                z@@@@@@@@@#?     Editors: vim, vscode
 :@@@@@@@@@@@Q                                R@@@@@@@@@@@"    Home: git@github.com:MannuVilasara
_g@@@@@@@@@@2-                                \`M@@@@@@@@@@0
a@@@@@@@@@@2                                    v@@@@@@@@@@;   contact information
#@@@@@@@@@@_                                     @@@@@@@@@@y   -------------------
@@@@@@@@@@@.                                     @@@@@@@@@@%   Website:mannu.live
#@@@@@@@@@@r                                    :@@@@@@@@@@s   Github: MannuVilasara
W@@@@@@@@@@Q\`                                  _0@@@@@@@@@@*
~#@@@@@@@@@@9!                                ,Q@@@@@@@@@@#    device specifications
 ;@@@@@@@@@@@@6^.                          \`\\p@@@@@@@@@@@@~    ---------------------
  n@@@@@PlVd@@@@#6Vv~_\`              \`_!?zd#@@@@@@@@@@@@#n     CPU: Normal Human Brain
   2#@@@#hr _Y#@@@@@@@#q\`          \`X#@@@@@@@@@@@@@@@@@#~
    .d@@@@@D\` .n6#@@@#V\`             Q@@@@@@@@@@@@@@@@d.
      x0@@@@0^   \`__\`-                M@@@@@@@@@@@@@@0=
        =p#@@@#%Il]]L1,              M@@@@@@@@@@@#V=
          \`vR#@@@@@@@@?              M@@@@@@@@#Pv\`
              "Lf8@@@@v              q@@@#Qa?:
                  -!v|\`              _?v!\`
                  `),
      {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: "cyan",
        dimBorder: false,
      },
    ),
  );
  process.exit(0);
}

// Create a beautiful box with information
const info = `
${chalk.bold.yellow("👋 Hello! I am Mannu.")}

${chalk.green("💻 Passionate Developer")}
${chalk.blue("🚀 Loves building stuff and exploring new technologies")}
${chalk.magenta(
  "❤️ Find me on GitHub or connect on discord for collaborations!",
)}

${chalk.cyan("🔗 GitHub: https://github.com/MannuVilasara")}
${chalk.cyan("🌐 Portfolio: https://mannu.live")}
${chalk.cyan("📧 Email: mannuvilasara@gmail.com")}

${chalk.red("✨ Also try `npx hello-mannu --gh`")}
`;

console.log(
  boxen(info, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "cyan",
    // backgroundColor: "#000000",
    dimBorder: false,
  }),
);
