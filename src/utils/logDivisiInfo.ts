import chalk from "chalk";

function logDivisiInfo() {
  console.log(chalk.bold.rgb(255, 0, 255)("🌐 Repo Divisi Frontend AMCC 2023/2024 🌐"));
  console.log(
    chalk.keyword("orange")("Deskripsi:") +
      " " +
      chalk.bold.green("Repo untuk Pelatihan Member"),
  );
  console.log(
    chalk.keyword("blue")("Tech Stack:") +
      " " +
      chalk.underline.yellow("HTML, CSS, Javascript, Tailwindcss"),
  );
  console.log(
    chalk.keyword("pink")("Maintainer:") +
      " " +
      chalk.italic.cyan("Divisi Web FE"),
  );
}

export default logDivisiInfo;
