import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFromAsyncStorage, setToAsyncStorage } from "../utils/local-storage";
import { STORAGE_KEY } from "../constants/storageKey";
import { decodedToken } from "../utils/jwt";

export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
   return setToAsyncStorage(STORAGE_KEY, accessToken as string);
}

export const getuserInfo  = async () =>{
    const authAsyncStorage = await getFromAsyncStorage(STORAGE_KEY);
    console.log(typeof(authAsyncStorage));
    
    if(authAsyncStorage){
        const decodedData = decodedToken(authAsyncStorage);
    }
    
}