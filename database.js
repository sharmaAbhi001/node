const { MongoClient} = require("mongodb");

const uri = "mongodb+srv://shaileshsharma9130:Abhi%402690@namsteduniya.hn8di.mongodb.net/";


const client = new MongoClient(uri);

// db name 
const dbName = "HelloWorld";

async function main (){
    // user connect method to connect server 
    await client.connect();
    console.log("connect successfully to server ");
    const db = client.db(dbName);
    const collection = db.collection('User');

    // INSERT DATA 

    // const data = {
    //     firstName:"Bunty",
    //     lastName:"Sharma",
    //     city:"GKP",
    //     MOB:"8896960609"
    // }
      
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);



    //find 
    const findResult = await collection.find({}).toArray();
       console.log('Found documents =>', findResult);


     
    return 'done.';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());


