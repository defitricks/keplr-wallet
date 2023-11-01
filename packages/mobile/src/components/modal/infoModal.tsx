import React, {FunctionComponent} from 'react';
import {StyleSheet, Text} from 'react-native';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import {Box} from '../../components/box';
import {useStyle} from '../../styles';
import {Columns} from '../../components/column';
import {InformationOutlinedIcon} from '../../components/icon/information-outlined';
export interface InformationModalProps {
  title: string;
  paragraph: string;
}
export const InformationModal: FunctionComponent<InformationModalProps> = ({
  title,
  paragraph,
}) => {
  const style = useStyle();
  return (
    <BottomSheetView
      style={StyleSheet.flatten([
        style.flatten(['padding-x-12']),
        {paddingBottom: 60},
      ])}>
      <Box>
        <Box paddingBottom={20} paddingTop={12} paddingX={8}>
          <Columns sum={1} gutter={10} alignY="center">
            <InformationOutlinedIcon
              size={20}
              color={style.get('color-text-low').color}
            />

            <Text style={style.flatten(['h4', 'color-text-high'])}>
              {title}
            </Text>
          </Columns>
        </Box>
        <Text
          style={style.flatten(['body2', 'color-text-middle', 'padding-x-16'])}>
          {paragraph}
        </Text>
      </Box>
    </BottomSheetView>
  );
};