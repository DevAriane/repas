import AsyncStorage from '@react-native-async-storage/async-storage';
//  Récupérer une donnée
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(" Erreur lors de la récupération :", e);
    return null;
  }
};