const express = require('express')
const axios = require('axios')

const app = express()

app.get("/", async (req, res) => {
    const serviceAHost = process.env.SERVICE_A_HOST
    console.log("serviceAHost: ", serviceAHost)
    console.log("serviceAHost: ", "localhost:5000")
    const {data} = await axios.get(serviceAHost).catch((err) => {
        console.error(err?.message)
        return { data: "ERROR" }
    })


    return res.status(200).json({
        service: "B",
        date: new Date().toISOString(),
        dataFromA: data
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server B a listening on port ${PORT}`)
})