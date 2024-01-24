const mongoose = require('mongoose');
class DataBase {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect("mongodb://127.0.0.1:27017/TINY_url", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Database is connected");
        })
        .catch((err) => {
            console.error("Error connecting to database:", err);
        });
    }
}
module.exports = new DataBase();
