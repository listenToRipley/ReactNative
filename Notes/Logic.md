# Logic

The JS code logic is not compiles the same way as Native components. There is actually a thread that is hosted by Native within the app the allows you the access this logic. The app will teach to the logic through a "translation bridge" provided by Native.

Handlers and created functions will work the same as they are written in JS.

*important* - values that are typed into the keypad will always be a string regardless of what is written.

## Built in functions

There are built in functions that Native does not support since the functionality within the hardware itself are different. EG there is no onClick, there is onPress instead.

## State

You can handle state using React's useState hooks.