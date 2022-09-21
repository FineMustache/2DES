import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    const restaurantes = [
        {
            "nomeRes": "Du Chef",
            "avaliacao": 4.3,
            "img": "https://img.freepik.com/premium-vector/chef-restaurant-logo-inspiration_139869-449.jpg?w=2000",
            "end": "Santo Antônio de Posse",
            "telefone": "19989030956"
        },
        {
            "nomeRes": "Premium",
            "avaliacao": 4.4,
            "img": "https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000",
            "end": "Pedreira",
            "telefone": "19995778086"
        },
        {
            "nomeRes": "Drinks BG",
            "avaliacao": 3.9,
            "img": "https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ=",
            "end": "Jaguariúna",
            "telefone": "19993120806"
        }
    ]
  return (
    <View style={styles.main}>
      {restaurantes.map((restaurante, indice) => {
        return(
            <TouchableOpacity key={indice} onPress={() => navigation.navigate("Details", {restaurante})} style={styles.item}>
                <Text style={styles.nomeRes}>{restaurante.nomeRes}</Text>
                <View style={styles.aval}>
                    <Image style={styles.image} source={{uri:"https://icones.pro/wp-content/uploads/2021/02/icone-etoile-jaune.png"}}/>
                    <Text>{restaurante.avaliacao}</Text>
                </View>
            </TouchableOpacity>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#cecece',
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