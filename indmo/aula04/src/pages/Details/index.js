import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Details({ route }) {

    var { restaurante } = route.params;
    return (
        <View style={styles.main}>
            <Image style={styles.image} source={{ uri: restaurante.img }} />
            <View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", height: 50}}>
                    <Text style={styles.nomeRes}>{restaurante.nomeRes}</Text>
                    <View style={styles.aval}>
                        <Image style={{ width: 30, height: 30, marginLeft: 5}} source={{ uri: "https://icones.pro/wp-content/uploads/2021/02/icone-etoile-jaune.png" }} />
                        <Text style={{ fontSize: 16 }}>{restaurante.avaliacao}</Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>  
                    <Image style={{ width: 15, height: 15, marginRight: 5}} source={{ uri: "https://cdn-icons-png.flaticon.com/512/17/17736.png" }} />
                    <Text>{restaurante.end}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>  
                    <Image style={{ width: 14, height: 14, marginRight: 5}} source={{ uri: "https://cdn.icon-icons.com/icons2/909/PNG/512/telephone_icon-icons.com_70849.png" }} />
                    <Text>{restaurante.telefone}</Text>
                </View>
            </View>

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