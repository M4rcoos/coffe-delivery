import { z } from "zod";

export const checkoutSchema = z.object({
    cep: z.string().min(8, "CEP inválido"),
    rua: z.string().min(1, "Rua é obrigatória"),
    numero: z.string().min(1, "Número é obrigatório"),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    cidade: z.string().min(1, "Cidade é obrigatória"),
    complemento: z.string(),
    estado: z.string().min(2, "Estado inválido"),
    pagamento: z
    .enum(["CARTÃO_DE_CRÉDITO", "CARTÃO_DE_DÉBITO", "DINHEIRO"])
    .refine((value) => value !== undefined, {
      message: "Selecione um método de pagamento",
    }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;