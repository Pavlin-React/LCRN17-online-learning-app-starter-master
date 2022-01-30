import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const TextButton = ({
  onPress,
  disabled,
  label,
  labelStyle,
  contentContainerStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
