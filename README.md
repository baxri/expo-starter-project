# React Native Expo Project

Welcome to the React Native Expo project! This project is built using Expo, a framework for building cross-platform applications using React Native. Follow the steps below to run the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally using `npm install -g expo-cli`)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-native-expo-project.git
   cd react-native-expo-project

   ```

2. **Install Dependencies:**

```bash
yarn install
```

3. **Start the Development Server:**

```bash
yarn ios
```

3. **Login on EXPO:**

```bash
eas login
```

3. **Eas configure**

```bash
eas build:configure
```

3. **Make eas build for IOS:**

```bash
eas build --platform ios
```

You should have this info procided in eas file

```
  "submit": {
    "production": {
      "ios": {
        "appleId": "",
        "ascAppId": "", // in app information
        "appleTeamId": "" // Can be found in membership
      }
    }
  }
```

4. **Upload build on Testflight:**

```bash
eas submit -p ios --latest
```

```
you need to provide bunle identifer and then create app in app store connect
```
