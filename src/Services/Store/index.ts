import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistState } from '@storeon/localstorage';
import { createStoreon, StoreonStore } from 'storeon';

import Shared from 'Services/shared';

import {
  Events as LanguageEvents,
  KEY as LANGUAGE_KEY,
  module as LanguageModule,
  State as LanguageState,
} from './language';
import {
  Events as SessionEvents,
  KEY as SESSION_KEY,
  module as sessionModule,
  State as SessionState,
} from './session';
import {
  Events as UIEvents,
  KEY as UI_KEY,
  module as uiModule,
  State as UIState,
} from './ui';

type State = SessionState & UIState & LanguageState;
type Events = SessionEvents & UIEvents & LanguageEvents;

export type Store = StoreonStore<State, Events>;

export function createStore({ onRehydrated }: { onRehydrated?: () => void }) {
  const store = createStoreon<State, Events>([
    sessionModule,
    uiModule,
    LanguageModule,
    persistState([SESSION_KEY, UI_KEY, LANGUAGE_KEY], {
      // @ts-ignore
      storage: AsyncStorage,
      onRehydrated,
    }),
  ]);

  Shared.setStore(store);

  return store;
}
