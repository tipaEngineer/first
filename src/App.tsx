import React from 'react';
import { Users, Store } from './components';
import './App.css';

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
