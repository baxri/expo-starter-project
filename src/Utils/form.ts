import { FormApi } from 'final-form';
import { FieldMetaState } from 'react-final-form';

import first from 'lodash/first';
import map from 'lodash/map';
import merge from 'lodash/merge';
import reduce from 'lodash/reduce';
import set from 'lodash/set';

function getError(
  {
    dirty,
    touched,
    error,
    submitError,
    dirtySinceLastSubmit,
  }: FieldMetaState<string>,
  checkDirty = false,
): string | null | undefined {
  const hasError: boolean =
    (touched || (checkDirty && dirty)) &&
    (error || (submitError && !dirtySinceLastSubmit));

  return hasError ? first(error) : null;
}

type GetFormErrorsOptions = {
  checkDirty?: boolean;
};

function getFormErrors<Values>(
  form: FormApi<Values>,
  fields: Record<string, any>,
  options: GetFormErrorsOptions = {},
): Partial<Record<keyof Values, string>> {
  return reduce(
    fields,
    (acc, field) => {
      const fieldState = form.getFieldState(field);

      if (fieldState) {
        const error = getError(fieldState as any, options.checkDirty);
        if (error) {
          return set(acc, field, error);
        }
      }

      return acc;
    },
    {},
  );
}

type Item =
  | string
  | {
      id?: string;
      name?: string;
      label?: string;
      value?: string;
    };

interface Option {
  id: string;
  title: string;
}

interface OptionConfig {
  getId?: (data: Item) => string;
  getTitle?: (data: Item) => string;
}

const OPTION_CONFIG: OptionConfig = {
  getId: (data) =>
    typeof data === 'string' ? data : data?.id || data?.value || '',
  getTitle: (data) =>
    typeof data === 'string' ? data : data?.name || data?.label || '',
};

function makeOption({ getId, getTitle } = OPTION_CONFIG) {
  return function optionMaker(item: Item): Option {
    return {
      id: getId?.(item) || '',
      title: getTitle?.(item) || '',
    };
  };
}

function makeOptions(items: Item[] = [], optionConfig = {}) {
  return map(items, makeOption(merge({}, OPTION_CONFIG, optionConfig)));
}

export default {
  getError,
  getFormErrors,
  makeOptions,
};
