export interface IUserData {
  defaultAddress?: {
    isBilling?: boolean;
    addressId?: string | null;
  };
  billingAddress?: {
    isDefault?: boolean;
    addressId?: string;
  };
  _id: string;
  fullName: string;
  isEmailVerified: boolean;
  phoneNumber: string;
  isPhoneNumberVerified: boolean;
  password: string;
  role: string;
  profilePhoto: string;
  isVerified: boolean;
  wishlist?: any[]; // You may want to define a specific type for wishlist items
  cart?: any[]; // You may want to define a specific type for cart items
  createdAt?: string;
  updatedAt?: string;
  uid?: string;
  __v?: number;
  id?: string;
}
