const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://127.0.0.1:27017';


// MongoClient.connect(url, function(err, client) {
//
//     const db = client.db("js_208");

    // db.collection('developer').insertOne({
    //     "name": "alireza",
    //     "family": "kalantari"
    // }, (err, data) => {
    //     console.log(data);
    // });

    // db.collection('developer').find({name: "ali"}).toArray().then(
    //     (docs) => {
    //         console.log(docs);
    //     }
    // )
// });



async function f() {
    var client = await MongoClient.connect(url);
    var db = await client.db("js_208");
    var developers = await db.collection('developer').find().toArray();

    req.json(developers)
}

f();























