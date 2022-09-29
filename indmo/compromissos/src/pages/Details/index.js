import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BtnFinalizar from '../../components/btnFinalizar';

export default function Details({ route }) {
    const data = [
        {
            "id_compromisso": 1,
            "descricao":"- Entrega da Atividade.\n- Matéria Nova.",
            "observacoes":"",
        },
        {
            "id_compromisso": 4,
            "descricao":"",
            "observacoes":"Não esquecer a carteirinha !!!",
        },
        {
            "id_compromisso": 3,
            "descricao":"- Pão.\n- Presunto.\n- Queijo.",
            "observacoes":"Ver se o sabão está em promoção e levar uma caixa.",
        },
        {
            "id_compromisso": 2,
            "descricao":"Consulta de retorno.",
            "observacoes":"Levar os exames.",
        },
    ]

    const { id } = route.params;
    var compromisso;
    data.forEach(comp => {
        if (id == comp.id_compromisso) {
            compromisso = comp
        }
    });

    return (
        <View style={{flex: 1, backgroundColor: "#3A3A3A"}}>
            <View style={{padding: 20}}>
                <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 10}}>Descrição:</Text>
                <Text style={{color: "#fff", fontSize: 18, marginLeft: 10}}>{compromisso.descricao}</Text>
                <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 10}}>Observações:</Text>
                <Text style={{color: "#fff", fontSize: 18, marginLeft: 10}}>{compromisso.observacoes}</Text>
            </View>
            <BtnFinalizar onPress={() => console.log("teste")} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#cecece',
        padding: 10,
        flexDirection: 'row'
    },
    nomeRes: {
        fontWeight: 'bold',
        fontSize: 26
    },
    aval: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 110,
        height: 110,
        marginRight: 10,
        marginBottom: 10
    }
})