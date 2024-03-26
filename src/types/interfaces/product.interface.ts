export interface IBrand {
  brandName: string;
  brandPhoto: string;
  brandId: string;
}

export interface ISubcategory {
  subcategoryName: string;
  subcategoryId: string;
}

export interface ICategory {
  categoryName: string;
  categoryPhoto: string;
  categoryId: string;
  subcategory: ISubcategory;
}

export interface IVariants {
  isDefault: boolean;
  variantName: string;
  variantPhotos: string[];
  inStock: number;
  stockAlert: number;
  sellingPrice: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
  discountedPrice:string
}

export interface IProduct {
  _id: string;
  productName: string;
  brand: IBrand;
  category: ICategory;
  productPhotos: string[];
  variants: IVariants[];
  series: string;
  productModel: string;
  isQuickOrderActive: boolean;
  __v: number;
  totalReview: number;
  averageRating: number | null;
  totalSoldQuantity: number;
}
