# Notes

What is React Native? 

A way to create Mobile Apps for iOS or Android that uses similar development process as React.js. The major difference is using native UI element by using special components, this also enables native platforms with APIs exposer to JS.

The code will be rewritten in React but using React Native component and APIs to create a React Native application.

From this point forward, if you see reference to "Native", just assume it is referring React Native.

## React Native Components

The Components compile for the specific systems, but have generalize terms that will then allow them to compile correctly target the correct syntax for the related element. 

| Native JSX   | Web         | Android        | iOS          |
| :---         |    :----:   |    :----:      |    :----:    |
| `<View>`     | `<div>`     | `android.View` |  `UIView`    |
| `<TextInput>`| `<input>`   |  `EditText`    | `UITextField`|

## Logic

The JS code logic is not compiles the same way as Native components. There is actually a thread that is hosted by Native within the app the allows you the access this logic. The app will teach to the logic through a "translation bridge" provided by Native.

## Glossary

## Questions

Is there a CSS that works best with Native?

Is Native almost just a compile time specific system to enable mobile access?