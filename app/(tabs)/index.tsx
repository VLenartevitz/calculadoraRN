import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [res, setRes] = useState('');

  const calc = (op) => {
    try {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      let result = 0;

      switch (op) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case '*':
          result = n1 * n2;
          break;
        case '/':
          result = n1 / n2;
          break;
        default:
          setRes('Inválido');
          return;
      }

      setRes(result.toString());
    } catch {
      setRes('Erro');
    }
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setRes('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <TextInput
          style={styles.input}
          placeholder="Número 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Número 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />
        <Text style={styles.resultText}>Resultado: {res}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['+', '-', '*', '/'].map((op) => (
          <TouchableOpacity key={op} style={styles.button} onPress={() => calc(op)}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={clear}>
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
