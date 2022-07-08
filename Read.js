const client = require("./index");
const collection = client.db("test").collection("vivek");

client.connect(err => {
    collection.find().toArray((err, res) => {
        if (err) console.log(err.errmsg);
        else {
            console.log(res);
            res.forEach((data) => {
                console.log("ID : " + data._id.toJSON() + " Enrollment " + data.en);
            })
        }
    })
})