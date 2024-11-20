import cart from "@/assets/cart-white.svg"
import { useState } from 'react'

interface Coffe {
    id: number,
    nome: string,
    descricao: string,
    image?:string
    preco: number
    categorias: Array<string>,
    quantidade: number,
}
export const CardItem = ({nome,descricao,preco,categorias,quantidade,image}:Coffe)=>{
    let [quantity, setQuantity] = useState <number> (quantidade)
    
    function sumItemToCart() {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }
    function subItemToCart() {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    }
    
    
    return (
        <>
       <div className="ml-0 px-5 bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md max-w-64 mt-14 flex flex-col justify-center items-center">
         <img src={image} className='relative top-[-20px] ' width={120} height={120}/>
           <div className='flex gap-2 w-full items-center justify-center'>
            {
              categorias.map((categoria, index)=>(
               <div>
                 <div className='bg-yellow-light max-w-min rounded-full ' key={index}><p className='text-yellow-dark text-tag font-roboto px-2 py-1 whitespace-nowrap'> {categoria}</p></div>
                    </div>
               ))
              }
            </div>
           
            <p className='font-baloo text-title-s text-base-subtitle mt-4 mb-2'>{nome}</p>
            <p className='font-roboto text-text-s text-base-label text-center'>{descricao}</p>

            <footer className='mt-8 mb-5 flex '>
                <div className='flex items-center gap-1'>
                <p className=' text-text-s font-roboto text-base-text'>R$</p>
                <p className='font-baloo text-2xl font-bold text-base-text'>{preco.toFixed(2)}</p>
                </div>
                <div className='ml-[23px] mr-2 bg-base-button rounded-md flex justify-around items-center gap-2 px-2 w-16'>
                    <button className='text-purple font-roboto text-xl ' onClick={subItemToCart}>-</button>
                    <span className='text-base-text'>{quantity}</span>
                    <button className='text-purple font-roboto text-base' onClick={sumItemToCart}>+</button>
                </div>
                <button className=' rounded-md p-2 transition ease-in-out delay-150 bg-purple-dark hover:-translate-y[-20px] hover:scale-110 hover:bg-purple  duration-300'>
                    <img src={cart}alt="" />
                </button>
            </footer>
         </div>
        </>
    )
}