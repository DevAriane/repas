import AsyncStorage from '@react-native-async-storage/async-storage';
export const removeData=async(key)=>{
    try{
        console.log("key removeItem:",key);
        await AsyncStorage.removeItem(key);
    }
    catch(e){
        console.log("votre erreur :",e);
    }
}