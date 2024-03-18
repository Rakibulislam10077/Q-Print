import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFromAsyncStorage, setToAsyncStorage } from "../utils/local-storage";
import { STORAGE_KEY } from "../constants/storageKey";
import { decodedToken } from "../utils/jwt";

export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
   return setToAsyncStorage(STORAGE_KEY, accessToken as string);
}

export const getuserInfo  = async () =>{
    const authAsyncToken = await getFromAsyncStorage(STORAGE_KEY);
    
    if(authAsyncToken){
        const decodedData = decodedToken(authAsyncToken);
        console.log(decodedData, '======hello');
        
        return decodedData;
    }
    else{
        return 'lfkjdslkfj'
    }
    
}


export const isLoggedIn = async () =>{
    const authAsyncToken = await getFromAsyncStorage(STORAGE_KEY);
    return !! authAsyncToken
}