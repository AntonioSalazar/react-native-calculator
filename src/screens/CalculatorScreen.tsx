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
        <CalcButton text="C" color="#9b9b9b" />
        <CalcButton text="+/-" color="#9b9b9b" />
        <CalcButton text="del" color="#9b9b9b" />
        <CalcButton text="/" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton text="X" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <CalcButton text="4" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton text="-" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton text="+" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" width />
        <CalcButton text="." />
        <CalcButton text="=" color="#ff9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
