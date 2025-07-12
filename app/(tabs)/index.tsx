
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { array } from '../database';
export default function HomeScreen() {
  const router=useRouter();
const direction=(x)=>{
  router.push({pathname:'/details',params:{item:JSON.stringify(x)}})
}
  
  return (
    <>
    <SafeAreaView>
      <StatusBar backgroundColor="orange"/>
    <View style={styles.header}>
        <Text style={styles.accueil}>Accueil</Text>
      </View>
      <View style={styles.recette}>
        
        <ScrollView showsVerticalScrollIndicator={false}  >
        {array.map((x)=>(<>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <TouchableOpacity onPress={()=>direction(x)} style={styles.plat}>
          <Image
          source={x.image}
          resizeMode='cover'
          style={styles.image}
          />
          <View >
            <Text style={{color:'white',fontWeight:"bold",fontSize:16}}  numberOfLines={2}
      ellipsizeMode="tail">{x.titre}</Text>
             <Text style={{color:'white',fontWeight:"bold",fontSize:16}}>{x.temps}</Text>
              <Text style={{color:'white',fontWeight:"bold",fontSize:16}}>{x.categorie}</Text> 
          </View>
          
         </TouchableOpacity>
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
