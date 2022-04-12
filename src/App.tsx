import React from 'react';
import './App.css';
import { Store } from './store';
import { Users } from './users';

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface AppProps {
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
