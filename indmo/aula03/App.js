import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { Button, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  const [funcs, setFuncs] = useState([
    {
      "nome": "Guilherme Henrique dos Santos Mendes",
      "cargo": "Pedreiro"
    },
    {
      "nome": "Santiago Conti Zapparoli",
      "cargo": "Servente de Pedreiro"
    },
    {
      "nome": "Gabriel Bahias",
      "cargo": "Auxiliar de Servente de Pedreiro"
    },
    {
      "nome": "Guilherme Melro",
      "cargo": "Assistente de Auxiliar de Servente de Pedreiro"
    },
    {
      "nome": "Felipe Augusto Ribeiro Serra",
      "cargo": "Ajudante de Assistente de Auxiliar de Servente de Pedreiro"
    }
  ]);
  const [nomeFunc, setNomeFunc] = useState("")
  const [cargoFunc, setCargoFunc] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.inpCont}>
        <TextInput onChangeText={(val) => {setNomeFunc(val)}} style={styles.input} placeholder="Nome do Funcionário"></TextInput>
        <TextInput onChangeText={(val) => {setCargoFunc(val)}} style={styles.input} placeholder="Cargo"></TextInput>
        <TouchableOpacity onPress={() => { setFuncs(funcs => [...funcs, {"nome": nomeFunc, "cargo": cargoFunc}]) }} style={styles.btn}><Text style={styles.btnText}>Cadastrar</Text></TouchableOpacity>
      </View>
      <SafeAreaView style={styles.savCont}>
        <ScrollView style={styles.svCont}>
          {funcs.map(func => {
            return(
              <Funcionario>
                <Text style={styles.nome}>{func.nome}</Text>
                <Text>{func.cargo}</Text>
              </Funcionario>
            )
          })}
        </ScrollView>
      </SafeAreaView>
      
    </View>
  );
}

function Funcionario(props) {

  return(
    <View style={styles.func}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#fff",
    width: "100%",
    gap: "10px"
  },
  inpCont: {
    width: "100%",
    gap: "10px"   
  },
  input:{
    borderWidth: "1px",
    borderColor: "#000",
    padding: "10px"
  },
  savCont:{
    flex: 1,
    width: "100%",
    maxHeight: "600px"
  },
  svCont:{
    flex: 1,
    width: "100%",
    backgroundColor: "#ddd",
    padding: "10px"
  },
  func:{
    backgroundColor: "#fff",
    marginVertical: "5px",
    borderRadius: "10px",
    padding: "10px",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  nome: {
    fontSize: "13pt",
    color: "#1647a8"
  },
  btn: {
    display: "flex",
    borderRadius: "10px",
    backgroundColor: "#1647a8",
    padding: "10px",
    alignItems: "center"
  },
  btnText: {
    color: "#fff"
  }
});

