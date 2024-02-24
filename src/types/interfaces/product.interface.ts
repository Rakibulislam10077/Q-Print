export interface IProduct {
  _id: string;
  productName: string;
  productPhotos: string[];
  brand: Partial<IBrand> & { brandId: string };
  series?: string;
  model?: string;
  specifications: ISpecification[];
  description: IDescription[];
  isQuickOrderActive?: boolean;
  defaultVariant: IDefaultVariant;
  variants: IVariants[];
  bulk?: {
    minOrder: number;
    discount: number;
  };
  seo?: {
    metaTitle: string;
    metaDescription: string;
    metaPhoto: string;
  };
  reviews: IReviews[]; // Assuming reviews are of any type for simplicity
  __v?: number;
  route: {
    params: any; // You can refine the type of params if you know its structure
  };
}

export interface ICategory {
  categoryName: string;
  categoryPhoto: string;
  categoryId: string;
}

export interface IDefaultVariant {
  _id: string;
  variantName: string;
  variantPhotos: string[];
  inStock: number;
  stockAlert: number;
  buyingPrice: number;
  sellingPrice: number;
  discountPercentage: number;
  createdAt: string;
  updatedAt: string;
  discountedPrice: number;
  __v: number;
}
export interface IBrand {
  _id: string;
  brandName: string;
  brandPhoto: string;
}

export type IVariants = {
  variantName: string;
  variantId: string;
  _id: string;
};

export interface ISpecification {
  sectionName: string;
  blocks: {
    title: string;
    description: string;
    _id?: string;
  }[];
  _id?: string;
}

export interface IDescription {
  type: string;
  data: {
    title: string;
  };
  _id: string;
}

export interface IReviews{
  
}
