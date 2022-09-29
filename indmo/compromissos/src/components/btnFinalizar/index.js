import {TouchableOpacity, Text, Image, View} from 'react-native';
import { StyleSheet } from "react-native-web"

export default function BtnFinalizar(props) {
    const { onPress } = props;

    return(
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', width: 200, alignItems: "center", padding: 20, backgroundColor: "#53693C", borderRadius: 15}} onPress={() => onPress()}>
            <Text style={{color: "#FFF"}}>Finalizar Compromisso</Text>
        </TouchableOpacity>
    )
}