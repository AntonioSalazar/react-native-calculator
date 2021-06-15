import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';
import CalcButton from '../components/CalcButton';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    clean,
    btnDelete,
    saveNumber,
    togglePositiveAndNegative,
    divisionBtn,
    multiplicationBtn,
    substractBtn,
    addBtn,
    doCalculation,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <CalcButton text="C" color="#9b9b9b" action={clean} />
        <CalcButton
          text="+/-"
          color="#9b9b9b"
          action={togglePositiveAndNegative}
        />
        <CalcButton text="del" color="#9b9b9b" action={btnDelete} />
        <CalcButton text="/" color="#ff9427" action={divisionBtn} />
      </View>

      <View style={styles.row}>
        <CalcButton text="7" action={saveNumber} />
        <CalcButton text="8" action={saveNumber} />
        <CalcButton text="9" action={saveNumber} />
        <CalcButton text="X" color="#ff9427" action={multiplicationBtn} />
      </View>

      <View style={styles.row}>
        <CalcButton text="4" action={saveNumber} />
        <CalcButton text="5" action={saveNumber} />
        <CalcButton text="6" action={saveNumber} />
        <CalcButton text="-" color="#ff9427" action={substractBtn} />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" action={saveNumber} />
        <CalcButton text="2" action={saveNumber} />
        <CalcButton text="3" action={saveNumber} />
        <CalcButton text="+" color="#ff9427" action={addBtn} />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" width action={saveNumber} />
        <CalcButton text="." action={saveNumber} />
        <CalcButton text="=" color="#ff9427" action={doCalculation} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
