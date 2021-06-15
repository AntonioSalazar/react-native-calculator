import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';
import CalcButton from '../components/CalcButton';

enum Operations {
  add,
  substract,
  multiplication,
  division,
}

const CalculatorScreen = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lasOperation = useRef<Operations>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substr(1);
    }
    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const saveNumber = (textNumber: string) => {
    // dont accept two points
    if (number.includes('.') && textNumber === '.') return;
    if (number.startsWith('0' || number.startsWith('-0'))) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const togglePositiveAndNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const addPreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divisionBtn = () => {
    addPreviousNumber();
    lasOperation.current = Operations.division;
  };

  const multiplicationBtn = () => {
    addPreviousNumber();
    lasOperation.current = Operations.multiplication;
  };

  const substractBtn = () => {
    addPreviousNumber();
    lasOperation.current = Operations.substract;
  };

  const addBtn = () => {
    addPreviousNumber();
    lasOperation.current = Operations.add;
  };

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
        <CalcButton text="=" color="#ff9427" action={clean} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
