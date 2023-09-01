const mongoose = require('mongoose');

// MongoDB connection string (local)
//mongoose.connect()

// Connection parameters
const connectParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect("mongodb+srv://hazzu4789:Ali29@cluster0.izpthmd.mongodb.net/?retryWrites=true&w=majority", connectParams)
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });