import {TouchableOpacity, Text, Image, View} from 'react-native';
import { StyleSheet } from "react-native-web"

import styles from './style';

export default function ButtonCadastrar(props) {
    const { tipo, value, onPress, horario } = props;
    var img;

    switch (tipo) {
        case 1:
            img = require('../../../assets/medico.png')
            break;
        case 2:
            img = require('../../../assets/escola.png')
            break;
        case 3:
            img = require('../../../assets/mercado.png')
            break;
        case 4:
            img = require('../../../assets/cinema.png')
            break;
        default:
            break;
    }
    return(
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', width: "100%", alignItems: "center", marginBottom: 10}} onPress={() => onPress()}>
            <View style={{height: 70, width: 70, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderRadius: "100%",  marginRight: 10}}>
                <Image source={img} style={{height: 50, width: 50}}/>
            </View>
            <View style={{display: "flex", flexDirection: "column", borderBottomWidth: 2, borderBottomColor: "#53693C", flex: 1, padding: 10}}>
                <Text style={{color: "#fff", fontWeight: "bold"}}>{value}</Text>
                <Text style={{color: "#fff"}}>{horario}</Text>
            </View>
            
        </TouchableOpacity>
    )
}