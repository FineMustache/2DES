import { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {

  const [score, setScore] = useState('-');

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("score");
      if (jsonValue !== null){
        setScore(jsonValue)
      }
    } catch (e) {
      console.log(e)
    }
  };

  const storeData = async () => {
    try {
        await AsyncStorage.setItem('score', 0)
      
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.subtext}>VEIO PORQUE</Text>
        <Text style={styles.titleText}>QUIZ</Text>
      </View>
      <Text style={styles.score}>Última Pontuação: {score}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => {
        storeData().then(
          navigation.push('Q1')
        ).catch((e) =>{
          console.log(e)
        })
        }}>
        <Text style={styles.btnText}>INICIAR</Text>
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
    paddingVertical: 200
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  subtext: {
    fontSize: 24,
    color: '#fff'
  },
  titleText: {
    fontSize: 46,
    color: '#fff'
  },
  score: {
    fontSize: 18,
    color: '#fff',
    opacity: .5,
    marginTop: 40
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 25,
    borderColor: '#58c',
    borderWidth: 2,
    marginTop: 40,
    shadowColor: '#58c',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 20
  },
  btnText: {
    fontSize: 40,
    color: '#fff'
  }
});
