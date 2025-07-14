
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getData } from '../getData';
import { removeData } from '../removeData';
function Favoris() {
  const [items, setItems] = useState([]);
const router=useRouter();
const direction=(x)=>{
   router.push({pathname:'/details',params:{item:JSON.stringify(x)}});
}

  useEffect(() => {
    const fetchData=async()=>{
      const data=await getData("tab");
      console.log("dataFavoris:",data);
      setItems(data);
    }
    fetchData();
  }, []);
 
  console.log("items:",items);

  const remove=(x)=>{
removeData(x);
const newItem=items.filter((e)=>{return e !== x} );
setItems(newItem);
  }

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
                <View>
                   <TouchableOpacity onPress={()=>remove(x)}>
                  <MaterialIcons name="bookmark-remove" size={30} color="white" />
                  </TouchableOpacity>
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
