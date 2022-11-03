// connect mongoDB
// connect to mongodb
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWD}@music-social-media.3m82ebm.mongodb.net/?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB Connected");
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = connectDB;