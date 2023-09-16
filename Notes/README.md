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

HTML elements will not work in Native code.

You can see the native components you can use [here](https://reactnative.dev/docs/components-and-apis). They are known as your "core components".

Each the core components have a core purpose, the content inside of that component must support the function of the element. This is because Native is very strict. The content of the component should always be able to display that content. If is it cannot or the underlying content is not supported by the component, you will get an error.

Example: Text must live inside of a Text component.

Each of these core components must be imported.

You will use these core components to build your own custom components.

### Styling Components

There is no CSS in Native.

Style will be applied either Inline Styles or StyleSheet objects.

These are all written in JS which is based on CSS syntax, but is only a subset of these features.

## Logic

The JS code logic is not compiles the same way as Native components. There is actually a thread that is hosted by Native within the app the allows you the access this logic. The app will teach to the logic through a "translation bridge" provided by Native.

## CLI

Allow to get you application up to the app store.

_Expo CLI vs Native CLI_

[*Expo*](https://docs.expo.dev/) is a free third party service. There is a pay option. 

Give you an "managed app development", is convenient and provide great functionality. 

It can be left at any time.

*Native* is provided first and is provided by Native directly and is supported by them.

Is bare-hones deployment and requires more set up.

It is less convenient features.

Is easier to integrate with native source code, (Java, Objective-C, Kotlin or Swift).

*Both can and should be used together.*

## Glossary

## Questions

Is there a CSS that works best with Native?

Is Native almost just a compile time specific system to enable mobile access?