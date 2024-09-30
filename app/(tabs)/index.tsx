import { useState } from 'react';
import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Picker } from 'react-native';

const App = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    try {
      let calcResult;
      switch (operator) {
        case '+':
          calcResult = parseFloat(firstValue) + parseFloat(secondValue);
          break;
        case '-':
          calcResult = parseFloat(firstValue) - parseFloat(secondValue);
          break;
        case '*':
          calcResult = parseFloat(firstValue) * parseFloat(secondValue);
          break;
        case '/':
          calcResult = parseFloat(firstValue) / parseFloat(secondValue);
          break;
        default:
          return;
      }
      setResult(String(calcResult));
    } catch (error) {
      setResult('Erro');
    }
  };

  const clear = () => {
    setFirstValue('');
    setSecondValue('');
    setOperator('+');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro valor"
          keyboardType="numeric"
          value={firstValue}
          onChangeText={setFirstValue}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o segundo valor"
          keyboardType="numeric"
          value={secondValue}
          onChangeText={setSecondValue}
        />
        <Picker
          selectedValue={operator}
          style={styles.picker}
          onValueChange={(itemValue) => setOperator(itemValue)}
        >
          <Picker.Item label="+" value="+" />
          <Picker.Item label="-" value="-" />
          <Picker.Item label="*" value="*" />
          <Picker.Item label="/" value="/" />
        </Picker>
        <Text style={styles.result}>Resultado: {result}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  screen: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default App;
