import { React, useState } from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

export default function App(){
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [res, setRes] = useState("");
  var selected = 0

  return(
    <View style={styles.container}>
      <TextInput placeholder='1º Número' style={styles.input} value={n1} onChangeText={(val) => { setN1(val);}}/>
      <TextInput placeholder='2º Número' style={styles.input} value={n2} onChangeText={(val) => { setN2(val);}}/>
      <View style={styles.operators}>
        <TouchableOpacity onPress={()=>{ selected = 1 }} style={styles.op}><Text style={styles.opText}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op}><Text style={styles.opText}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op}><Text style={styles.opText}>÷</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op}><Text style={styles.opText}>×</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={{borderColor: 'gray', borderWidth: '1px', padding: '5px', }} onPress={() => { setRes(parseInt(n1) + parseInt(n2)) }}>
        <Text>Executar</Text>
      </TouchableOpacity>
      <Text style={styles.sumLabel}>Resultado:</Text>
      <Text style={{fontSize: 20, marginTop: '10px'}}>{res}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: 'gray',
    outline: "none",
    marginBottom: '5px',
    textAlign: "center"
  },
  sumLabel: {
    marginTop: '20px'
  },
  operators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '5px',
    gap: '5px'
  },
  op: {
    borderWidth: '1px',
    borderColor: '#999',
    height: "40px",
    width: "35px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  opText: {
    fontSize: '20px',
    fontWeight: 'bold'
  }
});