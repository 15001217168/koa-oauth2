const OAuth = require('./lib/oauth');

global.redis_env = process.env.node_env === 'development' ? 'dev' : 'product';

module.exports = function(options, app) {
    let oauth = new OAuth();
    app.use(oauth.auth);
};