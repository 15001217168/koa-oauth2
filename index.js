const OAuth = require('./lib/oauth');

module.exports = function(options, app) {
    let oauth = new OAuth();
    app.use(oauth.auth);
};