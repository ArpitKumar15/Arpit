export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserPreferences {
  style: string;
  colors: string[];
  category: string;
}

export interface StyleAdvisorInput {
  segment: 'Womenswear' | 'Menswear';
  faceShape: string;
  skinTone: string;
  height: string;
  occasion: string;
}

export interface StyleAdvice {
  product: Product;
  explanation: string;
}