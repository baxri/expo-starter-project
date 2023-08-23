import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { createStore, Store } from "Services/Store";
import { StoreContext } from "storeon/react";

import Navigation from "Navigation";

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

export default function App() {
  const [rehydrated, setRehydrated] = useState(false);
  const [store, setStore] = useState<Store>();

  useEffect(() => {
    async function initialize() {
      const onRehydrated = () => {
        setRehydrated(true);
        // SplashScreen.hide()
      };

      const nextStore = createStore({ onRehydrated });
      setStore(nextStore);
    }

    initialize().catch(() => {
      // showError(error.message || 'Initialization error')
    });
  }, []);

  if (!store || !rehydrated) {
    return null;
  }

  return (
    <StoreContext.Provider value={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GestureHandlerRootView style={GestureHandlerRootViewStyle}>
          <Navigation />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </StoreContext.Provider>
  );
}

const GestureHandlerRootViewStyle = { flex: 1 };
