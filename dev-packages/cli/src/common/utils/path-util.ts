import { homedir } from "os";
// import path from "path";
const path = require("path");

export namespace PathUtil {
    export function getLbxdrugsHomePath() {
        return process.env.LBXDRUGS_HOME_PATH ? process.env.LBXDRUGS_HOME_PATH : path.join(homedir(), '.lbxdrugs')
    }
}
