export const getBaseUrl = ():string => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.0.183:5000/api/v1';
}