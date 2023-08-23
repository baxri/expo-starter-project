import transform from 'lodash/transform';

const getHitSlop = <T = number>(
  offset: T,
): { top: T; right: T; bottom: T; left: T } => ({
  top: offset,
  right: offset,
  bottom: offset,
  left: offset,
});

type Separator = {
  item: JSX.Element;
  index: number;
  id: string;
};

type GetListWithSeparatorsOptions = {
  insertAfter?: boolean;
  insertBefore?: boolean;
  renderSeparator: ({ item, index, id }: Separator) => JSX.Element;
};

const getListWithSeparators = (
  list: JSX.Element[],
  options: GetListWithSeparatorsOptions,
): JSX.Element[] => {
  if (!options.renderSeparator) {
    return list;
  }

  const makeSeparator = (
    { item, index }: { item: JSX.Element; index: number },
    before?: boolean,
  ) =>
    options.renderSeparator({
      item,
      index,
      id: [before ? 'before' : 'after', index].join('-'),
    });

  return transform(
    list,
    (acc: JSX.Element[], item: JSX.Element, index) => {
      if (options.insertBefore) {
        acc.push(makeSeparator({ index, item }, true));
      }

      acc.push(item);

      if (index < list.length - 1 || options.insertAfter) {
        acc.push(makeSeparator({ index, item }));
      }
    },
    [],
  );
};

const getGridItemWidth = (
  availableWidth: number,
  numColumns: number,
  gap: number,
) => availableWidth / numColumns - (gap * (numColumns - 1)) / numColumns;

export default {
  getGridItemWidth,
  getHitSlop,
  getListWithSeparators,
};
