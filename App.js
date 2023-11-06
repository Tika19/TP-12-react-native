import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DigitConverter = ({ inputNumber, character }) => {
  const digits = inputNumber.toString().split('');
  const digitMap = {
    '0': [
      '###',
      '# #',
      '# #',
      '# #',
      '###'
    ],
    '1': [
      ' # ',
      '## ',
      ' # ',
      ' # ',
      '###'
    ],
    '2': [
      '###',
      '  #',
      '###',
      '#  ',
      '###'
    ],
    '3': [
      '###',
      '  #',
      '###',
      '  #',
      '###'
    ],
    '4': [
      '# #',
      '# #',
      '###',
      '  #',
      '  #'
    ],
    '5': [
      '###',
      '#  ',
      '###',
      '  #',
      '###'
    ],
    '6': [
      '###',
      '#  ',
      '###',
      '# #',
      '###'
    ],
    '7': [
      '###',
      '  #',
      '  #',
      '  #',
      '  #'
    ],
    '8': [
      '###',
      '# #',
      '###',
      '# #',
      '###'
    ],
    '9': [
      '###',
      '# #',
      '###',
      '  #',
      '###'
    ]
  };

  const renderDigit = (digit) => {
    const lines = digitMap[digit];
    return lines.map((line, index) => (
      <Text key={index} style={styles.digitLine}>
        {line.replace(/#/g, character)}
      </Text>
    ));
  };

  return (
    <View style={styles.digitContainer}>
      {digits.map((digit, index) => (
        <View key={index} style={styles.singleDigit}>
          {renderDigit(digit)}
        </View>
      ))}
    </View>
  );
};

const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [character, setCharacter] = useState('#');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputNumber(text)}
        value={inputNumber}
        keyboardType="numeric"
        placeholder="Ingresa un número"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCharacter(text)}
        value={character}
        maxLength={1}
        placeholder="Ingresa un carácter"
      />
      <DigitConverter inputNumber={inputNumber} character={character} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  digitContainer: {
    flexDirection: 'row',
  },
  singleDigit: {
    marginLeft: 10,
  },
  digitLine: {
    fontSize: 24,
  },
});

export default App;