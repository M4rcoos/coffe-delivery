import tradicional from "@/assets/coffes/cafe-tradicional.svg"
import americano from "@/assets/coffes/expresso-americano.svg"
import cremoso from "@/assets/coffes/expresso-cremoso.svg"
import gelado from "@/assets/coffes/expresso-gelado.svg"
import comLeite from "@/assets/coffes/cafe-com-leite.svg"
import latte from "@/assets/coffes/latte.svg"
import capuccino from "@/assets/coffes/capuccino.svg"
import macchiato from "@/assets/coffes/macchiato.svg"
import mocaccino from "@/assets/coffes/mocaccino.svg"
import chocolateQuente from "@/assets/coffes/chocolate-quente.svg"
import cubano from "@/assets/coffes/cubano.svg"
import havaiano from "@/assets/coffes/havaiano.svg"
import arabe from "@/assets/coffes/arabe.svg"
import irlandes from "@/assets/coffes/irlandes.svg"



export const coffee = [
    {
        id: 1,
        nome: "Expresso Tradicional",
        descricao: "O tradicional café feito com água quente e grãos moídos",
        preco: 9.90,
        categorias: ["Tradicional"],
        image:tradicional,
        quantidade: 0
    },
    {
        id: 2,
        nome: "Expresso Americano",
        descricao: "Expresso diluído, menos intenso que o tradicional",
        preco: 9.90,
        image:americano,
        categorias: ["Tradicional"],
        quantidade: 0
    },
    {
        id: 3,
        nome: "Expresso Cremoso",
        descricao: "Café expresso tradicional com espuma cremosa",
        preco: 9.90,
        image:cremoso,
        categorias: ["Tradicional"],
        quantidade: 0
    },
    {
        id: 4,
        nome: "Expresso Gelado",
        descricao: "Bebida preparada com café expresso e cubos de gelo",
        preco: 9.90,
        image:gelado,
        categorias: ["Tradicional", "Gelado"],
        quantidade: 0
    },
    {
        id: 5,
        nome: "Café com Leite",
        descricao: "Meio a meio de expresso tradicional com leite vaporizado",
        preco: 9.90,
        image:comLeite,
        categorias: ["Tradicional", "Com Leite"],
        quantidade: 0
    },
    {
        id: 6,
        nome: "Latte",
        descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        preco: 9.90,
        image:latte,
        categorias: ["Tradicional", "Com Leite"],
        quantidade: 0
    },
    {
        id: 7,
        nome: "Capuccino",
        descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
        preco: 9.90,
        image:capuccino,
        categorias: ["Tradicional", "Com Leite"],
        quantidade: 0
    },
    {
        id: 8,
        nome: "Macchiato",
        descricao: "Café expresso misturado com um pouco de leite quente e espuma",
        preco: 9.90,
        image:macchiato,
        categorias: ["Tradicional", "Com Leite"],
        quantidade: 0
    },
    {
        id: 9,
        nome: "Mocaccino",
        descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
        preco: 9.90,
        image:mocaccino,
        categorias: ["Tradicional", "Com Leite"],
        quantidade: 0
    },
    {
        id: 10,
        nome: "Chocolate Quente",
        descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
        preco: 9.90,
        image:chocolateQuente,
        categorias: ["Especial", "Com leite"],
        quantidade: 0
    },
    {
        id: 11,
        nome: "Cubano",
        image:cubano,
        descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        preco: 9.90,
        categorias: ["Especial", "Alcoólico", "Gelado"],
        quantidade: 0
    },
    {
        id: 12,
        nome: "Havaiano",
        descricao: "Bebida adocicada preparada com café e leite de coco",
        preco: 9.90,
        image:havaiano,
        categorias: ["Especial"],
        quantidade: 0
    },
    {
        id: 13,
        nome: "Árabe",
        image:arabe,
        descricao: "Bebida preparada com grãos de café árabe e especiarias",
        preco: 9.90,
        categorias: ["Especial"],
        quantidade: 0
    },
    {
        id: 14,
        nome: "Irlandês",
        image:irlandes,
        descricao: "Bebida à base de café, uísque irlandês, açúcar e chantilly",
        preco: 9.90,
        categorias: ["Especial", "Alcoólico"],
        quantidade: 0
    }
];
