const chalk = require("chalk");
const path = require("path");
// import chalk from "chalk";
import * as Minio from "minio";
// import path from "path";
import getFilePaths, { FileItem } from "../util/getFilePaths";
import getProfileFromFile from "../util/profile";


export default async () => {
  const profile: any = await getProfileFromFile("lbxdrugs.yml");
  const {
    environment,
    projectName,
    build: { endPoint, port, accessKey, secretKey, bucketName, target },
  } = profile;

  const miniOClient = new Minio.Client({
    endPoint,
    port,
    accessKey,
    secretKey,
  });

  const files: FileItem[] = getFilePaths(path.join(process.cwd(), target));

  console.log(JSON.stringify(files, null, 2));

  const failedFiles: string[] = [];

  await files.map(async (fileItem: FileItem) => {
    try {
      const uploadInfo: Minio.UploadedObjectInfo = await miniOClient.fPutObject(bucketName, `/${environment}/${projectName}${fileItem.target}`, fileItem.source);
      console.log(`/${environment}/${projectName}${fileItem.target}`, uploadInfo.versionId, uploadInfo.etag)
    } catch (error: any) {
      failedFiles.push(fileItem.source);
      throw new Error(error);
    }
  });

  if (failedFiles.length) {
    console.log(chalk.red(failedFiles.join(", ") + "等文件上传失败，请重试~"));
    return;
  }

  process.exit();
};
