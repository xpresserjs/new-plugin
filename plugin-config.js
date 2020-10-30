/**
 * --- Import plugin namespace.
 * --- Import plugin pluginConfig object.
 * --- Convert pluginConfig to collection.
 */
const {namespace} = require('./use.json');
const importableConfig = require('./exports/config');
const pluginConfig = $.objectCollection(importableConfig);

// Add namespace to plugin pluginConfig (optional but recommended)
pluginConfig.set('namespace', namespace);

/**
 * Merge with user defined configurations.
 * Any exports associated with your plugin should be configurable @ {`plugins.your-plugin-name`} pluginConfig
 */
pluginConfig.merge(
    $.config.get(`plugins[${namespace}]`)
)

// Export pluginConfig as a collection.
module.exports = pluginConfig;