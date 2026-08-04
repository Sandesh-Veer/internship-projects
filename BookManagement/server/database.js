const mongoose = require("mongoose");

async function databaseConnection() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI environment variable is not set');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database connected");
  } catch (err) {
    console.error(err);
  }
}

module.exports = databaseConnection;