import { Koor, repoInfo } from "./src/data";
import logDivisiInfo from "./src/utils/logDivisiInfo";
import logProfil from "./src/utils/logProfile";
import { Elysia } from "elysia";

logDivisiInfo();
console.log("");
logProfil(Koor);

new Elysia()
  .get("/", () => repoInfo)
  .get("/koor", () => Koor)
  .onError(({ code }) => {
    if (code === "NOT_FOUND") return "LU MAU KMN BANGGG :(";
  })
  .listen(3000);
