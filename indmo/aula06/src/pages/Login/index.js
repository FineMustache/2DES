import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createPortal } from 'react-dom';
import BtnLogin from '../../components/btnLogin';
const users = [
    {
        "id": 1,
        "email": "user01@empresa.com",
        "senha": "teste1234",
    },
    {
        "id": 2,
        "email": "user02@empresa.com",
        "senha": "1234teste",
    }
]
export default function Login({ navigation }) {
    
    const [alert, setAlert] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    
    return (
        <View style={styles.main}>
            <Image style={styles.logo} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Samsung_Internet_logo.svg/480px-Samsung_Internet_logo.svg.png"}} />
            <TextInput
                style={styles.input}
                onChangeText={(value) => setLogin(value)}
                placeholder="E-Mail"
            />
            <TextInput
                style={styles.input}
                onChangeText={(value) => setSenha(value)}
                placeholder="Senha"
                secureTextEntry={true}
            />
            <Text style={{
                display: 'flex',
                backgroundColor: isActive ? '#ff695e' : null,
                color: "#550000",
                borderRadius: 5,
                width: "100%",
                padding: isActive ? 10 : 0,
                marginBottom: 10
            }}>{alert}</Text>
            <BtnLogin onPress={() => { 
                let user = logar(login, senha)
                if(user == null){
                    setIsActive(true)
                    setAlert("Credenciais Inválidas")
                } else {
                    navigation.navigate("Home", {user})
                }
            }} />
        </View>
    );
}

function logar(login, senha) {
    let user = null
    users.forEach(u => {
        if (u.email == login) {
            if (u.senha == senha) {
                user = u
            }
        }
    });
    return(user)
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 50
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        shadowColor: "#7242F5",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        marginBottom: 20
    },
})