import express from 'express'
import dotenv from 'dotenv'
import { initCoreMiddlewares } from '../middleware/index.js'

export async function createApp(){
    dotenv.config()
    const app = express()

    initCoreMiddlewares(app)
    return app
}

export default createApp