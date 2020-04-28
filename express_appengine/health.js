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
        res.status(200).send(
            { "ready": true }
        )
    });

}

module.exports = healthEndPoint
