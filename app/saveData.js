import AsyncStorage from '@react-native-async-storage/async-storage';

//  Enregistrer une donnée
export const saveData=async(key,value)=>{
    try{
const data=JSON.stringify(value);
console.log("dataSave",data);
await AsyncStorage.setItem(key,data);
    }
    catch(e){
        console.log("votre erreur",e);
    }
}