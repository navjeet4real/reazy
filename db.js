const mongoose = require('mongoose');

// Connection with DB.
module.exports.connectDB = (connectionURL = process.env.CONNECTION_URL) => mongoose.connect(
    connectionURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;
        console.log("Database connected");
    },
)