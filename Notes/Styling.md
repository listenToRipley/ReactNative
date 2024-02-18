# Styling Components

There is no CSS in Native. *STYLES DO NOT CASCADE IN NATIVE*, meaning there is no style inheritance.

Style will be applied either Inline Styles or StyleSheet objects, both as passed through props.

If there is an over all styling element that should be applied across your application, you can add it to your app.json under expo.

These are all written in JS which is based on CSS syntax, but is only a subset of CSS features with some language difference.

When using "style=" inside of an element, keep in mind that not all elements support the use of this inline attribute.

You will need to validate the different types of attributes within style that can be used. Import is the values you supply to them. Attributes that ask for numbers will asked for flat numbers without pt or em or px. The value will be converted to pixels for you. You can use specific values, but you will need to wrap them in quotation marks. Generally, this is only used for percentages.

Best practice is to use style sheets objects since this will allow for more reusability and autocomplete elements.

Button does not support styling.

To apply something to all content, then it should be applied at the either the `app.json` level or `App.js` file under it's own styles. 

## System Specific

Most styling elements can be translated across different systems, but there are some that will be system specific, so you will need to use multiple properties to get the same effect across different system. If any of the sections a subsection for a specified system, then pay close attention to those requirements when crafting your styling.

## Expo Specific

You can modify the status bar with the Status Bar.

## Views & Scrolling

The window on a screen through View does now allow "scrolling". There will not be automated functionality that allows you to use your finger to go down the screen. You must tell your application to allow the window to shift. This will be through "ScrollView".

To use this, the ScrollView should be nested inside a regular view to restrict the sizing and any styling related to that content should be applied to the parent View. To see specifics on options on ScrollView, [see the official documentation](https://reactnative.dev/docs/scrollview). 

ScrollView will always rending the whole element. This can cause some issues for large items. Recommended you use something with a fixed size.

If you are trying to scroll through a list, or items that need dynamic for large elements, a better option would be FlatList. This will render items that are current visible, making it take up less space.

With FlatList, you basically build in your map function directly to it. You provide a prop of data, that being your array and then renderItem which tells how your want each item to be returned. Since the list we provide becomes an object with metadata, this is important to realize for the renderItem. You will have some automated language passed through the object, such as the index and "item" being the content, so you will need to you key accessing to get that information and display it correctly.

Best practice is to create object lists and include a key to be generated and then access it in each item inside the renderItem. There  a specific ways you can extract a key always from your item, [make sure to look over the official documentation for FlatLists](https://reactnative.dev/docs/flatlist).

## Targeting Different Platforms

There are some styling elements that will look different on different systems. This has to do with how the information is translated to their associated systems. 

This can mean the way you nest elements will effect how they are displayed. Example: iOS doesn't support border on Text, but it will on view. Best practice then states we should nest our Text inside of a parent View and apply our styles to that parent View.

## Layouts and Flexbox

Layouts are generally created with Flexbox. If works similarly to it's CSS counterpart. 

*Flex cannot be turned off*

This is about positioning content inside of a container, it is controlled through the style settings applied to that container. Key in mind, you will be using cross axis, (horizontal/ left to right) and the main axis (vertical/ top to bottom). The directions will be column (main axis) or row (cross axis). Column is applied as the default.

Then there are attributes that will allow you to distribute your content within their axis. Such as justify or align. You can also reverse the order with these.

Unlike CSS, you will not need to apply the display of flex since Native already makes the it available, you will need to apply their associated attributes though to see their effects. 

If you made changes to the parent element style, then that will be applied to all child elements. Such as:

If you apply row to the main parent element through, this will change all child element default.

The width and height will also be applied to child elements unless changes within the child element.

flex is applied directly to elements within a flex element. It will work similar to grid spacing, but will apply to the total space of the parent element for the main axis. Think of the value of the flex value a segment of the total space.

`flex: 1` will provide the related style to be applied to the whole screen or parent container.

## Structure

*You can apply multiple styles to one component*. You do  this by using an array with the different styles listed.

Keep in mind that the order in which you are trying to apply different styles and effects will change based on the order which the attributes are applied to the different component since there is not inheritance within these components.

For example if you try to apply a color to parent component, then the text component will remain the default color. You will also will not see the desired changes on nested components.

If you look at [the primary button](../lessons//MiniGame/components/PrimaryButton.js) you can see now we hand to create multiple containers to get the desired styling and interactions since the ripple effect had to be applied directly to the inner pressable element.

## Shadowing

Box shadow does not exist in Native.

### Android 

You use [`elevation`](https://reactnative.dev/docs/view-style-props#elevation-android). The higher the number, the deeper the shadow will be.

### iOS

You will use [`shadow`](https://reactnative.dev/docs/shadow-props) to apply the same effect. There are multiple shadow properties. 

- `shadowColor`
- `shadowOpacity`
- `shadowRadius`
- `shadowOffset`

These together create the same functionality as a shadow box in standard CSS.

## Images

Images will have a special styling option called `imageStyle`, which has a higher precedence than other styles provided. You will still created the CSS within styles, and best practice dictates this should be placed at the bottom of the CSS content.

### Background Images

You can include a background image on your app as well by using the `ImageBackground` element provided by Native. Make sure it is the parent of the element you want to see the image on.

## Gradients 

Expo itself provide an extra component to provide `LinearGradient`, via the `expo install expo-linear-gradient`.

[Review the official doc here.](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

## Constants

Since we cannot use CSS, in order to share values across your application, you can create file variables through objects that can be imported into other folders and use those values. You will export the object and import into the component you want to use it on and use object keys.

Example: [Colors](../lessons/MiniGame/constants/colors.js)