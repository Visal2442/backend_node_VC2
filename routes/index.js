import initPropertiesRoutes from './properties.js'
import initWistlistRoutes from './wishlist.js'
import initBookingRoutes from './booking.js'

export default function initAppRoute(app){
    app.use('/properties', initPropertiesRoutes())
    app.use('/wishlist', initWistlistRoutes())
    app.use('/booking', initBookingRoutes())
}