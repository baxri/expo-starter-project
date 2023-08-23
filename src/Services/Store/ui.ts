import { useCallback, useMemo } from 'react';
import { StoreonModule } from 'storeon';
import { useStoreon } from 'storeon/react';

import { ThemeID, THEMES } from 'Theme';

const KEY = 'ui';

interface StateValues {
  themeId: ThemeID;
}

interface State {
  [KEY]: StateValues;
}

interface Events {
  'theme/set': ThemeID;
  clear: void;
}

const INITIAL_STATE: StateValues = {
  themeId: ThemeID.Main,
};

const module: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({
    [KEY]: INITIAL_STATE,
  }));
  store.on('theme/set', (state, themeId) => ({
    [KEY]: {
      ...state[KEY],
      themeId,
    },
  }));
  store.on('clear', () => ({
    [KEY]: INITIAL_STATE,
  }));
};

function useTheme() {
  const {
    [KEY]: { themeId },
    dispatch,
  } = useStoreon<State, Events>(KEY);

  const theme = useMemo(
    () => THEMES[themeId] ?? THEMES[ThemeID.Main],
    [themeId],
  );

  const setThemeId = useCallback(
    (id: ThemeID) => {
      dispatch('theme/set', id);
    },
    [dispatch],
  );

  return { theme, setThemeId };
}

export { KEY, module, useTheme, State, Events };
