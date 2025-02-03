export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tags: string[];
  category: string;
}

export interface Banner {
  id: string;
  image: string;
  title: string;
}

export interface RootState {
  products: {
    items: Product[];
    loading: boolean;
    error: string | null;
  };
  banners: {
    items: Banner[];
    loading: boolean;
    error: string | null;
  };
}

export interface SearchState {
  query: string;
  results: Product[];
  loading: boolean;
  error: string | null;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

export interface PaymentMethod {
  id: string;
  type: 'card';
  last4: string;
  expiryDate: string;
}

export interface PaymentState {
  selectedMethod: PaymentMethod | null;
  loading: boolean;
  error: string | null;
}

export interface OrderConfirmationScreenProps {
  route?: {
    params?: {
      orderNumber?: string;
    };
  };
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export type RootStackParamList = {
  // ... other routes
  ProductDetails: {product: Product};
};
