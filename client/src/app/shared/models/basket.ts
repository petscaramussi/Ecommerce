import * as cuid from "cuid";

export interface BasketItem {
    id: number;
    productName: string;
    price: string;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export interface Basket {
    id: string;
    items: BasketItem[];
}

export class Basket implements Basket {
    id = cuid();
    items: BasketItem[] = [];
}

export interface BasketTotals {
    shipping: number;
    subtotal: number;
    total: number;
}