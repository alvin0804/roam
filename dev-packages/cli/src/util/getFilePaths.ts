// import fs from "fs";
// import path from "path";
const fs = require("fs");
const path = require("path");

export interface FileItem {
    source: string;
    target: string;
}

export default function getFilePaths(basePath: string) {
    const result: FileItem[] = [];

    function fileDisplay(entryPath: string) {
        const files: string[] = fs.readdirSync(entryPath);
    
        files.forEach((fileName: string) => {
            const fileDir: string = path.join(entryPath, fileName);
            const stat: any = fs.statSync(fileDir);
            if(stat.isDirectory()) {
                fileDisplay(fileDir);
            } else {
                result.push({
                    source: fileDir,
                    target: path.resolve(".", fileDir.slice(basePath.length))
                })
            }
        })
    }

    fileDisplay(basePath);

    return result;
}
