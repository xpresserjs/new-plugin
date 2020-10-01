/**
 * Plugin Functions
 *
 * NOTE: set `use_index` to true in `use.json` to enable this file.
 */
module.exports = {

    /**
     * Runs before the `$.on.boot` event
     * @param plugin
     */
    run(plugin) {

        /**
         * Add on boot event to current project.
         */
        $.on.serverBooted(next => {

            $.logInfo(`Hello 👋 from run() @ index.js in {${plugin.namespace}}`)

            return next()
        });

    }
}