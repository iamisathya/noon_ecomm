This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

# Screens

- HomeScreen
- SearchScreen
- ProductDetailsScreen
- CartScreen
- PaymentScreen
- OrderConfirmationScreen

# Store

- productsSlice
- bannersSlice
- searchSlice
- cartSlice
- paymentSlice

# Mock API

- products
- banners
- search
- cart
- payment

# Libraries

- react-native-snap-carousel
- react-redux
- @reduxjs/toolkit
- @react-navigation/native
- @react-navigation/native-stack
- react-native-safe-area-context
- react-native-gesture-handler
- react-native-safe-area-context

# Features

- Dashboard
- Search
- Cart
- Payment
- Order Confirmation
- Product Details
- Product List

# Troubleshooting

- If getting error about style from `react-native-snap-carousel`, try to clean the cache and rebuild the project. apply patch from [here](<[text](https://github.com/meliorence/react-native-snap-carousel/issues/1017)>)
- clean build cache

```sh
npm start -- --reset-cache
```
