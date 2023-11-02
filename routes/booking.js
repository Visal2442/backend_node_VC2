import { Router } from "express"
import bookingService from '../services/bookings.js'

export default function initRoutes(){
    const router = Router()
    router.get('/', bookingService.getAll)
    router.post('/', bookingService.create)
    return router
}