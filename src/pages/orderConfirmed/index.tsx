import entregador from "@/assets/entregador.svg";

import { useCart } from "@/context/context-cart";

import iconLocation from '@/assets/icon-rounded-location.svg'
import iconRelogio from '@/assets/icon-rounded-clock.svg'
import iconPayment from '@/assets/icon-rounded-payment.svg'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const OrderConfirmation = () => {
    const navigate = useNavigate()
    const {orderFinalized} = useCart()
    useEffect(()=>{
      if(!orderFinalized?.endereco){
        navigate('/')
      }
    })
  return (
    <div className="mt-20 flex min-h-screen items-start justify-center bg-gray-50">
      {/* Título e descrição */}
      <div>
        <div className="mb-10 text-start">
          <h1 className="text-3xl font-bold text-yellow-600">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-lg text-gray-600">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>

        {/* Card de informações */}
        <div className="rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-yellow via-purple to-purple p-[1px]">
          <div className="rounded-tr-3xl rounded-bl-3xl bg-white p-6">
            <div className="mb-4 flex items-start gap-2">
              <img src={iconLocation}/>
              <div>
                <p className="text-gray-700 font-bold">Entrega em</p>
                <p className="text-gray-900">
                {orderFinalized?.endereco.rua} {orderFinalized?.endereco.numero}/{orderFinalized?.endereco.complemento}<br />{orderFinalized?.endereco.bairro} -
                  {' '}{orderFinalized?.endereco.cidade} - {orderFinalized?.endereco.estado}
                </p>
              </div>
            </div>
            <div className="mb-4 flex items-start gap-2">
              <img src={iconRelogio}  />
              <div>
                <p className="text-gray-700 font-bold">Previsão de entrega</p>
                <p className="text-gray-900">20 min - 30 min</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
          <img src={iconPayment}  />
              <div>
                <p className="text-gray-700 font-bold">Pagamento na entrega</p>
                <p className="text-gray-900">{orderFinalized?.pagamento}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagem do entregador */}
      <div className="ml-8">
        <img src={entregador} alt="Entregador" className="w-96 rounded-md" />
      </div>
    </div>
  );
};
