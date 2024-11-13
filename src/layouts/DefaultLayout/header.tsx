import logo from "@/assets/logo.svg"
import iconLocation from "@/assets/icon-location.svg"
import cart from "@/assets/cart.svg"

export const Header = () => {
    return (
        <header className="flex h-28 justify-between bg-background px-3 py-8 sm:px-20 sm:py-8  md:px-40 md:py-8 lg:px-40 lg:py-8 items-center">
            <img src={logo} alt='icone de um copo de cafe roxo e um texto ao lado escrito coffe delivery' />
            <div className='flex gap-3'>
                <div className='flex justify-center items-center gap-1 px-2 py-[10px] bg-purple-light h-[38px] rounded-md'>
                    <img src={iconLocation} width={22} height={22} alt='icone de um copo de cafe roxo e um texto ao lado escrito coffe delivery' />
                    <p className='text-purple-dark font-roboto text-text-s'>Porto Alegre, RS</p>
                </div>
                <div className='flex bg-yellow-light p-2 rounded-md  items-center justify-center relative'>
                    <img src={cart} width={22} height={22} alt='icone de um carrinho de compras de supermercado' />
                    <span className='text-roboto absolute top-[-10px] right-[-4px] bg-yellow-dark rounded-full w-5 h-5 flex items-center justify-center text-text-s text-white '>3</span>
                </div>
            </div>
        </header>
    )
}