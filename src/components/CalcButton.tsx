import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props {
  text: string;
  color?: string;
  width?: boolean;
}

const CalcButton = ({text, color = '#2d2d2d', width = false}: Props) => {
  return (
    <View
      style={{
        ...styles.button,
        backgroundColor: color,
        width: width ? 180 : 80,
      }}>
      <Text
        style={{
          ...styles.buttonText,
          color: color === '#9b9b9b' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default CalcButton;
