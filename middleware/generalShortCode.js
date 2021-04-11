
const nanoid = require('nanoid')


/**
 * @param generateShortUrlCode
 * 
 */


module.exports = {
    generate: () => {
        return console.log(nanoid.nanoid(4))
    }
}