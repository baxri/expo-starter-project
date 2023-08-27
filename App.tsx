import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StoreContext } from 'storeon/react';

import { createStore, Store } from 'Services/Store';

import Navigation from 'Navigation';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'shadow',
  'Node of type',
]);

export default function App() {
  const [rehydrated, setRehydrated] = useState(false);
  const [store, setStore] = useState<Store>();
  const [queryClient, setQueryClient] = useState<QueryClient>();

  useEffect(() => {
    async function initialize() {
      const onRehydrated = () => {
        setRehydrated(true);
        // SplashScreen.hide()
      };

      const nextQueryClient = new QueryClient();

      const nextStore = createStore({ onRehydrated });
      setStore(nextStore);
      setQueryClient(nextQueryClient);
    }

    initialize().catch(() => {
      // showError(error.message || 'Initialization error')
    });
  }, []);

  if (!store || !rehydrated || !queryClient) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient as QueryClient}>
      <StoreContext.Provider value={store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView style={GestureHandlerRootViewStyle}>
            <Navigation />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </StoreContext.Provider>
    </QueryClientProvider>
  );
}

const GestureHandlerRootViewStyle = { flex: 1 };
