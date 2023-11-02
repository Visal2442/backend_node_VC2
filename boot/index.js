import { promisify } from "util"

import { openDbConnections } from "../helper/db.js"

export default async function bootApplication(app){
    try{
        await openDbConnections()

        const host = '127.0.0.1'
        const port = 8000
        const promistifiedListen = promisify(app.listen)
        await promistifiedListen.call(app, port, host)
        console.log(`App is listening on ${host} : ${port}`)
    }
    catch(err){
        console.log('Unable to boot', err);
    }
}