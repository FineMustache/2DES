import * as React from 'react';
import { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import Item from '../../components/item';
const chamados = [
    {
        "user_id": 1,
        "chamados": [
            {
                "titulo":"Manutenção de Roteador",
                "descricao":"Cliente reclamou que está sem internet, possível troca"
            },
            {
                "titulo":"Mudança de Endereço",
                "descricao":"Fazer a instalação na nova instalação"
            },
            {
                "titulo":"Recolher equipamento",
                "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
            }
        ]
    },
    {
        "user_id": 2,
        "chamados": [
            {
                "titulo":"Recolher equipamento",
                "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
            },
            {
                "titulo":"Mudança de Endereço",
                "descricao":"Fazer a instalação na nova instalação"
            },
            {
                "titulo":"Manutenção de Roteador",
                "descricao":"Cliente reclamou que está sem internet, possível troca"
            }
        ]
    }
]
export default function Home({ route }) {
    const user = route.params.user;
    var chamadosUser
    chamados.forEach(c => {
        if(user.id == c.user_id){
            chamadosUser = c.chamados
        }
    })

    const [busca, setBusca] = useState("")

    const chamadosFiltrados = useMemo(() => {
        const lowerBusca = busca.toLowerCase();
        return chamadosUser.filter((chamado) =>
            chamado.titulo.toLowerCase().startsWith(lowerBusca)
        );
    }, [busca])

    return (
        <View style={styles.main}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(val) => setBusca(val)}
                placeholder="Buscar"
                style={styles.input}
            />
            {
                chamadosFiltrados.map((c, ind) => {
                    return(
                        <Item key={ind} titulo={c.titulo} descricao={c.descricao} />
                    )
                })
            }
        </View>
        
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        padding: 30
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