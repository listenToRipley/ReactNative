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

Style will be applied either Inline Styles or StyleSheet objects, both as passed through props.

These are all written in JS which is based on CSS syntax, but is only a subset of CSS features with some language difference.

When using "style=" inside of an element, keep in mind that not all elements support the use of this inline attribute.

You will need to validate the different types of attributes within style that can be used. Import is the values you supply to them. Attributes that ask for numbers will asked for flat numbers without pt or em or px. The value will be converted to pixels for you. You can use specific values, but you will need to wrap them in quotation marks. Generally, this is only used for percentages.

Best practice is to use style sheets objects since this will allow for more reusability and autocomplete elements.

#### Layouts and Flexbox

Layouts are generally created with Flexbox. If works similarly to it's CSS counterpart.

This is about positioning content inside of a container, it is controlled through the style settings applied to that container. Key in mind, you will be using cross axis, (horizontal/ left to right) and the main axis (vertical/ top to bottom). The directions will be column (main axis) or row (cross axis). Column is applied as the default.

Then there are attributes that will allow you to distribute your content within their axis. Such as justify or align. You can also reverse the order with these.

Unlike CSS, you will not need to apply the display of flex since Native already makes the it available, you will need to apply their associated attributes though to see their effects.

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