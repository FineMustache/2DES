import {TouchableOpacity, Text, Image, View} from 'react-native';
import { StyleSheet } from "react-native-web"

export default function Item(props) {
    const { titulo, descricao } = props;

    return(
        <View style={{display: 'flex', width: "100%", marginBottom: 10}}>
            <Text style={{fontSize: 18, fontWeight:'bold'}}>{titulo}</Text>
            <Text style={{fontSize: 16}}>{descricao}</Text>
        </View>
    )
}