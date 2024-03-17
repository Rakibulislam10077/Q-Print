import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
    try {
        AsyncStorage.setItem('token', accessToken);
    } catch (error) {
        console.log(error);
    }
    
}