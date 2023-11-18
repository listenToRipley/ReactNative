# Debugging

If there is an error, you should see something in the emulators at the bottom and in the terminal window. Make sure to use both to resolve any issues.

## Terminal

The error messages in the terminal are not always 100% correct, but they will provide hints about possible issues and where they might be located.

There are "stack traces" in the terminal about where the error occurs. Look for a list with the word "in" will include location and "(created by ...)" will link the associated components where the component is used.

Make sure you reference the official documentation for how a component is supposed to be used. This may give you more insight related to the given error message.

### Logs

You can use `console.log()` inside of Native applications and see the output within the terminal. You will be able to pass props or values through this. 

## Emulator

Inside of the emulator messages, click on them to see more details.

You might see "warning", which means the application works, but not as expected.

These messages might not be as detailed as the terminal.

Expo there are additional tools you can use (viewable list by pressing ? in the terminal)

The two that you may get the most use out of:

- `m` - show you the terminal menu in the emulator window

- `j` - debug remotely

## React Native Tools

You can install react dev tools on your application to get there benefit as well.

`sudo npm install -g react-devtools`

This is a stand alone version of these dev tool. 

You can use the tools by running `react-devtools`

You will have a secondary window open on the emulator allowing you to utilize these tools.

You may need to click on "Debug Remote JS" inside you emulator window under the menu options.

If this doesn't work, try to reload the emulation. You should see a lay out of the components inside the window, ("component tree") once it is running.
