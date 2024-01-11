const {mongoose, Schema } = require("mongoose");

const factSchema = new Schema({
    date: { type: Date , default: Date.now},
    userId: String,
    factTitle:String,
    fact: String,
    likes: { type : Array, default:[]},
    dislikes:  { type : Array, default:[]}
})
const factModel = mongoose.model('posts',factSchema)

module.exports = factModel;