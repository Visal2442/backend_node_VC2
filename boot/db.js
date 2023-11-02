import Sequelize from 'sequelize'
import config from "../config/index.js"
import { sequelizeConfig } from "../helper/sequelize.js"

const database = {}

// init database 
for ( const dbSettings of buildConfigs()){
    const dbObj = dbSettings.id ? `tenant${dbSettings.id}` : 'core'
    database[dbObj] = new Sequelize(sequelizeConfig(dbSettings))
    // console.log(database);
}

function buildConfigs(){
    const ref = config.database
    const coreDB = { database: ref.core}
    // console.log([ coreDB ]);

    return [ coreDB ]
} 

export default database