import React from 'react' // Lorsqu'on crée un component custom, il est impératif d'importer la librairie react. Et de créer un nouveau fichier a chaque nouveau component.
import { StyleSheet, View, Button,TextInput, FlatList,Text } from 'react-native' // Avant de pouvoir utiliser les component dont on a besoin, il faut les importer.
import profil from '../data/mock.json'
import Profilesdata from './profilesdata'
class Search extends React.Component {    
    render() {
        console.log(this.props)
        return(      
            <View>
                     {/* ici nous allons utiliser du JSX exemple : <textInput placeholder="Rechercher/> = React.createElement(TextInput, {placeholder: "Rechercher"}) */}
                <TextInput style={styles.textinput} placeholder="Rechercher"
                />
                <Button color="#E9638B" title="search" onPress={(function(){})}/> 
             <Profilesdata/>
            </View>
        )
    }
}
//créer une variable de style permet de rendre le code plus clair. Comme le fichier CSS permet d'éviter l'utilisation de style dans le HTML. Il faut toujours mettre la variable de style avant l'export.
const styles = StyleSheet.create ({ //Stylesheet permet de d'augmenter les performance de l'appli, il permet d'associer l'objet du style a un indentifiant. Sans Stylesheet, un nouvel objet et crée a chaque appel du style.
    textinput : {
        margin: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius : 20
    }
})
export default Search // Il faut Exporter l'objet a chaque fois que l'ont en crée un. Puisque l'ont souhaite l'utiliser ailleurs. C'est un reflexe qu'il faut avoir.