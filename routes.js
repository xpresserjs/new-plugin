/**
 * --- Import config collection.
 * --- Require xpresser router
 * --- initialise router with namespace as plugin namespace.
 */
const config = require('./plugin-config');
const XpresserRouter = require('@xpresser/router');
const router = new XpresserRouter(config.get('namespace'));


/**
 * Check if {routes.enabled===true}
 * This gives the user option to enable or disable this plugin's routes.
 */
if (config.get('routes.enabled', false)) {


    /**
     * Routes can be defined here.
     * Controllers can only point to plugin's controller files.
     */
    router.get('/new-plugin', 'Main@index').name('new-plugin')


}


// Export XpresserRouter
module.exports = router;