const mongoose = require("mongoose");

async function databaseConnection() {
  try {
    await mongoose.connect(
      "mongodb://sandeshveer44_db_user:sandesh123@ac-fbhztjl-shard-00-00.gmqiscl.mongodb.net:27017,ac-fbhztjl-shard-00-01.gmqiscl.mongodb.net:27017,ac-fbhztjl-shard-00-02.gmqiscl.mongodb.net:27017/?ssl=true&replicaSet=atlas-1026bx-shard-0&authSource=admin&appName=Cluster0"
    );

    console.log("✅ Database connected");
  } catch (err) {
    console.error(err);
  }
}

module.exports = databaseConnection;