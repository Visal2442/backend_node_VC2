import express from 'express'
import { initCoreMiddlewares } from '../middleware/index.js'

export async function createApp(){
    const app = express()

    initCoreMiddlewares(app)
    return app
}

export default createApp