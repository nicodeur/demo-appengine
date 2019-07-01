const cache = require('./utils/cacheService')

const healthEndPoint = (app) => {

    /**
    * @swagger
    * /user-info/health:
    *    get:
    *      description: List all keys StoreList and  USER
    */

    app.get('/health', async (req, res) => {

        res.status(200).send(
            { "live": true }
        )
    });


    /**
    * @swagger
    * /user-info/health:
    *    get:
    *      description: List all keys StoreList and  USER
    */

    app.get('/ready', async (req, res) => {

        let cacheReady = false

        try {
            cacheReady = await cache.getDataCache("demo")
        } catch (error) {
            res.status(500).send(
                { "error": error }
            )
        }

        if ( cacheReady == true) {
            res.status(200).send(
                { "ready": true }
            )
        } else {
            res.status(500).send(
                { "ready": false }
            )
        }
        

    });

}

module.exports = healthEndPoint