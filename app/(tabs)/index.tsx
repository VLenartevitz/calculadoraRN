import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation: string) => {
    try {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      let evalResult = 0;

      switch (operation) {
        case '+':
          evalResult = num1 + num2;
          break;
        case '-':
          evalResult = num1 - num2;
          break;
        case '*':
          evalResult = num1 * num2;
          break;
        case '/':
          evalResult = num1 / num2;
          break;
        default:
          setResult('Operação inválida');
          return;
      }

      setResult(evalResult.toString());
    } catch {
      setResult('Erro: Entrada inválida');
    }
  };

  const clearInput = () => {
    setInput1('');
    setInput2('');
    setResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <TextInput
          style={styles.input}
          placeholder="Número 1"
          keyboardType="numeric"
          value={input1}
          onChangeText={setInput1}
        />
        <TextInput
          style={styles.input}
          placeholder="Número 2"
          keyboardType="numeric"
          value={input2}
          onChangeText={setInput2}
        />
        <Text style={styles.resultText}>Resultado: {result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['+', '-', '*', '/'].map((operation) => (
          <TouchableOpacity key={operation} style={styles.button} onPress={() => calculate(operation)}>
            <Text style={styles.buttonText}>{operation}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={clearInput}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  display: { width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20, alignItems: 'center' },
  input: { width: '80%', fontSize: 24, padding: 10, marginVertical: 10, borderBottomWidth: 1, borderBottomColor: '#333', textAlign: 'center' },
  resultText: { fontSize: 24, color: '#007bff', marginTop: 20 },
  buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', width: '80%', justifyContent: 'space-around' },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, margin: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 24 },
});

export default App;
