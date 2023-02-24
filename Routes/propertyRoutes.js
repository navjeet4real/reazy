const router = require('express').Router();
const propertyController = require("../controllers/propertyController");

router.post('/create-property', propertyController.createProperty)
router.post('/property-information', propertyController.propertyInformation)


module.exports = router;