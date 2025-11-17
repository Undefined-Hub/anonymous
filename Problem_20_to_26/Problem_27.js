const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
const collectionName = 'users';

async function insertRecords() {
  const client = new MongoClient(url);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert single record
    const singleRecord = { name: 'John', email: 'john@example.com', age: 25 };
    const resultSingle = await collection.insertOne(singleRecord);
    console.log('Inserted single record:', resultSingle.insertedId);

    // Insert multiple records
    const multipleRecords = [
      { name: 'Alice', email: 'alice@example.com', age: 30 },
      { name: 'Bob', email: 'bob@example.com', age: 28 },
      { name: 'Charlie', email: 'charlie@example.com', age: 35 }
    ];
    const resultMultiple = await collection.insertMany(multipleRecords);
    console.log('Inserted multiple records:', resultMultiple.insertedIds);

    // Display all records
    const allRecords = await collection.find({}).toArray();
    console.log('All records:', allRecords);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

insertRecords();
