import { resolve as resolvePath } from 'path'
import { getAppPath } from '../helper/dynamic-root.js'
import { loadJSON } from '../helper/json.js'
import { existsSync } from 'fs'

const appConfigPath = getAppPath('config')
const config = loadConfig()

function loadConfig(){
    const configPath= resolvePath(appConfigPath, 'config.json')
    if(!existsSync(configPath)){
        throw new TypeError(`Cannot find configuration at ${configPath}`)
    }
    return loadJSON(configPath)
}

export default config