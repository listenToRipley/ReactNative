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

### Child Components

Unlike React, with Native you do not need to import react at the top of your file, but you do have to export it as normal.

If you are to use any Native specific components within the child component, you will need to import them just as you did on the parent component and them that child component will need to be imported as well to be displayed.

#### Props

Props function the same as they did within React.

Within onChangeText, we had to provide two way binding by using value within an TextInput.

#### Interactions

If you want to select items, that are not buttons, you have to provide specific components that will allow this, such as Pressable.

### Styling Components

There is no CSS in Native. *STYLES DO NOT CASCADE IN NATIVE*, meaning there is no style inheritance.

Style will be applied either Inline Styles or StyleSheet objects, both as passed through props.

These are all written in JS which is based on CSS syntax, but is only a subset of CSS features with some language difference.

When using "style=" inside of an element, keep in mind that not all elements support the use of this inline attribute.

You will need to validate the different types of attributes within style that can be used. Import is the values you supply to them. Attributes that ask for numbers will asked for flat numbers without pt or em or px. The value will be converted to pixels for you. You can use specific values, but you will need to wrap them in quotation marks. Generally, this is only used for percentages.

Best practice is to use style sheets objects since this will allow for more reusability and autocomplete elements.

Button does not support styling.

#### Views & Scrolling

The window on a screen through View does now allow "scrolling". There will not be automated functionality that allows you to use your finger to go down the screen. You must tell your application to allow the window to shift. This will be through "ScrollView".

To use this, the ScrollView should be nested inside a regular view to restrict the sizing and any styling related to that content should be applied to the parent View. To see specifics on options on ScrollView, [see the official documentation](https://reactnative.dev/docs/scrollview). 

ScrollView will always rending the whole element. This can cause some issues for large items. Recommended you use something with a fixed size.

If you are trying to scroll through a list, or items that need dynamic for large elements, a better option would be FlatList. This will render items that are current visible, making it take up less space.

With FlatList, you basically build in your map function directly to it. You provide a prop of data, that being your array and then renderItem which tells how your want each item to be returned. Since the list we provide becomes an object with metadata, this is important to realize for the renderItem. You will have some automated language passed through the object, such as the index and "item" being the content, so you will need to you key accessing to get that information and display it correctly.

Best practice is to create object lists and include a key to be generated and then access it in each item inside the renderItem. There  a specific ways you can extract a key always from your item, [make sure to look over the official documentation for FlatLists](https://reactnative.dev/docs/flatlist).

#### Targeting Different Platforms

There are some styling elements that will look different on different systems. This has to do with how the information is translated to their associated systems. 

This can mean the way you nest elements will effect how they are displayed. Example: iOS doesn't support border on Text, but it will on view. Best practice then states we should nest our Text inside of a parent View and apply our styles to that parent View.

#### Layouts and Flexbox

Layouts are generally created with Flexbox. If works similarly to it's CSS counterpart. 

*Flex cannot be turned off*

This is about positioning content inside of a container, it is controlled through the style settings applied to that container. Key in mind, you will be using cross axis, (horizontal/ left to right) and the main axis (vertical/ top to bottom). The directions will be column (main axis) or row (cross axis). Column is applied as the default.

Then there are attributes that will allow you to distribute your content within their axis. Such as justify or align. You can also reverse the order with these.

Unlike CSS, you will not need to apply the display of flex since Native already makes the it available, you will need to apply their associated attributes though to see their effects. 

If you made changes to the parent element style, then that will be applied to all child elements. Such as:

If you apply row to the main parent element through, this will change all child element default.

The width and height will also be applied to child elements unless changes within the child element.

flex is applied directly to elements within a flex element. It will work similar to grid spacing, but will apply to the total space of the parent element for the main axis. Think of the value of the flex value a segment of the total space.

## Logic

The JS code logic is not compiles the same way as Native components. There is actually a thread that is hosted by Native within the app the allows you the access this logic. The app will teach to the logic through a "translation bridge" provided by Native.

Handlers and created functions will work the same as they are written in JS.

### Built in functions

There are built in functions that Native does not support since the functionality within the hardware itself are different. EG there is no onClick, there is onPress instead.

### State

You can handle state using React's useState hooks.

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