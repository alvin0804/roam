export interface Settings {
    modeCommands?: { [key: string]: string[] };
    serveCommand?: string;
    compileCommands?: string[];
    banner?: string;
}

export const DEFAULT_SETTINGS = {
    modeCommands: {
        local: ['serve'],
        remote: ['build', 'deploy', 'info']
    },
    serveCommand: 'serve',
    compileCommands: ['serve', 'build']
}