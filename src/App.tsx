import React from 'react';
import './App.css';
import { Store } from './store';
import { Users } from './users';

export interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

export interface AppProps {
    products: Array<Product>;
}

export const App: React.FC<AppProps> = ({ products }) => {
    return (
        <>
            <Store products={products} />
            <Users />
        </>
    );
};
