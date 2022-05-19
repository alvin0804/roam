const path = require("path");
import { existsSync, readFileSync } from "fs";
import { load } from "js-yaml";
// import path from "path";
import { PathUtil } from "../utils/path-util"
import { DEFAULT_SETTINGS, Settings } from "./settings-protocol";

export namespace SettingsUtil {

    export function getSettingsPath() {
        return process.env.LBXDRUGS_SETTINGS_PATH ? process.env.LBXDRUGS_SETTINGS_PATH : path.join(PathUtil.getLbxdrugsHomePath());
    }

    export function doGetSettings(): Settings {
        const settingsPath = getSettingsPath();
        if(existsSync(settingsPath)) {
            const content = readFileSync(settingsPath, { encoding: 'utf8' });
            return (load(content) || {}) as Settings;
        }
        return {}
    }

    export function getSettings(): Settings {
        return { ...DEFAULT_SETTINGS, ...doGetSettings() }
    }
}
