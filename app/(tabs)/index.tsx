
import Fontisto from '@expo/vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native';
import { array } from '../database';
export default function HomeScreen() {
  const router=useRouter();
const direction=(x)=>{
  router.push({pathname:'/details',params:{item:JSON.stringify(x)}})
}
const [tab,setTab]=useState<any>([]);
const addItem=(x)=>{
setTab((prevItem)=>[...prevItem,x]);
Alert.alert("vous avez mis le menu en favoris");
}
const storedata=async()=>{
    console.log("storedata()");
    try{
await AsyncStorage.setItem('tab',JSON.stringify(tab));
    }catch(e){
        console.log("error");
    }
}
 useEffect(()=>{storedata()},[]);
  useEffect(()=>{storedata()},[tab]);
  console.log("tab:",tab.length);

  return (
    <>
    <SafeAreaView>
      <StatusBar backgroundColor="orange"/>
    <View style={styles.header}>
        <Text style={styles.accueil}>Accueil</Text>
      </View>
      <View style={styles.recette}>
        
        <ScrollView showsVerticalScrollIndicator={false}  >
        {array.map((x,i)=>(<>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} key={i}>
          <View  style={styles.plat}>
         <TouchableOpacity onPress={()=>direction(x)}>
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
          <View><TouchableOpacity onPress={()=>addItem(x)}><Fontisto name="favorite" size={25 } color="white" /></TouchableOpacity> </View>
          
        </View>
         </ScrollView>
        </>))}
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
}

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
