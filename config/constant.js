

const config = {
    PORT: 8000 || process.env.PORT, 
    MONGODBURL:  "mongodb://localhost/url-shortner", 
    ERRORURL: "mongodb://localhost:27017/error", 
    MONGODBOPTION: {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    }
}   




module.exports = config; 