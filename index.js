const fs = require("fs");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.2zirs.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("test").collection("vivek");
client.connect(err => {
    collection.deleteOne({ enrollmentNo: "200410116081" });

});
module.exports = client;