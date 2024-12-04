import { config } from "@/config/storage";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

export interface Coffe {
  id: number;
  nome: string;
  descricao: string;
  image?: string;
  preco: number;
  categorias: Array<string>;
  quantidade: number;
}
export interface Address {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    complemento: string;
    estado: string;
}
interface OrderFinalized {
    endereco: Address
    itensCarrinho: Coffe[];
    pagamento: string;
}
interface cartContextType {
  cart: Coffe[]; // Carrinho agora contém itens do tipo `Coffe`
  addItemToCart: (item: Coffe) => void; // Aceita um objeto do tipo `Coffe`
  removeMinusOne: (id: number) => void; // Remove pelo `id` do item
  removeItemFromCart: (id: number) => void; // Remove pelo `id` do item
  orderFinalized: OrderFinalized | null
  setOrderFinalized: React.Dispatch<React.SetStateAction<OrderFinalized | null>>
  setCart: React.Dispatch<React.SetStateAction <Coffe[]|null>>
  
}

const CartContext = createContext<cartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffe[] | null>(null);
  const[orderFinalized, setOrderFinalized] = useState<OrderFinalized | null>(null)

  // Carrega o carrinho do localStorage na inicialização
  useEffect(() => {
    const storedCart = localStorage.getItem(config.LOCAL_STORAGE_ITENS_CART);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }
  }, []);

  // Atualiza o localStorage sempre que o carrinho mudar
  useEffect(() => {
    if (cart !== null) {
      localStorage.setItem(
        config.LOCAL_STORAGE_ITENS_CART,
        JSON.stringify(cart),
      );
    }
  }, [cart]);
  

  function addItemToCart(item: Coffe) {
    if (cart === null) return;

    setCart((prevCart) => {
      const existingItemIndex = prevCart!.findIndex(
        (cartItem) => cartItem.id === item.id,
      );

      // Se o item já está no carrinho, incrementa a quantidade
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart!]; // Cria uma cópia do carrinho
        const updatedItem = { ...updatedCart[existingItemIndex] }; // Cria uma cópia do item
        updatedItem.quantidade += 1; // Incrementa a quantidade
        updatedCart[existingItemIndex] = updatedItem; // Substitui pelo item atualizado
        return updatedCart;
      }

      return [...prevCart!, { ...item, quantidade: 1 }];
    });
  }

  function removeMinusOne(id: number) {
    if (cart === null) return;

    setCart((prevCart) => {
      return prevCart!
        .map((cartItem) => {
          if (cartItem.id === id && cartItem.quantidade > 0) {
            return { ...cartItem, quantidade: cartItem.quantidade - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantidade > 0); // Remove itens com quantidade 0
    });
  }
  function removeItemFromCart(id: number) {
    if (cart === null) return;
    setCart((prevCart) => {
      return prevCart!
        .map((cartItem) => {
          // Se o item tem o ID correspondente, reduz a quantidade
          if (cartItem.id === id && cartItem.quantidade > 0) {
            return { ...cartItem, quantidade: (cartItem.quantidade = 0) };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantidade > 0); // Remove itens com quantidade 0
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart || [],
        addItemToCart,
        removeMinusOne,
        removeItemFromCart,
        orderFinalized: orderFinalized,
        setOrderFinalized,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart, CartProvider };
