import chalk from "chalk";
import { Pengurus } from "../types/perngurus";

const logProfil = (profileData: Pengurus) => {
  console.log(chalk.bold.rgb(255, 0, 255)("Profil Koor:"));
  console.log(
    chalk.keyword("orange")("👨‍💻 Nama:") +
      " " +
      chalk.bold.green(profileData.name),
  );
  console.log(
    chalk.keyword("pink")("💼 Divisi:") +
      " " +
      chalk.italic.cyan(profileData.divisi),
  );
  console.log(
    chalk.keyword("blue")("💻 Bahasa Favorit:") +
      " " +
      chalk.underline.yellow(profileData.favLanguage?.join(", ")),
  );
  console.log(
    chalk.keyword("purple")("💖 Waifu:") +
      " " +
      chalk.bgMagentaBright.whiteBright(profileData.waifu?.join(", ")),
  );
};

export default logProfil;
