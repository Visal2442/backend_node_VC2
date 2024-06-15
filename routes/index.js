import initPropertiesRoutes from './properties.js'
import initWistlistRoutes from './wishlist.js'
import initBookingRoutes from './booking.js'
import initRatingRoutes from './rating.js'
import initProductRoutes from './product.js'

export default function initAppRoute(app){
    app.use('/properties', initPropertiesRoutes())
    app.use('/wishlist', initWistlistRoutes())
    app.use('/booking', initBookingRoutes())
    app.use('/rating', initRatingRoutes())
    app.use('/product', initProductRoutes())
}