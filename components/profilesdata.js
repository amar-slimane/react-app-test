import React from 'react' // Lorsqu'on crée un component custom, il est impératif d'importer la librairie react. Et de créer un nouveau fichier a chaque nouveau component.
import { StyleSheet, View, FlatList,Text } from 'react-native' // Avant de pouvoir utiliser les component dont on a besoin, il faut les importer.
import profil from '../data/mock.json'
class profilesdata extends React.Component {
    render() {
        return(
            <View style={style.main_container}>
                {/* <FlatList
          data={profil}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Text>{item.first_name}</Text>}
        /> */}
        <Text style={style.title_text}>Titre du profil.</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    main_container: {
        height: 190
    },
    title_text: {

    }
})

export default profilesdata