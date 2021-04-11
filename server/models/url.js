
const { Schema, model} = require('mongoose'); 


const urlShortenSchema = new Schema({
    originalUrl: String,
    urlCode: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

    
});
  

  

module.exports = model('UrlShortenSchema', urlShortenSchema)