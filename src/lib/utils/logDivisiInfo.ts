import chalk from "chalk";

export function logDivisiInfo() {
  console.log(
    chalk.bold.rgb(255, 0, 255)("🌐 Repo Divisi Frontend AMCC 2023/2024 🌐"),
  );
  console.log(
    chalk.keyword("orange")("Deskripsi:") +
      " " +
      chalk.bold.green("Repo untuk Pelatihan Member"),
  );
  console.log(
    chalk.keyword("blue")("Materi:") +
      " " +
      chalk.underline.yellow("HTML, CSS, Javascript, Tailwindcss"),
  );
  console.log(
    chalk.keyword("pink")("Maintainer:") +
      " " +
      chalk.italic.cyan("Instruktur Divisi Web FE"),
  );
}

export function logServerStatus(hostname: string, port: string) {
  const serverMessage = chalk.bold.green(`🦊 Elysia is running at `) + chalk.blue(`http://${hostname}:${port}`) + `\n${chalk.blueBright('🚀 This framework starterpack is forged by')} ${chalk.bold.white('Figo Mager')}`;
  console.log(serverMessage);
}
