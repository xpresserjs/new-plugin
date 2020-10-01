const config = require('../config');
const MainController = {
    name: 'MainController',

    /**
     * Main index action
     * @param {Xpresser.Http} http
     */
    index(http){
        return {
            url: http.req.url,
            route: http.route,
            message: `This route is registered by the {${config.get('namespace')}}  plugin.`
        }
    }
}

module.exports = MainController;