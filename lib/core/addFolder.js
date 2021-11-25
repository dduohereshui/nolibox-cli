import fs from "fs";
import path from "path";
import logSymbols from "log-symbols";
import chalk from "chalk";

let folderListMap = new Map();
folderListMap.set("router", "你可以在这里编写react-router相关的配置～～");
folderListMap.set("utils", "你可以在这里编写一些工具函数～～");
folderListMap.set("store", "你可以在这里编写react-redux相关的配置～～");
folderListMap.set("assets", "你可以在这里存放一些静态资源～～");
folderListMap.set("components", "你可以在这里创建各种组件～");
folderListMap.set("views", "你可以在这里创建一些主试图页面～～");
folderListMap.set("api", "你可以在这里书写关于网络请求的代码～～");
folderListMap.set("config", "你可以在这里书写一些有关配置的代码～～");

let generateFolderListMap = new Map();

const getFrameType = (frameType) => {
  frameType.filename.forEach((file) => {
    if (folderListMap.has(file)) {
      generateFolderListMap.set(file, folderListMap.get(file));
    }
  });
};
const addFolder = async (targetPath, spinner) => {
  let existfolder = [...generateFolderListMap.keys()];
  fs.readdir(targetPath, { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    for (const dataItem of data) {
      if (existfolder.includes(dataItem)) {
        generateFolderListMap.delete(dataItem);
      }
    }
    if (generateFolderListMap.size !== 0) {
      generateFolderListMap.forEach((value, key) => {
        fs.mkdir(
          path.join(targetPath, key),
          { recursive: true },
          (err, data) => {
            if (err) throw err;
            fs.writeFile(path.resolve(data, "README.md"), value, (err) => {
              if (err) throw err;
            });
          }
        );
      });
      console.log(logSymbols.success, chalk.yellow("初始化成功～～"));
      spinner.stop();
    } else {
      console.log(
        logSymbols.warning,
        chalk.red("要生成的文件夹都是存在的～～")
      );
      spinner.stop();
    }
  });
};

export { addFolder, getFrameType };
