import {useRef, useState} from 'react';
enum Operations {
  add,
  substract,
  multiplication,
  division,
}

const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operations>();

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
    lastOperation.current = Operations.division;
  };

  const multiplicationBtn = () => {
    addPreviousNumber();
    lastOperation.current = Operations.multiplication;
  };

  const substractBtn = () => {
    addPreviousNumber();
    lastOperation.current = Operations.substract;
  };

  const addBtn = () => {
    addPreviousNumber();
    lastOperation.current = Operations.add;
  };

  const doCalculation = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operations.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operations.substract:
        setNumber(`${num2 - num1}`);
        break;

      case Operations.multiplication:
        setNumber(`${num1 * num2}`);
        break;

      case Operations.division:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPreviousNumber('0');
  };

  return {
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
  };
};

export default useCalculator;
