import 'react-native-get-random-values';

import compact from 'lodash/compact';
import join from 'lodash/join';
import map from 'lodash/map';
import slice from 'lodash/slice';
import split from 'lodash/split';
import startsWith from 'lodash/startsWith';
import trim from 'lodash/trim';

function makeAcronym(value: string, limit = 3) {
  return slice(
    join(
      map(compact(split(value, ' ')), (item) => item[0].toUpperCase()),
      '',
    ),
    0,
    limit,
  );
}

function singleSpaces(value: string) {
  return value.replace(/  +/g, ' ');
}

function sanitize(value: string) {
  return trim(singleSpaces(value));
}

function fixUrl(url?: string) {
  if (!url) {
    return undefined;
  }

  if (!startsWith(url, 'http')) {
    return `https://${url}`;
  }

  return url.replace(/^http:/, 'https:');
}

export default {
  fixUrl,
  makeAcronym,
  sanitize,
  singleSpaces,
};
