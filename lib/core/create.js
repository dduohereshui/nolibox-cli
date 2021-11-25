import { program } from "commander";

import { handleAction, addCpnAction } from "./action.js";
const createCommands = () => {
  program
    .command("init")
    .description("init your project folder,例如 nolibox-format init")
    .action(handleAction);

  program
    .command("add <cpnname>")
    .description(
      "add a cpn to any folder，例如 nolibox-format add Home -d src/components"
    )
    .action((name) => {
      addCpnAction(
        name,
        program.description("dest")["_optionValues"]["dest"] || "src/components"
      );
    });
};

export { createCommands };
