import ejs from "ejs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compile = (templateName, data) => {
  const templatePosition = `../templates/${templateName}`;

  const templatePath = path.resolve(__dirname, templatePosition);

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
};

export { compile, writeToFile };
