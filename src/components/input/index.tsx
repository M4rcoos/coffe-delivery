import { FieldError, UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    register: UseFormRegister<T>; // Tipagem do register genérico
    name: Path<T>; // Nome do campo baseado no schema
    placeholder: string; // Placeholder para o input
    errors?: FieldError; // Mensagem de erro opcional
    type?: string; // Tipo de input, padrão "text"
}

export const InputComponent = <T extends FieldValues>({
    register,
    name,
    placeholder,
    errors,
    type = "text", // Valor padrão para o tipo de input
}: InputProps<T>) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)} // Agora 'name' é do tipo 'Path<T>'
                className={`w-full border rounded p-2 ${errors ? "border-red-500" : "border-gray-300"
                    }`}
            />
            {errors?.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
            )}
        </div>
    );
};
