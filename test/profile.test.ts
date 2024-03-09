import chalk from "chalk";
import logProfile from "../src/lib/utils/logProfile";
import { expect, jest, test } from "@jest/globals";

console.log = jest.fn();

test("logProfile correctly logs profile data", () => {
  const profileData = {
    name: "Figo",
    divisi: "Web Frontend",
    favLanguage: ["Typescript", "Javascript"],
    waifu: ["Homura-chan"],
  };

  logProfile(profileData);

  expect(console.log).toHaveBeenCalledTimes(5);

  expect(console.log).toHaveBeenNthCalledWith(
    1,
    chalk.bold.rgb(255, 0, 255)("Profil Koor:"),
  );
  expect(console.log).toHaveBeenNthCalledWith(
    2,
    chalk.keyword("orange")("👨‍💻 Nama:") +
      " " +
      chalk.bold.green(profileData.name),
  );
  expect(console.log).toHaveBeenNthCalledWith(
    3,
    chalk.keyword("pink")("💼 Divisi:") +
      " " +
      chalk.italic.cyan(profileData.divisi),
  );
  expect(console.log).toHaveBeenNthCalledWith(
    4,
    chalk.keyword("blue")("💻 Bahasa Favorit:") +
      " " +
      chalk.underline.yellow(profileData.favLanguage.join(", ")),
  );
  expect(console.log).toHaveBeenNthCalledWith(
    5,
    chalk.keyword("purple")("💖 Waifu:") +
      " " +
      chalk.bgMagentaBright.whiteBright(profileData.waifu.join(", ")),
  );
});
