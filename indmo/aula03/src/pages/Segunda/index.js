import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacityComponent, View } from 'react-native';
import { Button, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native-web';
import { useState } from 'react';

export default function Segunda({ navigation }) {
  const produtos = [
    {
      "nomeprod": "Detergente",
      "preco": 1.75,
      "descricao":{
        "marca":"Ype",
        "sabor":"Maçã"
      }
    },
    {
      "nomeprod": "Bucha",
      "preco": 6.50,
      "descricao":{
        "marca":"Assolam",
        "sabor":"Morte"
      }
    },
    {
      "nomeprod": "Sabão em Barra",
      "preco": 3.50,
      "descricao":{
        "marca":"Ype",
        "sabor":"Coco"
      }
    }
  ]

  return (
    <View>
      {
        produtos.map((produto, indice) => {
          return(
            <TouchableOpacity key={indice} onPress={() => {navigation.navigate('Descricao', {'descricao': produto.descricao})}}>
              <Text>{produto.nomeprod}</Text>
              <Text>R$ {produto.preco}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  );
}