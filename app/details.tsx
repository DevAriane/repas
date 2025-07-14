import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View ,StatusBar} from "react-native";
function Details(){
    const [tab,setTab]=useState<any>([]);
    const router=useRouter();
    const params=useLocalSearchParams();
    const item=params.item?JSON.parse(params.item):null;  
    const {categorie,etapes,id,image,ingredients,temps,titre}=item;


 
    return(<>
    <SafeAreaView style={{backgroundColor:'whitesmoke'}}>
         <StatusBar backgroundColor="orange"/>
        <View style={styles.header}>
           <TouchableOpacity onPress={()=>router.back()}><EvilIcons name="arrow-left" size={35} color="white" /></TouchableOpacity> 
            <View><Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>Details</Text></View>
                   <TouchableOpacity ><EvilIcons name="arrow-right" size={35} color="white" /></TouchableOpacity> 
        </View>
         <View style={styles.content_image}>
            <Image source={image}
            style={styles.image}
         />
         </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'whitesmoke',margin:15}}>
            
                <Text style={{ fontSize:18,color:"grey",fontWeight:'bold',fontStyle:'italic'}}>{titre}</Text>
                 <Text style={{ fontSize:15,fontWeight:'bold',}}>temps de cuisson: {temps}</Text>
                  <Text style={{ fontSize:15,fontWeight:'bold',}}>Liste des ingredients</Text>
                  {
                    ingredients.map((x,i)=>{return(<>
                    <View style={styles.ingredient} key={i}>
                        <Text>{i}.{x}</Text>
                    </View>
                    </>)})
                  }
                   <Text style={{ fontSize:15,fontWeight:'bold',}}>Etapes de preparation</Text>
                    {
                    etapes.map((x,i)=>{return(<>
                    <View style={styles.ingredient} key={i}>
                        <Text>{i}.{x}</Text>
                    </View>
                    </>)})
                  }
            
        </ScrollView>
    </SafeAreaView></>)

    
}

const styles=StyleSheet.create({
    header:{
        top:0,
        backgroundColor:'orange',
        height:"10%",
        width:"100%",
        position:"fixed",
        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-around'
    },
    image:{
width:"98%",
height:"50%",
borderRadius:10
    },
    content_image:{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
    width:"100%",
height:"50%",
marginTop:"-20%",
marginBottom:"-20%"
    },
    ingredient:{backgroundColor:'white',
        padding:4,
        borderRadius:10,
        margin:5
    },
});
export default Details;