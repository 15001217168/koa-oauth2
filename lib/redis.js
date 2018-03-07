const conf = require('../conf/conf');
const redis = require('redis');

class Redis {
    constructor() {
        this._conf = conf.redis[global.redis_env];
        this._client = redis.createClient(this._conf.port, this._conf.host);
        this._client.on('error', (err) => {
            console.log(err);
        });
        this._client.auth(this._conf.pwd);
    }
    find(id) {
        this._client.select();
    }
}