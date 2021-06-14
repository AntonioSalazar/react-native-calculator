import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.result}>1500</Text>
    </View>
  );
};

export default CalculatorScreen;
