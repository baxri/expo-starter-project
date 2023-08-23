import { Platform } from 'react-native';
import { DateTime } from 'luxon';

// Test precomit2
import castArray from 'lodash/castArray';
import difference from 'lodash/difference';
import identity from 'lodash/identity';
import pickBy from 'lodash/pickBy';
import union from 'lodash/union';

function arePropsEqual<T extends Record<string, any>>(
  ignoredProps: (keyof T)[],
) {
  return (prevProps: T, nextProps: T) => {
    const keys = Object.keys(prevProps);

    for (let i = 0; i <= keys.length; i++) {
      const prop = keys[i];

      if (prevProps[prop] !== nextProps[prop] && !ignoredProps.includes(prop)) {
        return false;
      }
    }

    return true;
  };
}

function pickExisting(subject: Record<string, unknown>) {
  return pickBy(subject, identity);
}

function toggleListItem<T>(list: T[], item: T, presented = false) {
  return presented
    ? union(list, castArray(item))
    : difference(list, castArray(item));
}

function getTime(datetime: DateTime) {
  return Platform.OS === 'ios'
    ? datetime.toLocaleString(DateTime.TIME_24_SIMPLE)
    : datetime.toString().substring(11, 16);
}

function constructDate(date: string, time: string) {
  return DateTime.fromISO(`${date}T${time}`);
}

export default {
  arePropsEqual,
  pickExisting,
  toggleListItem,
  constructDate,
  getTime,
};
