const OAuth = require('oauth');

class AuthorizationCode extends OAuth {
    constructor(optinons) {
        super(optinons);
    }
    get parm() {
        return {
            response_type: '',
            client_id: '',
            redirect_uri: '',
            scope: '',
            state: ''
        };
    }
}