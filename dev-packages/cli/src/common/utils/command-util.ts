const minimist = require("minimist");

import { Settings } from "../settings/settings-protocol";
import { SettingsUtil } from "../settings/settings-util";

export namespace CommandUtil {
    export function getPackage(settings: Settings = SettingsUtil.getSettings(), projectPath = process.cwd()) {
        console.log(process.argv);
        const options = minimist(process.argv.slice(2));
        console.log(options, settings);
    }
}
