import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "@/components/input";


// Schema de validação Zod
const checkoutSchema = z.object({
    cep: z.string().min(8, "CEP inválido"),
    rua: z.string().min(1, "Rua é obrigatória"),
    numero: z.string().min(1, "Número é obrigatório"),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    cidade: z.string().min(1, "Cidade é obrigatória"),
    complemento: z.string(),
    estado: z.string().length(2, "Estado inválido"),
    pagamento: z.enum(["CARTÃO_DE_CRÉDITO", "CARTÃO_DE_DÉBITO", "DINHEIRO"]),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

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

    const onSubmit = (data: CheckoutFormData) => {
        const pedidoCompleto = {
            endereco: data,
            itensCarrinho: mockCarrinho,
        };

        console.log("Pedido Completo:", pedidoCompleto);
    };
    const mockCarrinho = [
        { id: 1, nome: "Expresso Tradicional", preco: 9.9, quantidade: 1 },
        { id: 2, nome: "Latte", preco: 19.8, quantidade: 2 },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-40 mt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 bg-gray-100 p-6 rounded-md">
                <InputComponent<CheckoutFormData>
                    name="cep"
                    placeholder="CEP"
                    register={register}
                    errors={errors.cep}
                />

                {/* Rua */}
                <InputComponent<CheckoutFormData>
                    name="rua"
                    placeholder="Rua"
                    register={register}
                    errors={errors.rua}
                />

                {/* Número */}
                <InputComponent<CheckoutFormData>
                    name="numero"
                    placeholder="Número"
                    register={register}
                    errors={errors.numero}
                />

                {/* Complemento (opcional) */}
                <InputComponent<CheckoutFormData>
                    name="complemento"
                    placeholder="Complemento (opcional)"
                    register={register}
                />

                {/* Bairro */}
                <InputComponent<CheckoutFormData>
                    name="bairro"
                    placeholder="Bairro"
                    register={register}
                    errors={errors.bairro}
                />

                {/* Cidade */}
                <InputComponent<CheckoutFormData>
                    name="cidade"
                    placeholder="Cidade"
                    register={register}
                    errors={errors.cidade}
                />

                {/* Estado */}
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
            <div className="bg-gray-100 p-6 rounded-md w-full lg:w-96">
                <h3 className="font-baloo text-title-l text-base-title mb-4">
                    Cafés selecionados
                </h3>
                <div className="space-y-4">
                    {mockCarrinho.map((item) => (
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
                                R$ {mockCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
