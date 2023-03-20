const { ObjectId } = require('fastify-mongodb')
const product = require('../routes/weather')


module.exports = {
    readAllweather: async (mongo) => {
        const collection = mongo.db.collection("daily")
        const result = await collection.find({}).toArray()
        return result
    }
}