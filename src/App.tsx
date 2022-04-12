import React, { useState } from 'react';

import './App.css';

interface ProductTableProps {
    products: Product[];
    filtering: string;
    isStocked: boolean;
}

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface AppProps {
    products: Array<Product>;
}

interface TextProperties {
    filtering: string;
    setFiltering: React.Dispatch<React.SetStateAction<string>>;
    isStocked: boolean;
    setStocked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const App: React.FC<AppProps> = ({ products }) => {
    const [filtering, setFiltering] = useState('');
    const [isStocked, setStocked] = useState(false);

    return (
        <>
            <SearchBar
                filtering={filtering}
                setFiltering={setFiltering}
                isStocked={isStocked}
                setStocked={setStocked}
            />
            <ProductTable
                products={products}
                isStocked={isStocked}
                filtering={filtering}
            />
        </>
    );
};
const ProductRow: React.FC<{ product: Product }> = (props) => {
    return (
        <tr>
            <td>
                <span style={{ color: props.product.stocked ? '' : 'red' }}>
                    {props.product.name}
                </span>
            </td>
            <td>{props.product.price}</td>
        </tr>
    );
};
const ProductCategoryRow: React.FC<{ category: string }> = ({ category }) => {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
};

const ProductTable: React.FC<ProductTableProps> = ({
    products,
    filtering,
    isStocked,
}) => {
    const rows: any | null | undefined = [];
    let lastCategory = '';
    products.forEach((prod) => {
        if (prod.name.indexOf(filtering) === -1) {
            return;
        }
        if (isStocked && !prod.stocked) {
            return;
        }
        if (prod.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={prod.category}
                    key={prod.category}
                />,
            );
        }
        rows.push(<ProductRow product={prod} />);
        lastCategory = prod.category;
    });
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </>
    );
};

const SearchBar: React.FC<TextProperties> = (props) => {
    const textHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setFiltering(event.target.value);
    };
    const isStockedHandleOnChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        props.setStocked(!props.isStocked);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={props.filtering}
                onChange={textHandleOnChange}
            />
            <p>
                <label>
                    <input type="checkbox" onChange={isStockedHandleOnChange} />
                    Only show products in stock
                </label>
            </p>
        </>
    );
};
