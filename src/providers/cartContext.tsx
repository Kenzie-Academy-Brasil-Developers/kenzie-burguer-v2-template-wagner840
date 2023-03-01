import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Product {
  name: string;
  category: string;
  id: number;
  price: number;
  img: string;
}

interface iCartContext {
  cart: Array<Product>;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;

  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;

  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface iCartContextProps {
  children: React.ReactNode;
}

export const cartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartContextProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const token = localStorage.getItem('@Token:');

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (token) {
      getProducts();
    }
  }, [token]);

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        total,
        setTotal,
        modal,
        setModal,
        products,
        setProducts,
        search,
        setSearch,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
