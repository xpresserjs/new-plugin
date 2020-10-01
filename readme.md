# Xpresser Plugin Template
A quick boilerplate for you to get your first/next xpresser plugin started quickly!

Xpresser sees plugins as an opportunity given to users to extend xpresser as much as they like.
Meaning if you want to make break your project into modules, or you want to create something nice that anyone using xpresser can plug up to then a plugin is what you need.


## Setup
Clone/Download this repo into your project maybe **plugins** folder, then put the path in your **plugins.json** file.
```javascript
[
   // ... plugins
   "base://plugins/new-plugin"
]   
```

Once this has been added your boot log will show this below if you have **plugin logs** enabled.
```sh
✔✔ Using Plugin --> {@xpresser/new-plugin}
=> Hello 👋 from run() @ index.js in {@xpresser/new-plugin}
```
**Note:** The second log may not show immediately after the first like in the example above.
The action that calls the second log is an `$.on.boot` event, meaning if you have other events they may log before it.


## Route
A route was added to show the basic example of a plugin with routes. visit `http://your_url/new-plugin`. 
You can also run `xjs routes` to see the route registered.

## Structure.
The structure of this plugin is expected to be followed in order to enable a good community plugin understanding.


## Plugin Documentation
learn how to create your plugin, click here: [xpresserjs.com](https://xpresserjs.com/plugins/create)