import cartSvg from "@/assets/cart-white.svg"
import { Coffe, useCart } from "@/context/context-cart"
import { useState } from 'react'


export const CardItem = ({nome,descricao,preco,categorias,image, quantidade, id}:Coffe)=>{
    const { cart, addItemToCart, removeItemFromCart } = useCart();

    const item = {
        nome,
        descricao,
        preco,
        categorias,
        image,
        quantidade:1,
        id,
    }

    const currentItem = cart.find((cartItem) => cartItem.id === id);
    const quantity = currentItem?.quantidade || 0;

    const handleAddToCart = () => {
        addItemToCart(item);
    };

    const handleRemoveFromCart = () => {
        removeItemFromCart(id); // Remove do contexto
    };

  
    
    
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
                    <button className='text-purple font-roboto text-xl ' onClick={handleRemoveFromCart}>-</button>
                    <span className='text-base-text'>{quantity}</span>
                    <button className='text-purple font-roboto text-base' onClick={handleAddToCart}>+</button>
                </div>
                <button className=' rounded-md p-2 transition ease-in-out delay-150 bg-purple-dark hover:-translate-y[-20px] hover:scale-110 hover:bg-purple  duration-300'>
                    <img src={cartSvg}alt="" />
                </button>
            </footer>
         </div>
        </>
    )
}