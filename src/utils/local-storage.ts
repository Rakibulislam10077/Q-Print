import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToAsyncStorage = async (key: string, value: string) => {
    try {
        if (!key || typeof AsyncStorage === 'undefined') {
            throw new Error("AsyncStorage is not available or key is empty.");
        }
        await AsyncStorage.setItem(key, value);
        return true; // Indicate success
    } catch (error) {
        console.log(error);
        return false; // Indicate failure
    }
};


export const getFromAsyncStorage = async (key: string, ) => {
    try {
        if (!key || typeof AsyncStorage === 'undefined') {
            throw new Error("AsyncStorage is not available or key is empty.");
        }
        await AsyncStorage.getItem(key);
        return true; // Indicate success
    } catch (error) {
        console.log(error);
        return false; // Indicate failure
    }
};
