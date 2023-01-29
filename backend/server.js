const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose

const servicesScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        information: {
            type: String,
            required: true
        }
    }
    , { timestamps: true })

mongoose.set("strictQuery", false)

const Services = mongoose.model("services", servicesScheme)
const PORT = process.env.PORT
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD)

mongoose.connect(DB, (err) => {
    if (!err) {
        console.log("Connected")
        app.listen(PORT, () => {
            console.log(`Port:${PORT}`)
        })
    }
    else {
        console.log(err)
    }
})
app.get("/services", (req, res) => {
    Services.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(200).json({ message: err })
        }
    })
})
app.get("/services/:id", (req, res) => {
    const { id } = req.params;
    Services.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
            }
            else {
                res.status(404).json({ message: "not found" })
            }
        }
        else {
            res.status(200).json({ message: err })
        }
    })
})

app.post("/services", async (req, res) => {
    const service = req.body
    try {
        await Services.create(service)
        res.status(200).json({ message: "jsdvsv" })
    } catch (error) {
        console.log(error)
    }
})


app.delete("/services/:id", (req, res) => {
    const { id } = req.params;
    Services.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
})

