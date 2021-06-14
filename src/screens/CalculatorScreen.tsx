import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';
import CalcButton from '../components/CalcButton';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1500</Text>
      <Text style={styles.result}>1500</Text>
      <View style={styles.row}>
        <CalcButton text="C" color="#9b9b9b9b" />
        <CalcButton text="+/-" color="#9b9b9b9b" />
        <CalcButton text="del" color="#9b9b9b9b" />
        <CalcButton text="/" color="#ff9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
