import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";
import { addFolder, getFrameType } from "./addFolder.js";
import { TARGET_DIR } from "../config/targetDir.js";
import { compile, writeToFile } from "../utils/util.js";
const handleAction = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "frame",
        message: "请选择要使用的框架",
        choices: [
          {
            name: "react-js",
            value: "react-js",
          },
          {
            name: "react-ts",
            value: "react-ts",
          },
        ],
      },
    ])
    .then((frameObj) => {
      let targetDir = process.cwd();
      fs.readdir(targetDir, { encoding: "utf-8" }, (err, res) => {
        if (err) throw err;
        if (targetDir.slice(-3) == TARGET_DIR) {
          console.log(
            logSymbols.warning,
            chalk.red("请在项目根目录使用此命令～～")
          );
          spinner.stop();
        } else if (res.includes(TARGET_DIR)) {
          const spinner = ora("正在初始化～～").start();
          console.log("\b");
          let targetPath = path.resolve(targetDir, TARGET_DIR);
          getFrameType(frameObj.frame);
          addFolder(targetPath, spinner);
        }
      });
    });
};
const addCpnAction = async (name, dest) => {
  let reactCpn = await compile("react.components.ejs", { name });
  let reactStyle = await compile("react.style.ejs", { name });
  let targetPath = path.resolve(dest, name);
  writeToFile(targetPath, reactCpn);
  writeToFile(targetPath, reactStyle);
};

export { handleAction, addCpnAction };
