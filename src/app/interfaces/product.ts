export interface Product {
  _id: string;
  category_id: string;
  name : string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  ratingCount: number;
  is_featured : boolean
  is_recent: boolean
  description : string
}
