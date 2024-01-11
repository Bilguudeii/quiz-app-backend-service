const express = require('express')
const router = require('./routes/routes.js')
const factRoute = require('./routes/factRoutes.js')
const cors = require('cors')
const connect = require("./database/db.js")

const app = express()
const port = 8080


app.use(express.json());
app.use(cors());
connect();

app.use(router)
app.use(factRoute)


app.listen(port, () => {
    console.log(`Kindly be advised that your backend server has been successfully initiated and is presently operational on port ${port}.`)
})
