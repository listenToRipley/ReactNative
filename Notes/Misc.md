# Misc

These items don't fall into a specific category for notes, so for now, they will live here.

## Methods

### Alerts

Alerts within Native are actually objects that contain methods that allow you to pass content to display.

They are similar to a higher order function in that way.

Some of the common ones are 

- `Alert.alert()`
- `Alert.prompt()`


## Navigation

One option is you can use conditional on the App.js to determine which screen should currently be rendered.

## Loading Screen

Use the "splash" (background images), with a loading icon while you are waiting for specific content to fetched. 

Use the `expo install expo-app-loading`, [detail here](https://www.npmjs.com/package/expo-app-loading).