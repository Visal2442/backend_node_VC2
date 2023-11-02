import cors from 'cors'

const ALLOWED_REQUEST_HEADERS =[
    'Content-Type',
    'Accept',
    'token',
    'Authorization'
]

export default cors({
    origin:'*',
    allowedHeaders:ALLOWED_REQUEST_HEADERS
})