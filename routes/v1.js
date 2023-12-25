const express = require("express")
const router = express.Router()

router.use(`/messages`, require("./v1/messageRoutes"))

module.exports = router
