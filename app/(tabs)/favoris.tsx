import AsyncStorage from '@react-native-async-storage/async-storage';
function Favoris(){
        const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // Enregistrer l'erreur
      }
    } 
    getData();
    console.log("getData():",getData());
    return(<>
    </>)
}
export default Favoris;