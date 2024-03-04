# Learning React Native

Using [React Native - The Practical Guide by Academind by Maximilian Schwarzmüller](https://learning.oreilly.com/videos/react-native/9781789139747/), see the [supported code here](https://github.com/packtpublishing/react-native---the-practical-guide).

## Setup

Make sure to visit [getting started to install required content.](https://reactnative.dev/docs/environment-setup)

Using [Expo CLI](./Notes/README.md/#cli). 

### INSTALL

`npn install -g expo-cli` - install Expo CLI. *might need to include* `sudo`

Enter into the folder you will be working within, run `expo init AppName`;

This will provide you with a screen to select the type of application you want to start with. If you're not sure, start with the top option.

### View Content

You can use your app store on your phone to search of the "Expo App" supported by Expo, download it. 

Open it on your phone and then open your terminal window. 

Use `npm start`, a QR code will open allowing you to view this content through the application.

You can "emulate" different systems through either Android Studios or XCode (mac only), so you can emulate different phone systems for testing.

Inside of Android Studios you can open a "Virtual Device Manager" to build virtual devices for testing, based on a provided list. Best practice is to use default settings and the play to see elements.

Inside of XCode go to preferences -> locations -> command line tools and select a version. Make sure your application has `npm start` running. Then go to Xcode.app, right click and select Show Package Contents -> Application -> Simulator.app, click on it to start emulator. 

Under file, open simulator you can change the type of phone you want to simulate.

You can run multiple simulators at the same time.

[Watch this video for more questions](https://learning.oreilly.com/videos/react-native/9781789139747/9781789139747-video1_8/)

## Table of Contents

 - [Notes](./Notes/README.md)
 
 Lessons:
 
- [RNCourse](./lessons/RNCourse/) 
This is a beginning review of what some functionality of Native looks like via a TODO list.

- [MiniGame](./lessons/MiniGame/README.md)

## Additional Resources

- [Official Documentation](https://reactnative.dev/)

## Credits

The [dice image used in the MiniGame](./lessons/MiniGame/assets/images/diceRoll.jpg), was pulled from [Unsplashed](https://unsplash.com/photos/closeup-photo-of-dices-m4sGYaHYN5o).