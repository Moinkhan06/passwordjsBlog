const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://precticehtml:xL2EZPk3DnAUoU47@cluster0.k53aulw.mongodb.net/Blog");
    console.log("Data base is connected");
}

module.exports = db;

//mongodb+srv://precticehtml:xL2EZPk3DnAUoU47@cluster0.k53aulw.mongodb.net/