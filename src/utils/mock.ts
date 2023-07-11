import { Product } from "./types";
import p1 from '/public/prod1.png'
import p2 from '/public/p2.png'
import hud from '/public/hud.png'

export const Products: Product[] = [
    {
        id: 1,
        name: 'Sweater',
        price: 599,
        category: 'Female',
        image: p1,
    },
    {
        id: 2,
        name: 'Trouser ',
        price: 499,
        category: 'Female',
        image: p2,
    },
    {
        id: 3,
        name: 'Huddie',
        price: 599,
        category: 'Male',
        image: hud,
    },
    {
        id: 4,
        name: 'Product 02',
        price: 599,
        category: 'Male',
        image: p1,
    },
    {
        id: 5,
        name: 'Product 03',
        price: 599,
        category: 'Kids',
        image: p1,
    },
];