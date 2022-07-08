const client = require("./index");

client.connect(err => {
    client.db("test").collection("vivek").insertOne({ en: "200410116081" })
})