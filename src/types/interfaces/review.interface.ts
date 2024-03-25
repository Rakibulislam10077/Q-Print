export interface IReview {
    _id: string;
    orderId: string;
    reviewer: {
        fullName: string;
        profilePhoto: string;
        email: string;
        userId: string;
    };
    product: {
        productName: string;
        brandName: string;
        productPhoto: string;
        productId: string;
    };
    rating: number;
    comment: string;
    reviewPhotos: string[];
    createdAt: string;
    updatedAt: string;
    reply: string;
    __v: number;
}