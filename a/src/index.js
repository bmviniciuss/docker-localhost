const express = require('express')

const app = express()

app.get("/", (req, res) => {
    return res.status(200).json({
        service: "A",
        date: new Date().toISOString()
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server A listening on port ${PORT}`)
})