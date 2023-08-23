import { useMemo } from 'react';
import { StoreonModule } from 'storeon';
import { useStoreon } from 'storeon/react';

import Shared from 'Services/shared';

const KEY = 'language';

interface StateValues {
  locale?: string;
}

interface State {
  [KEY]: StateValues;
}

interface Events {
  'language/set': string;
  'language/clear': void;
}

const INITIAL_STATE: StateValues = {
  locale: 'en',
};

const module: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({
    [KEY]: INITIAL_STATE,
  }));
  store.on('language/set', (state, locale) => ({
    [KEY]: { locale },
  }));
  store.on('language/clear', () => ({
    [KEY]: INITIAL_STATE,
  }));
};

function set(locale: string) {
  Shared.getStore()?.dispatch?.('language/set', locale);
}

function clear() {
  Shared.getStore()?.dispatch?.('language/clear');
}

function getState(): StateValues {
  return Shared.getStore()?.get()?.[KEY];
}

function getLocale() {
  return getState()?.locale;
}

function useLocale() {
  const { [KEY]: state } = useStoreon<State>(KEY);

  return useMemo(
    () => ({
      locale: state.locale,
    }),
    [state],
  );
}

export { KEY, module, State, Events, useLocale, set, clear, getLocale };
