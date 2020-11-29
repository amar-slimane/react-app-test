import React from 'react' // Lorsqu'on crée un component custom, il est impératif d'importer la librairie react. Et de créer un nouveau fichier a chaque nouveau component.
import { StyleSheet, View, FlatList,Text, Image } from 'react-native' // Avant de pouvoir utiliser les component dont on a besoin, il faut les importer.
import profil from '../data/mock.json'
class profilesdata extends React.Component {
    render() {
        return(
            <View >
               
                   <FlatList style={styles.main_container}
          data={profil}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Text style={styles.first_name}>  <Image style={styles.logo} source={{uri:item.photo}}/>
          {item.first_name} 
         
            
          </Text>}
          
        />  
      </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        height: 190
    },
    first_name: {
        color: '#2D2D2D',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    last_name: {

    },
    logo: {
        width: 66,
        height: 58,
        borderRadius: 30,
      },
})
export default profilesdata