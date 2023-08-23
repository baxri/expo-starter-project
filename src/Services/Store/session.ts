import { useMemo } from 'react';
import { StoreonModule } from 'storeon';
import { useStoreon } from 'storeon/react';

import Shared from 'Services/shared';

const KEY = 'session';

interface StateValues {
  email?: string;
  isManager?: boolean;
}

interface State {
  [KEY]: StateValues;
}

interface Events {
  'session/set': StateValues;
  'session/clear': void;
}

const INITIAL_STATE: StateValues = {
  email: undefined,
  isManager: undefined,
};

const module: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({
    [KEY]: INITIAL_STATE,
  }));
  store.on('session/set', (state, payload) => ({
    [KEY]: payload,
  }));
  store.on('session/clear', () => ({
    [KEY]: INITIAL_STATE,
  }));
};

function set(payload: StateValues) {
  Shared.getStore()?.dispatch?.('session/set', payload);
}

function clear() {
  Shared.getStore()?.dispatch?.('session/clear');
}

function getState(): StateValues {
  return Shared.getStore()?.get()?.[KEY];
}

function getAccessToken() {
  return getState()?.email;
}

function getRefreshToken() {
  return getState()?.email;
}

function useSession() {
  const { [KEY]: state } = useStoreon<State>(KEY);

  return useMemo(
    () => ({
      email: state.email,
      isManager: state.isManager,
    }),
    [state],
  );
}

export {
  KEY,
  module,
  State,
  Events,
  useSession,
  set,
  clear,
  getAccessToken,
  getRefreshToken,
};
