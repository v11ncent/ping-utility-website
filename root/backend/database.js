const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vince:S1cWFBHpyXosav6v@ping-data.43eyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(() => {
    const date = new Date();
    console.log(date);
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    // await checkCollection('ping-data')
    client.close();
});

async function checkCollection(db, date) {
    if (!client.db(db).collection(date)) {
        client.db(db).createCollection(date);
    }
}