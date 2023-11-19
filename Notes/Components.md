# React Native Components

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

## Child Components

Unlike React, with Native you do not need to import react at the top of your file, but you do have to export it as normal.

If you are to use any Native specific components within the child component, you will need to import them just as you did on the parent component and them that child component will need to be imported as well to be displayed.

You can nest a child inside of a fragment as well if you have a element that may not be directly part of the app, such as [Status Bar](#expo-specific)

## Props

Props function the same as they did within React.

Within onChangeText, we had to provide two way binding by using value within an TextInput.

## Interactions

If you want to select items, that are not buttons, you have to provide specific components that will allow this, such as Pressable or Touchable.

`Touchable` has mostly been replaced with `Pressable`.

You will still pass a method within the Component like onClick, but this one is onPress. The function you pass will provide the associated functionality.

### Inputs

There are a number of functionalities that can be preassigned within input fields. One of the most important being you can designate which keyboard should be opened for an interaction. You can do this with the use of `keyboardType`. You can look at the official docs for more details. There will be some functions that are system specific. 

Many of these options will provide a better UX.

### Visuals

Visual effects related to interacts will display based on where they are located. The effects will only be applied to the children elements.

On android, there are specific attributes, but with IOS, you will mostly use style functions to get the desired visual effect.

You will need to get the press state within the function.

## Images

Instead of using src, you will use `source`

You have to import your images to your component by your require function inside of your src. Then you provide the associated path to the image that you have stored ideally in your assets folder.

This is a relative path from where your component is currently located.


## Custom

It is important to review the source code of a given [out of the box component](https://github.com/facebook/react-native/tree/main/packages/react-native/Libraries/Components) to see it's details. 

The important thing to remember about pre-built components is at their core they are the same as any components we can build ourselves. If you have unique functionality you are expecting to provide, a custom component might make sense.
