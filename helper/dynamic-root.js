import { findUpSync } from 'find-up'
import { existsSync } from 'fs';
import { resolve as resolvePath } from 'path'

export function getAppPath(...segments){
    // console.log("segment:", ...segments);
    const regularAppRoot = resolvePath(findUpSync('package.json'), '..')
    // console.log("regularAppRoot:", regularAppRoot);
    const regularPath = resolvePath(regularAppRoot, ...segments)
    // console.log("regularPath:", regularPath);
    if(existsSync(regularPath)){
        return regularPath
    }
}