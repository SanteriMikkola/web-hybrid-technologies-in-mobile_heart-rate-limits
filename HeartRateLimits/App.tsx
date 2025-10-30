import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const ageToNum: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const lowerLimit: number = !(ageToNum === 0) ? (220 - ageToNum) * 0.65 : 0
  const upperLimit: number = !(ageToNum === 0) ? (220 - ageToNum) * 0.85 : 0

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput style={styles.textField}
        placeholder=""
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text style={styles.text}>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 16
  },
  textField: {
    marginTop: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 40,
    width: 100
  },
  text: {
    marginVertical: 16,
    marginBottom: -6,
    marginTop: 5
  }
});
