
const homepageLink = require('../controllers/homepageLink'); 




module.exports = app => {
    app.post('/api', homepageLink.createShortLink);  //posting data to the database 
    app.get('/api/url', homepageLink.fecthing);   //fetching all urls
    app.get('/api/:url', homepageLink.fecthingSingleData);  //fetching single data
}
