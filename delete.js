const client = require("./index");
const collection = client.db("test").collection("vivek");

client.connect(err => {
    collection.deleteOne({ en: "200410116081" })
})