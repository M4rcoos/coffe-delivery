import logo from "@/assets/logo.svg";
import iconLocation from "@/assets/icon-location.svg";
import cartSvg from "@/assets/cart.svg";
import { Link } from "react-router-dom";
import { useCart } from "@/context/context-cart";


export const Header = () => {
  const { cart } = useCart();
  console.log("🚀 ~ Header ~ cart:", cart)

  return (
    <header className="bg-background flex h-28 items-center justify-between px-3 py-8 sm:px-3 sm:py-8 md:px-3 md:py-8 lg:px-40 lg:py-8">
        <Link to={'/'}>
        <img
          src={logo}
          alt="icone de um copo de cafe roxo e um texto ao lado escrito coffe delivery"
        />

        </Link>
      <div className="flex gap-3">
        <div className="flex h-[38px] items-center justify-center gap-1 rounded-md bg-purple-light px-2 py-[10px]">
          <img
            src={iconLocation}
            width={22}
            height={22}
            alt="icone de um copo de cafe roxo e um texto ao lado escrito coffe delivery"
          />
          <p className="font-roboto text-text-s text-purple-dark">
            Porto Alegre, RS
          </p>
        </div>
        <Link
          to={cart.length > 0 ? "/checkout" : "/"}
          className="relative flex items-center justify-center rounded-md bg-yellow-light p-2"
        >
          <img
            src={cartSvg}
            width={22}
            height={22}
            alt="icone de um carrinho de compras de supermercado"
          />
          <span className="text-roboto absolute right-[-4px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark text-text-s text-white">
            {cart.length}
          </span>
        </Link>
      </div>
    </header>
  );
};
