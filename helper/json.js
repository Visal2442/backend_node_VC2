import { readFileSync } from 'node:fs'

export function loadJSON(path){
    return JSON.parse(readFileSync(path, { encoding: 'utf-8' }))
}