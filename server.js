import bootApplication  from "./boot/index.js"
import initAppRoute from "./routes/index.js"
import app from './app.js'

bootApplication(app)
initAppRoute(app)
