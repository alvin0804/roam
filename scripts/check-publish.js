// @ts-check

const path = require('path');
const chalk = require('chalk');
const cp = require('child_process');
const fs = require('fs');

checkPublish().catch(error => {
    console.error(error);
    process.exitCode = 1;
});

async function checkPublish() {
    const workspaces = JSON.parse(cp.execSync('yarn --silent workspaces info').toString());
    await Promise.all(Object.values(workspaces).map(async workspace => {
        const packagePath = path.resolve(workspace.location, 'package.json');
        const pck = JSON.parse(await fs.promises.readFile(packagePath, 'utf8'));
        if (!pck.private) {
            const pckName = `${pck.name}@${pck.version}`;
            const npmViewOutput = await new Promise(
                resolve => cp.exec(`npm view ${pckName} version --json`,
                    (error, stdout, stderr) => {
                        if (error) {
                            console.error(error);
                            resolve('');
                        } else {
                            resolve(stdout.trim());
                        }
                    }
                )
            );
            if (npmViewOutput) {
                console.info(`${pckName}: published`);
            } else {
                console.error(`(${chalk.red('ERR')}) ${pckName}: ${chalk.red('NOT')} published`);
                process.exitCode = 1;
            }
        }
    }));
}