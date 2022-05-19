import { BuildManager } from "./build-manager";

export interface BuildOptions {}

export default async (ctx: any, options: BuildOptions) => {
    try {
        ctx.options = options;
        await new BuildManager(ctx).build();
    } catch (error) {
        
    }
}
