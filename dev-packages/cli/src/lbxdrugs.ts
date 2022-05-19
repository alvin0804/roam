// #!/usr/bin/env node

// import commander from "commander";
// import upload from "./script/upload";

// const program = new commander.Command();

// program
//   .command('upload')
//   // .argument('<endPoint>', 'host')
//   // .argument('[port]', 'port', customParseInt, 9090)
//   // .argument('[accessKey]', 'accessKey')
//   // .argument('[secretKey]', 'secretKey')
//   .option("-env, --environment", "当前环境", 'dev')
//   .action(upload);

// program.parse();

// const WatchPack = require("watchpack");
// import WatchPack from "watchpack";
import { CommandUtil } from "./common/utils/command-util";

// const watchpack = new WatchPack({});
// const argv = [ ...process.argv ].slice(2);

async function execute() {
  // const packageInfo = 
  CommandUtil.getPackage();
}

// function exit() {

// }

try {
  execute();
} catch (error) {
  process.exit(-1);
}
