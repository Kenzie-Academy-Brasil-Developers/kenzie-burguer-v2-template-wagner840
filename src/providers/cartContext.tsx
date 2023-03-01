import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface iCartContextProps {
  children: React.ReactNode;
}
interface iCartContext {
  cart: Array<{ name: string; id: number; price: number; img: string }>;
  setCart: React.Dispatch<React.SetStateAction<unknown>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;

  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  products: Array<{
    name: string;
    category: string;
    id: number;
    price: number;
    img: string;
  }>;
  setProducts: React.Dispatch<React.SetStateAction<unknown[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: Array<{
    name: string;
    category: string;
    id: number;
    price: number;
    img: string;
  }>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<unknown[]>>;
}

export const cartContext = createContext({} as iCartContext);
export const CartProvider = ({ children }: iCartContextProps) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState<
    Array<{
      name: string;
      category: string;
      id: number;
      price: number;
      img: string;
    }>
  >([]);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const token = localStorage.getItem('@Token:');

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(
          response.data as {
            name: string;
            category: string;
            id: number;
            price: number;
            img: string;
          }[]
        );
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
