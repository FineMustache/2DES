import { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView, ScrollView } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RadioButton, Text } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';


export default function Question1({ route, navigation }) {
  console.log(route.params)
  const qst = route.params

  console.log(qst)

  var score
  const [value, setValue] = useState(9)

  const storeData = async () => {
    try {
        await AsyncStorage.setItem('score', score + 1)
      
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      var valor = await AsyncStorage.getItem("score");
      if (valor == null){
        valor = 0
      }
      console.log(valor)
    score = parseInt(valor)
    
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{qst.perg}</Text>
      </View>
      <View style={styles.options}>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            {
                qst.resp.map((r, indice) => {
                    return(
                        <View style={styles.option} key={indice}>
                            <Text style={styles.optionText}>{r.text}</Text>
                            <RadioButton value={indice} status={ 'unchecked' } />
                        </View>
                    )
                })
            }
            </RadioButton.Group>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => {
        if (value != 9) {
            if(qst.resp[value].right){
                getData()
                .then(() => {
                    storeData()
                })
            }
            switch (qst.id) {
              case 1:
                navigation.push('Q2')
                break;
              
              case 2:
                navigation.push('Q3')
                break;

              default:
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [
                      { name: 'Home' }
                    ],
                  })
                );
            }
            
        }
      }}>
        <Text style={styles.btnText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    padding: 15,
    position: "relative",
  },
  question: {
    width: '100%',
    backgroundColor: '#113',
    borderColor: '#55a',
    borderWidth: 2,
    padding: 10
  },
  questionText: {
    fontSize: 20,
    color: '#fff'
  },
  option:{
    flexDirection: 'row-reverse',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#226',
    marginBottom: 10,
    backgroundColor: '#002'
  },
  optionText:{
    color: "#fff",
    fontSize: 16
  },
  options: {
    marginTop: 50
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 25,
    borderColor: '#55a',
    borderWidth: 2,
    marginTop: 40,
    shadowColor: '#55a',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 20,
    position: 'absolute',
    bottom: 30
  },
  btnText: {
    fontSize: 40,
    color: '#fff'
  }
});
