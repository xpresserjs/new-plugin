/**
 * --- Import plugin namespace.
 * --- Import plugin config object.
 * --- Convert config to collection.
 */
const {namespace} = require('./use.json');
const config = require('./configs/config');
const pluginConfig = $.objectCollection(config);

// Add namespace to plugin config
pluginConfig.set('namespace', namespace);

// Merge with user defined configurations
pluginConfig.merge(
    $.$config.get(`plugins[${namespace}]`)
)

// Export config as a collection.
module.exports = pluginConfig;