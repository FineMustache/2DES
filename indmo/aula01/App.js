import React from "react";

import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const usuarios = [
  {
    nome:  "Fulano",
    cargo: "Gerente",
    img: "https://blog.bmarking.com.br/wp-content/uploads/2019/01/gerente-de-vendas-999x640.jpg"
  },
  { 
    nome: "Beltrano",
    cargo: "Recepcionista",
    img: "https://media.istockphoto.com/photos/portrait-of-male-receptionist-at-hotel-front-desk-picture-id510619545"
  },
  {
    nome: "Ciclano",
    cargo: "Diretor",
    img: "https://sumus.com.br/wp-content/uploads/Diretor-Financeiro.jpg"
  },
  {
    nome: "Tobias",
    cargo: "Presidente",
    img: "https://tiinside.com.br/wp-content/uploads/2020/03/Odilon-Almeida-scaled.jpg"
  },
  {
    nome: "Jurelson",
    cargo: "Zelador",
    img: "https://www.zapimoveis.com.br/blog/wp-content/uploads/2020/02/zelador.jpg"
  },
  {
    nome: "Josefina",
    cargo: "Faxineira",
    img: "https://img.freepik.com/fotos-gratis/jovem-faxineira-em-pe-segurando-uma-esponja_231208-10961.jpg?w=2000"
  }
]

export default function App(){
  const img = require("./assets/chichorro.jpg")
  const trashIcon = require('./assets/trash.png')
  
  return(
    // <View style={styles.container}>
    //   <View style={styles.primeira}>
    //     <Text>Bem vindo, {usuarios[0].nome}</Text>
    //     <TextInput style={styles.input} placeholder="Email" multiline={true} numberOfLines={10} />
    //     <Button title="Cadastrar" />
    //     <TouchableOpacity style={styles.btExclui}>
    //       <Image style={{width: '32px', height: '32px'}} source={trashIcon} />
    //       <Text>Apagar Registro</Text>
    //     </TouchableOpacity>
    //     {
    //       usuarios.map(usuario => {
    //         return(
    //           <TouchableOpacity style={styles.btExclui}>
    //             <Text>{usuario.nome}</Text>
    //           </TouchableOpacity>
    //         )
    //       })
    //     }
    //   </View>
    //   <View style={styles.segunda}>
    //     <Image source={img} style={styles.imgTop}/>
    //     <Image source={{uri: 'https://casaeconstrucao.org/wp-content/uploads/2021/08/22-filhote-de-gato-anao.jpg'}} style={styles.imgTop}/>
    //   </View>
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) =>{
  return(
    <View style={styles.page}>
      { 
        usuarios.map(u =>{
          return(
            <TouchableOpacity onPressOut={() =>{
              navigation.navigate('Profile', {'user': u})
            }} style={styles.item}>
                <Image source={{uri: u.img}} style={{width: '100px', height: '100px', borderRadius: '50%'}} />
                <View style={styles.txtCont}>
                  <Text style={{fontSize: '18pt'}}>{u.nome}</Text>
                  <Text>{u.cargo}</Text>
                </View>
            </TouchableOpacity>
          )
        })
      }
      
    </View>
  )
}

const ProfileScreen = ({navigation, route}) =>{
  return(
    <Text>{route.params.user.nome}</Text>
  )
}



const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // },
    // primeira: {
    //   flex: 1,
    //   backgroundColor: '#f1de7',
    // },
    // segunda:{
    //   flex: 1,
    //   backgroundColor: '#e2f5c8'
    // },
    // imgTop: {
    //   width: '200px',
    //   height: '200px'
    // },
    // input: {
    //   borderBottomWidth: '1px',
    //   borderBottomColor: 'gray',
    //   outline: "none",
    //   marginBottom: '5px'
    // },
    // btExclui:{
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   backgroundColor: '#FCFFA6',
    //   border: '2px solid #adffa6',
    //   borderRadius: '10px'
    // }
    page:{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#dddddd',
      alignItems: 'center'
    },
    item:{
      display: 'flex',
      flexDirection: 'row',
      width: '30%',
      minWidth: '300px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: "#fff",
      marginTop: '5px',
      marginBottom: '5px',
      paddingHorizontal: '20px',
      paddingVertical: '20px',
      borderRadius: '15px',
      shadowColor: '#bbbbbb',
      shadowOffset: {
        width: 10,
        height: 5
      }
    },
    txtCont:{
      flex: 1,
      alignItems: 'center'
    }
});