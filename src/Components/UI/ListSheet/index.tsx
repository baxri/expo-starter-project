import React, { useCallback, useRef } from 'react';
import { ListRenderItem } from 'react-native';
import Modal from 'react-native-modal';

import { SafeAreaView, useSafeAreaInsets } from 'Services/safeArea';

import Button from 'Components/UI/Button';
import FlatList from 'Components/UI/FlatList';
import KeyboardSpacer from 'Components/UI/KeyboardSpacer';
import { Column } from 'Components/UI/View';

import OptionItem from './OptionItem';
import Styles, { Content } from './styles';
import { Option } from './types';

type Props = {
  options?: any;
  value?: string | null;
  visible?: boolean;
  onClose?: (option?: Option) => void;
  onSearchTermChange?: (searchTerm: string) => void;
  onSelect?: (option?: Option) => void;
};

function ListSheet({
  options = [],
  value,
  visible = false,
  onClose,
  onSelect,
}: Props) {
  const currentOptionRef = useRef<Option | undefined>();
  const { bottom } = useSafeAreaInsets();

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleModalHide = useCallback(() => {
    if (currentOptionRef.current) {
      onSelect?.(currentOptionRef.current);
      // NOTE: clean option value on reopening Modal
      currentOptionRef.current = undefined;
    }
  }, [onSelect]);

  const handleOptionPress = useCallback(
    (option: Option) => {
      currentOptionRef.current = option;
      onClose?.(option);
    },
    [onClose],
  );

  const renderOption = useCallback<ListRenderItem<Option>>(
    ({ item }) => (
      <OptionItem
        item={item}
        selected={item.id === value}
        onPress={() => handleOptionPress?.(item)}
      />
    ),
    [value, handleOptionPress],
  );

  return (
    <Modal
      backdropOpacity={0.2}
      backdropTransitionOutTiming={0}
      isVisible={visible} // Avoids backdrop flickering on close
      style={Styles.modal}
      onBackdropPress={handleClose}
      onModalHide={handleModalHide}
    >
      <Content>
        {options.length > 0 && (
          <FlatList data={options} pt={5} px={5} renderItem={renderOption} />
        )}

        <Column p={5}>
          <Button title="Cancel" secondary onPress={handleClose} />
        </Column>

        <SafeAreaView bottom />
        <KeyboardSpacer topSpacing={-bottom} />
      </Content>
    </Modal>
  );
}

export default ListSheet;
