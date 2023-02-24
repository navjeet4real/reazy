const router = require('express').Router();
const authRoute = require('./authRoutes');
const propertyRoute = require('./propertyRoutes')
// const userRoute = require('./userRoutes')

router.use('/auth', authRoute)
router.use('/property', propertyRoute)

module.exports = router;