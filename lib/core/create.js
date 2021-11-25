import { program } from "commander";

import { handleAction, addCpnAction } from "./action.js";
const createCommands = () => {
  program
    .command("init")
    .description("clone repository into a folder")
    .action(handleAction);

  program
    .command("addcpn <cpnname>")
    .description(
      "add a cpn to any folder，例如 nolibox-format addcpn -d src/components"
    )
    .action((name) => {
      addCpnAction(
        name,
        program.description("dest")["_optionValues"]["dest"] || "src/components"
      );
    });
};

export { createCommands };
