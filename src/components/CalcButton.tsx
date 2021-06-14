import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props {
  text: string;
  color?: string;
}

const CalcButton = ({text, color}: Props) => {
  return (
    <View
      style={{
        ...styles.button,
        backgroundColor: color,
      }}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

export default CalcButton;
