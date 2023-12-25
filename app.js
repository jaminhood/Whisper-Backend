require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const path = require("path")
const connectDB = require("./config/dbConn")
const { logger } = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")

connectDB()

app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())

app.use("/", express.static(path.join(__dirname, "public")))
app.use("/", require("./routes/rootRoutes"))
app.use("/messages", require("./routes/messageRoutes"))
app.use("*", require("./routes/notFoundRoute"))

app.use(errorHandler)

module.exports = app
