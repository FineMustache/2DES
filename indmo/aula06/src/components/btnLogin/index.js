import {TouchableOpacity, Text, Image, View} from 'react-native';
import { StyleSheet } from "react-native-web"

export default function BtnLogin(props) {
    const { onPress } = props;

    return(
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: "center", padding: 10, backgroundColor: "#7242F5", borderRadius: 5, justifyContent: "center"}} onPress={() => onPress()}>
            <Text style={{color: "#FFF", fontSize: 20, fontWeight: "bold"}}>Login</Text>
        </TouchableOpacity>
    )
}