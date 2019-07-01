const cache = require('./dktcache')

const getDataCache = (key) => {

    return new Promise((resolve, reject) => {

        cache.get('' + key, (err, json) => {

            if (err) {
                console.log(err)
                resolve(err)
            }

            if (json !== null) {
                console.log("Key " + key + " found in cache ")
                resolve(JSON.parse(json))

            } else {
                resolve(err)
            }

        })

    })
}


module.exports = { getDataCache }
