const env = process.env.staging

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const envsGAE = {
    GAE_INSTANCE : process.env.GAE_INSTANCE,
    GAE_MEMORY_MB : process.env.GAE_MEMORY_MB,
    GAE_SERVICE : process.env.GAE_SERVICE,
    GAE_VERSION : process.env.GAE_VERSION,
    GOOGLE_CLOUD_PROJECT : process.env.GOOGLE_CLOUD_PROJECT,
    NODE_ENV : process.env.NODE_ENV,
    PORT : process.env.PORT,
    custom : {
        redisHost : process.env.redisHost,
        redisPort : process.env.redisPort,
        staging : process.env.staging
    },
    nodeVersion : process.version
}

const initEndPoint = (app) => {

    app.get('/' + env + '/wait/gae/info', async (req, res) => {

        console.info("wait 2s")
        await wait(2000);
        
        res.status(200).send({
            data: {envInfo : envsGAE, wait : true }
        })
    })

    app.get('/' + env + '/gae/info', async (req, res) => {

        console.info(`${req.method} ${req.originalUrl}`) 
        let requestInfo = {
            originalUrl : req.originalUrl,
            method : req.method,
            host : req.host,
            userAgent : req.get('User-Agent')
        }

        res.status(200).send({
            data: {envInfo : envsGAE, requestInfo : requestInfo }
        })
    });

}

module.exports = initEndPoint
