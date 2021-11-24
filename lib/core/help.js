// const {program} = require('commander')
import { program } from "commander";

const helpOptions = () => {
  program
    .option("-C ,--addcpn <cpnname>", "your component name")
    .option("-P ,--addpage <pagename>", "your page name");
  program.parse(process.argv);
  const options = program.opts();
  // return program.description("filename")["_optionValues"]["filename"];
};

export { helpOptions };
