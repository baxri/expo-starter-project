jest.mock('react-native-keyboard-spacer', () => ({}));
jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(),
}));
jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
}));
jest.mock('firebase/auth', () => ({
  initializeAuth: jest.fn(),
}));
jest.mock('@react-native-async-storage/async-storage', () => ({}));
jest.mock('firebase/app', () => ({
  getApps: jest.fn(),
  initializeApp: jest.fn(),
}));
jest.mock('firebase/auth/react-native', () => ({
  getReactNativePersistence: jest.fn(),
}));
