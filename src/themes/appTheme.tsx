import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },

  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
  },

  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
});
