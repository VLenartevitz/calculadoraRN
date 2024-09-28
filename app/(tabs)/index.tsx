import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value: string) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculate = () => {
    try {
      const evalResult = eval(input); 
      setResult(evalResult.toString());
    } catch {
      setResult('Erro: Entrada inválida');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleButtonPress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleButtonPress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleButtonPress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['C', '0', '=', '+'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleButtonPress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  display: { width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20, alignItems: 'flex-end' },
  displayText: { fontSize: 30, color: '#333' },
  resultText: { fontSize: 24, color: '#007bff' },
  buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', width: '80%', justifyContent: 'space-between' },
  button: { backgroundColor: '#007bff', padding: 20, borderRadius: 10, margin: 5, width: '20%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 24 },
});

export default App;
