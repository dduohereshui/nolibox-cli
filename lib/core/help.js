// const {program} = require('commander')
import { program } from "commander";

const helpOptions = () => {
  program.option(
    "-d ,--dest <dest>",
    "a description folder，例如 -d src/components"
  );
  program.parse(process.argv);
};

export { helpOptions };
