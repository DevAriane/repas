import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { array } from '../database';
import { saveData } from '../saveData';
import EvilIcons from '@expo/vector-icons/EvilIcons';
function Filter(a){
    console.log("element filtre :",a);
    const {image,titre,temps,categorie}=a
    return(<>
     <ScrollView>
     <View  style={styles.plat}>
         <TouchableOpacity >
          <Image
          source={image}
          resizeMode='cover'
          style={styles.image}
          />
           </TouchableOpacity>
          <View >
            <Text style={{color:'white',fontWeight:"bold",fontSize:16}}  numberOfLines={2}
      ellipsizeMode="tail">{titre}</Text>
             <Text style={{color:'white',fontWeight:"bold",fontSize:16}}>{temps}</Text>
              <Text style={{color:'white',fontWeight:"bold",fontSize:16}}>{categorie}</Text> 
          </View>
          <View><TouchableOpacity ><Fontisto name="favorite" size={25 } color="white" /></TouchableOpacity> </View>
          
        </View>
         </ScrollView>
    </>)
}
export default Filter;
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
  input:{
    borderColor:'ligth-gray',
    height:40,
    width:"98%",
    borderRadius:10,
  backgroundColor:"white",
  margin:4,
  display:'flex',
  alignContent:'center',
  justifyContent:'space-between'

  }
});
