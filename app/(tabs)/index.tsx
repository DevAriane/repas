
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { array } from '../database';
import { saveData } from '../saveData';
import Filter from '../filter';
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function HomeScreen() {
  const router=useRouter();
  const [name,setName]=useState('');
  const [val,setVal]=useState('false');
const direction=(x)=>{
  router.push({pathname:'/details',params:{item:JSON.stringify(x)}})
}
const [tab,setTab]=useState<any>([]);
const addItem=(x)=>{
setTab((prevItem)=>[...prevItem,x]);
Alert.alert("vous avez mis le menu en favoris");
}

 useEffect(()=>{saveData("tab",tab)},[tab]);
  
  console.log("tab:",tab.length);

  
    const refresh=(name)=>{
    const newArray=  array.filter((e)=> e.titre == name);
    console.log("newArray:",newArray);
    return <Filter a={newArray}/>
 }
  

  return (
    <>
    <SafeAreaView>
      <StatusBar backgroundColor="orange"/>
    <View style={styles.header}>
        <Text style={styles.accueil}>Accueil</Text>
      </View>
      <View style={styles.recette}>
        <View>
          <Text style={{fontSize:18,fontStyle:'italic',fontWeight:'condensed',margin:4}}>Hello les ami (e) s !!!</Text>
          <View style={styles.input}>
          <TextInput
          placeholder='rechercher'
          placeholderTextColor='gray'
          
          value={name}
          onChangeText={setName}
          />
          <TouchableOpacity onPress={()=>setVal("true")}><EvilIcons name="search" size={30} color="black" /></TouchableOpacity>
          </View>
        </View>
        {val=== "true" ? refresh(name) : <ScrollView showsVerticalScrollIndicator={false}  >
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
        </ScrollView> }
       
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
  input:{
    borderColor:'ligth-gray',
    height:40,
    width:"98%",
    borderRadius:10,
  backgroundColor:"white",
  margin:4,
  display:'flex',
  alignContent:'center',
  justifyContent:'space-evenly',
  flexDirection:"row",
  alignItems:'center',

  }
});
