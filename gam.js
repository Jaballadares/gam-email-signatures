import { energyConfig } from "./energy-email-config.js";
import { promisify } from "util";
import { exec } from "child_process";
const execPromise = promisify(exec);

energyConfig.map((agent) => {
  async function addSigs() {
    let email = agent.emailAddress;
    let file = agent.signatureFile;
    try {
      const { stdout, stderr } = await execPromise(
        `gam user ${email} signature file ${file}`
      );
      console.log("out", stdout);
      console.log("err", stderr);
    } catch (err) {
      console.error(err);
    }
  }
  addSigs();
});
