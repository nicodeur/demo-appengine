const redis = require('redis')


const ELASTICACHE_HOST = process.env.redisHost
const ELASTICACHE_PORT = process.env.redisPort || 6379
console.log("redis configuration ==> Host: "+ ELASTICACHE_HOST + " , Port : "+ ELASTICACHE_PORT)


const client = redis.createClient({ host: ELASTICACHE_HOST, port: ELASTICACHE_PORT })

//Incase any error pops up, log it
client.on("error", function(err) {
  console.log("Error " + err);
})

module.exports = client