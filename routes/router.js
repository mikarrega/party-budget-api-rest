const router = require("express").Router()

//services router
const serviceRouter = require("./services")

router.use("/", serviceRouter)


//parties router
const partyRouter = require("./parties")

router.use("/", partyRouter)

module.exports = router