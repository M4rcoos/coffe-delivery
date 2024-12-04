import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "@/components/input";
import { Coffe, useCart } from "@/context/context-cart";
import { config } from "@/config/storage";
import {
  CheckoutFormData,
  checkoutSchema,
} from "@/validator/use-validator-checkout";
import iconLocationDelivery from "@/assets/location-delivery.svg";
import iconDebito from "@/assets/cartao-debito.svg";
import iconLCredito from "@/assets/cartao-credito.svg";
import iconDinheiro from "@/assets/dinheiro.svg";
import iconLixo from "@/assets/lixeira.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { addItemToCart, removeMinusOne, removeItemFromCart,setCart } = useCart();                   
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      pagamento: "DINHEIRO",
    },
  });
 const { setOrderFinalized} = useCart()
  const coffesInCart: Coffe[] = JSON.parse(
    localStorage.getItem(config.LOCAL_STORAGE_ITENS_CART) || "[]",
  );

  const navigate = useNavigate();

  const onSubmit = (data: CheckoutFormData) => {
    const pedidoCompleto = {
      endereco: data, 
      itensCarrinho: coffesInCart, 
      pagamento: selectedPayment, 
    };
    setOrderFinalized(pedidoCompleto)

    
    localStorage.removeItem(config.LOCAL_STORAGE_ITENS_CART) 
    setCart([])
    
    navigate("/orderConfirmed");
  };

  const item: Coffe[] | null = localStorage.getItem(
    config.LOCAL_STORAGE_ITENS_CART,
  )
    ? JSON.parse(
        localStorage.getItem(config.LOCAL_STORAGE_ITENS_CART) as string,
      )
    : null;

  useEffect(() => {
    if (!item || item.length === 0) {
      navigate("/");
    }
  }, [item, navigate]);

  const handleAddToCart = (item: Coffe) => {
    addItemToCart(item);
  };

  const handleRemoveFromCart = (item: Coffe) => {
    removeItemFromCart(item?.id);
  };

  const handleMinusOne = (item: Coffe) => {
    removeMinusOne(item?.id);
  };
  const [selectedPayment, setSelectedPayment] = useState<string>("DINHEIRO");

  const handlePaymentChange = (
    method: "CARTÃO_DE_CRÉDITO" | "CARTÃO_DE_DÉBITO" | "DINHEIRO",
  ) => {
    setSelectedPayment(method);
    setValue("pagamento", method);
  };

  const paymentMethods: Array<
    "CARTÃO_DE_CRÉDITO" | "CARTÃO_DE_DÉBITO" | "DINHEIRO"
  > = ["CARTÃO_DE_CRÉDITO", "CARTÃO_DE_DÉBITO", "DINHEIRO"];

  return (
    <div className="mt-8 flex flex-col gap-10 px-4 lg:flex-row lg:px-40">
      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.error("Erros de validação:", errors);
        })}
        className="flex flex-wrap gap-2"
      >
        <div className="flex max-w-[640px] flex-1 flex-col gap-3">
          {/* Endereço */}
          <div className="flex flex-col">
            <h3 className="mb-4 font-baloo text-title-l text-base-title">
              Complete seu pedido
            </h3>

            <div className="flex flex-1 flex-col gap-3 rounded-md bg-gray-100 p-6">
              <div className="flex items-start gap-2">
                <img src={iconLocationDelivery} alt="" />
                <div>
                  <p className="font-roboto text-text-m">Endereço de Entrega</p>
                  <p className="text-text-s text-base-text">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>
              <div className="max-w-52">
                <InputComponent<CheckoutFormData>
                  name="cep"
                  placeholder="CEP"
                  register={register}
                  errors={errors.cep}
                  className="w-full"
                />
              </div>

              <InputComponent<CheckoutFormData>
                name="rua"
                placeholder="Rua"
                register={register}
                errors={errors.rua}
                className="w-full"
              />
              <div className="flex w-full flex-wrap items-start gap-3">
                <div>
                  <InputComponent<CheckoutFormData>
                    className="max-w-80"
                    name="numero"
                    placeholder="Número"
                    register={register}
                    errors={errors.numero}
                  />
                </div>

                <InputComponent<CheckoutFormData>
                  className="w-full"
                  name="complemento"
                  placeholder="Complemento (opcional)"
                  register={register}
                />
              </div>
              <div className="flex gap-2">
                <InputComponent<CheckoutFormData>
                  name="bairro"
                  placeholder="Bairro"
                  register={register}
                  errors={errors.bairro}
                />

                <InputComponent<CheckoutFormData>
                  name="cidade"
                  placeholder="Cidade"
                  register={register}
                  errors={errors.cidade}
                />

                <InputComponent<CheckoutFormData>
                  name="estado"
                  placeholder="Estado (Ex: SP)"
                  register={register}
                  errors={errors.estado}
                />
              </div>
            </div>
          </div>

          {/* Pagamento */}
          <div className="flex flex-1 gap-3 rounded-md bg-gray-100 p-6">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className={`flex cursor-pointer items-center gap-2 rounded-md p-4 ${
                  selectedPayment === method
                    ? "border-2 border-purple bg-purple-light"
                    : "bg-gray-100"
                }`}
                onClick={() => handlePaymentChange(method)}
              >
                <input
                  type="radio"
                  value={method}
                  checked={selectedPayment === method}
                  readOnly
                  className="hidden"
                />
                <img
                  src={
                    method === "CARTÃO_DE_CRÉDITO"
                      ? iconLCredito
                      : method === "CARTÃO_DE_DÉBITO"
                        ? iconDebito
                        : iconDinheiro
                  }
                  alt={method}
                />
                <span>{method.replace("_DE_", " DE ")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carrinho de Cafés */}
        <div>
          <h3 className="mb-4 font-baloo text-title-l text-base-title">
            Cafés selecionados
          </h3>
          <div className="w-full rounded-md bg-gray-100 p-6 lg:w-96">
            <div className="space-y-4">
              {coffesInCart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <img src={item.image} width={64} height={64} />
                  <span>
                    {item.nome} (x{item.quantidade})
                    <div className="flex gap-2 rounded-md">
                      <div className="flex w-16 items-center justify-around gap-2 rounded-md bg-base-button px-2">
                        <button
                          className="font-roboto text-xl text-purple"
                          onClick={() => handleMinusOne(item)}
                        >
                          -
                        </button>
                        <span className="text-base-text">
                          {item.quantidade}
                        </span>
                        <button
                          className="font-roboto text-base text-purple"
                          onClick={() => handleAddToCart(item)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-1 rounded-md bg-base-button px-1">
                        <img src={iconLixo} />
                        <button
                          onClick={() => handleRemoveFromCart(item)}
                          className="font-roboto text-text-s text-base-text"
                        >
                          REMOVER
                        </button>
                      </div>
                    </div>
                  </span>
                  <span>R$ {item.preco.toFixed(2)}</span>
                </div>
              ))}
              <div className="mt-4 border-t border-gray-300 pt-4">
                <div className="flex justify-between">
                  <span>Total de itens</span>
                  <span>
                    R${" "}
                    {coffesInCart
                      .reduce(
                        (acc, item) => acc + item.preco * item.quantidade,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-l font-bold">Total</span>
                  <span className="text-text-l font-bold">
                    R${" "}
                    {coffesInCart
                      .reduce(
                        (acc, item) => acc + item.preco * item.quantidade + 3.5,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-yellow-dark py-2 text-white"
                >
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
