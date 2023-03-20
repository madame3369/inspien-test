'use strict'


const { readAllweather } = require('../../model')

module.exports = async function(app, opts) {
    app.get('/', async function(request, reply){
        const result = await readAllweather(this.mongo)
        if(result === []){
            reply
                .code(404)
                .header('Content-Type', 'application/json')
                .send("error: Not Found")
        }
        else{
            reply
                .code(200)
                .header('Content-Tyep', 'application/json')
                .send(result)
        }
        }
)}