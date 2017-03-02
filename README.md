# A simple IOS React Native App using Redux for fetching images from 500px.

This is a [post](http://welllin.net/make-a-react-native-app-using-redux/) tutorial for my personal blog website

# Getting Started

Clone the project and get it running:

* iOS

```
npm install
cd ios
react-native run-ios
```

* Android

```
npm install
react-native run-android
```

Note: You might encouter the following error:
"SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable."

It is fine since it is looking for the location for your android sdk and the location will be different from each computer.
You need to create a file named, local.properties within you android directory, pointing to your android sdk.

Eg.
`sdk.dir=/usr/local/opt/android-sdk`
(local.properties)
