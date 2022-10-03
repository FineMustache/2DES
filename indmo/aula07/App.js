import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [sal, setSal] = useState("")
  const [lida, setLida] = useState("")

  const salvar = async () => {
    try {
      await AsyncStorage.setItem("data", JSON.stringify({nome, cargo, sal}))
      setNome("")
      setCargo("")
      setSal("")
    } catch (err) {
      console.log(err)
    }
  }

  const ler = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data')
      var valores = jsonValue != null ? JSON.parse(jsonValue) : null;
      setLida(
        <View>
          <Text>Nome: {valores.nome}</Text>
          <Text>Cargo: {valores.cargo}</Text>
          <Text>Salário: {valores.sal}</Text>
        </View>
      )
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Nome' style={{borderBottomColor: "#000", borderBottomWidth: 1}} value={nome} onChangeText={(value) => { setNome(value) }} />
      <TextInput placeholder='Cargo' style={{borderBottomColor: "#000", borderBottomWidth: 1}} value={cargo} onChangeText={(value) => { setCargo(value) }} />
      <TextInput placeholder='Salário' style={{borderBottomColor: "#000", borderBottomWidth: 1}} value={sal} onChangeText={(value) => { setSal(value) }} />
      <Button title='Salvar' onPress={() => { salvar() }} />
      <Button title='Ler' onPress={() => { ler() }} />
      <View>{lida}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

