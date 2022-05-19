const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

import { load } from "js-yaml";
import { readFile } from "fs-extra";

export const getProjectPath = () => process.cwd();

export const getProfilePath = (profilePath: string) => {
    return path.resolve(getProjectPath(), profilePath)
}

const getProfileFromFile = async (profilePath: string): Promise<unknown> => {
    const profileFilePath: string = getProfilePath(profilePath);

    const exist = fs.existsSync(profileFilePath);
    if(!exist) {
        console.log(chalk.red(`${profileFilePath} 文件不存在`));
        throw new Error(`${profileFilePath} 文件不存在`);
        return;
    }

    const content: string = await readFile(profileFilePath, 'utf8');
    return load(content);
}

export default getProfileFromFile;
