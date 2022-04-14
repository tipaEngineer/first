import React, { useState } from 'react';
import { AppProps } from './App';

interface StoreProps {
    products: AppProps['products'];
}

export const Store: React.FC<StoreProps> = ({ products }) => {
    const [filtering, setFiltering] = useState('');
    const [isStocked, setStocked] = useState(false);

    // eslint-disable-next-line no-undef
    const productsArray: Array<JSX.Element> = [];
    let lastCategory: string = '';
    products
        .filter((prod) => {
            return prod.name.toLowerCase().includes(filtering.toLowerCase());
        })
        .filter((prod) => {
            return isStocked ? prod.stocked : true;
        })
        .forEach((prod, index) => {
            productsArray.push(
                <React.Fragment key={index}>
                    {prod.category !== lastCategory && (
                        <tr>
                            <td colSpan={2}>{prod.category}</td>
                        </tr>
                    )}
                    <tr>
                        <td>
                            <span style={{ color: !prod.stocked ? 'red' : '' }}>
                                {prod.name}
                            </span>
                        </td>
                        <td>{prod.price}</td>
                    </tr>
                </React.Fragment>,
            );
            lastCategory = prod.category;
        });

    return (
        <>
            <input
                type="text"
                value={filtering}
                onChange={(event) => {
                    setFiltering(event.target.value);
                }}
                placeholder="Search"
            />
            <p>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => {
                            setStocked(!isStocked);
                        }}
                    />
                    Only show products in stock
                </label>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{productsArray}</tbody>
            </table>
        </>
    );
};
