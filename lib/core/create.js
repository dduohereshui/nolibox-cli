import { program } from "commander";

import { handleAction } from "./action.js";
const createCommands = () => {
  program
    .command("init")
    .description("clone repository into a folder")
    .action(handleAction);

  program
    .command("addcpn <cpnname> to [targetfolder]")
    .description("add a cpn to any folder")
    .action((cpnname, other, targetfolder) => {
      console.log(cpnname);
      console.log(other);
      console.log(targetfolder);
    });
};

export { createCommands };
