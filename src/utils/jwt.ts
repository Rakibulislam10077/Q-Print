import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

export const decodedToken = (token:string) => {
    // const atoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJZU25vdTRmeEU5IiwiX2lkIjoiNjVmN2Q0ZjZiYjg2ZGY0ZjMzMzJjYjkxIiwiZnVsbE5hbWUiOiJOIEkgUmltb24iLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6InBob3RvY2hlY2tAZ21haWwuY29tIiwiaXNQaG9uZU51bWJlclZlcmlmaWVkIjpmYWxzZSwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MTA3NDg4MTAsImV4cCI6MTcxMDgzNTIxMH0.GteaEcfIuPtrpw7_I9PXSbEHwXXm39Gj7QjJrE4nmUo';
   console.log(token);
   
   try {
    const decoded = jwtDecode(token);
    return decoded;
} catch (error) {
    console.error("Error decoding token:", error);
    return null;
}
};
