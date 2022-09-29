import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createPortal } from 'react-dom';
import ItemLista from "../../components/itemLista";
export default function HomeScreen({ navigation }) {
    const data = [
        {
            "id":1,
            "tipo":2,
            "nome":"Escola",
            "horario":"07:30 - 11:30"
        },
        {
            "id":2,
            "tipo":1,
            "nome":"Consulta Médica",
            "horario":"13:00 - 13:40"
        },
        {
            "id":3,
            "tipo":3,
            "nome":"Ir ao mercado",
            "horario":"16:30 - 17:00"
        },
        {
            "id":4,
            "tipo":4,
            "nome":"Ir ao cinema",
            "horario":"20:00 - 22:30"
        },
    ]
    
  return (
    <View style={styles.main}>
      {data.map(compromisso => {
        return(
            <ItemLista key={compromisso.id} tipo={compromisso.tipo} value={compromisso.nome} id={compromisso.id} horario={compromisso.horario} onPress={() => {navigation.navigate("Details", {"id": compromisso.id})}}/>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3A3A3A',
        padding: 15
    },
    item:{
        display: 'flex',
        padding: 15,
        width: '100%',
        backgroundColor: '#efefef',
        borderRadius: 15,
        marginBottom: 15
    },
    nomeRes:{
        fontWeight: 'bold',
        fontSize: 16
    },
    aval:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        width: 15,
        height: 15,
        marginRight: 5
    }
})