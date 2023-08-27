import { useMemo } from 'react';
import { StoreonModule } from 'storeon';
import { useStoreon } from 'storeon/react';

import Shared from 'Services/shared';

const KEY = 'session';

interface StateValues {
  idToken?: string;
}

interface State {
  [KEY]: StateValues;
}

interface Events {
  'session/setIdToken': string;
  'session/clear': void;
}

const INITIAL_STATE: StateValues = {
  idToken: undefined,
};

const module: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({
    [KEY]: INITIAL_STATE,
  }));
  store.on('session/setIdToken', (state, idToken) => ({
    [KEY]: {
      ...state,
      idToken,
    },
  }));
  store.on('session/clear', () => ({
    [KEY]: INITIAL_STATE,
  }));
};

function setIdToken(idToken: string) {
  Shared.getStore()?.dispatch?.('session/setIdToken', idToken);
}

function clear() {
  Shared.getStore()?.dispatch?.('session/clear');
}

function getState(): StateValues {
  return Shared.getStore()?.get()?.[KEY];
}

function getItToken() {
  return getState()?.idToken;
}

function useSession() {
  const { [KEY]: state } = useStoreon<State>(KEY);

  return useMemo(
    () => ({
      idToken: state.idToken,
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
  setIdToken,
  getItToken,
  clear,
};
