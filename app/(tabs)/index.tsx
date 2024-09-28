import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation: '+' | '-' | '*' | '/') => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Erro: Insira números válidos');
      return;
    }

    const operations: { [key in '+' | '-' | '*' | '/']: number | string } = {
      '+': number1 + number2,
      '-': number1 - number2,
      '*': number1 * number2,
      '/': number2 !== 0 ? number1 / number2 : 'Erro: Divisão por zero',
    };

    setResult(operations[operation].toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholderTextColor="#aaa"
      />
      <View style={styles.buttonRow}>
        {['+', '-', '*', '/'].map((op) => (
          <TouchableOpacity key={op} style={styles.button} onPress={() => calculate(op as '+' | '-' | '*' | '/')}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.result}>Resultado: {result}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 28, marginBottom: 20 },
  input: { width: '80%', height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, marginBottom: 10, paddingHorizontal: 15 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around', width: '80%', marginTop: 20 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 8, width: 60, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 22 },
  result: { fontSize: 24, marginTop: 20, fontWeight: 'bold' },
});

export default App;
