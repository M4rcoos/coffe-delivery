import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "@/components/input";
import { Coffe } from "@/context/context-cart";
import { config } from "@/config/storage";
import { CheckoutFormData, checkoutSchema } from "@/validator/use-validator-checkout";


export const Checkout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            pagamento: "CARTÃO_DE_CRÉDITO",
        },
    });
    let coffesInCart: Coffe[] = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_ITENS_CART) || '')
    const onSubmit = (data: CheckoutFormData) => {
        const pedidoCompleto = {
            endereco: data,
            itensCarrinho: coffesInCart
        };

        console.log("Pedido Completo:", pedidoCompleto);
    };


    return (


        <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-40 mt-8">
            <div className="flex flex-col flex-1">
                <h3 className="font-baloo text-title-l text-base-title mb-4">
                    Cafés selecionados
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 bg-gray-100 p-6 rounded-md">
                    <InputComponent<CheckoutFormData>
                        name="cep"
                        placeholder="CEP"
                        register={register}
                        errors={errors.cep}
                    />

                    <InputComponent<CheckoutFormData>
                        name="rua"
                        placeholder="Rua"
                        register={register}
                        errors={errors.rua}
                    />

                    <InputComponent<CheckoutFormData>
                        name="numero"
                        placeholder="Número"
                        register={register}
                        errors={errors.numero}
                    />

                    <InputComponent<CheckoutFormData>
                        name="complemento"
                        placeholder="Complemento (opcional)"
                        register={register}
                    />

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
                        placeholder="Estado"
                        register={register}
                        errors={errors.estado}
                    />

                    <button
                        type="submit"
                        className="w-full bg-yellow-dark text-white py-2 rounded-md"
                    >
                        CONFIRMAR PEDIDO
                    </button>
                </form>
            </div>

            <div>
                <h3 className="font-baloo text-title-l text-base-title mb-4">
                    Cafés selecionados
                </h3>
                <div className="bg-gray-100 p-6 rounded-md w-full lg:w-96">
                    <div className="space-y-4">
                        {coffesInCart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center"
                            >
                                <span>
                                    {item.nome} (x{item.quantidade})
                                </span>
                                <span>R$ {item.preco.toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="border-t border-gray-300 mt-4 pt-4">
                            <div className="flex justify-between">
                                <span>Total de itens</span>
                                <span>
                                    R$ {coffesInCart.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
