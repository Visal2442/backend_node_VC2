import bodyParsers from "./body-parsers.js"
import cors from "./cors.js"

export function initCoreMiddlewares(app) {
    app.use(cors)
    app.use(...bodyParsers)
}