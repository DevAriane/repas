
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Favoris() {
  const [items, setItems] = useState([]);

  const getData = async () => {
    console.log("getData()");
    try {
      const tab = await AsyncStorage.getItem('tab');
      console.log("tabFavoris:", tab);
      if (tab !== null) {
        setItems(JSON.parse(tab));
        return tab;
      }
    } catch (e) {
      console.log("Erreur lors du chargement:", e);
    }
  };

  useEffect(() => {
    getData();
  }, [items]);
  console.log("items:",items);

  return (
    <>
        <StatusBar backgroundColor="orange"/>
        <View style={styles.header}>
            <Text style={styles.accueil}>Mes favoris</Text>
          </View>
       <ScrollView showsVerticalScrollIndicator={false}  >
              {items.map((x,i)=>(<>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} key={i}>
                <View  style={styles.plat}>
               <TouchableOpacity >
                <Image
                source={x.image}
                resizeMode='cover'
                style={styles.image}
                />
                 </TouchableOpacity>
                <View >
                  <Text style={{color:'white',fontWeight:"bold",fontSize:16}}  numberOfLines={2}
            ellipsizeMode="tail">{x.titre}</Text>
                   <Text style={{color:'white',fontWeight:"bold",fontSize:16}}>{x.temps}</Text>
                    <Text style={{color:'white',fontWeight:"bold",fontSize:16}}>{x.categorie}</Text> 
                </View> 
              </View>
               </ScrollView>
              </>))}
              </ScrollView>
    </>
  );
}

export default Favoris;
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  menu:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  header:{
  top:0,
  width:"100%",
  height:"10%",
  display:"flex",
  alignItems:"center",
  justifyContent:'center',
     
backgroundColor:"orange",

  },
  accueil:{
    color:"white",
fontSize:20,
fontWeight:"bold"
  },
  recette:{
marginHorizontal:10,
marginTop:10,
  },
  image:{
    width:50,
    height:50,
    borderRadius:7,
    borderColor:"transparent",
  },
  plat:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'orange',
    margin:5,
    width:340,
    height:100,
    borderRadius:10,
  },
});
