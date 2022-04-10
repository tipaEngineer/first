import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface AllProducts {
    products: Array<Product>;
};

export const App: React.FC<AllProducts> = ({products}) => {
    const [searchText, setText] = useState("")
    const [isOnlyStoked, setOnlyStocked] = useState(false)

    const textProperties = {searchText, setText, isOnlyStoked, setOnlyStocked}

    return (
        <>
            <SearchBar textProperties={textProperties}/>
            <ProductTable products={products} isOnlyStoked={isOnlyStoked} searchText={searchText}/>
        </>
    )
}
const ProductRow: React.FC<{ product: Product }> = (product) => {
    const name = product.product.stocked ? product.product.name :
        <span style={{color: "red"}}>{product.product.name}</span>
    return (<>
            <tr>
                <td>{name}</td>
                <td>{product.product.price}</td>
            </tr>
        </>
    )
}
const ProductCategoryRow: React.FC<{category:string}> = (category) => {
    return(<>
            <tr>
                <th colSpan={2}>
                    {category.category}
                </th>
            </tr>
        </>
    )
}

const ProductTable: React.FC<{products:Product[],searchText:string; isOnlyStoked:boolean}> = ({products,searchText,isOnlyStoked}) => {
    // @ts-ignore
    const rows: any | null | undefined = []
    let lastCategory = ""
    products.forEach((prod)=>{
        if(prod.name.indexOf(searchText)=== -1){
            return
        }
        if(isOnlyStoked && !prod.stocked){
            return
        }
        if(prod.category!==lastCategory){
            rows.push(<ProductCategoryRow
                category={prod.category}
                key={prod.category} />)
        }
        rows.push(<ProductRow product={prod}/>)
        lastCategory = prod.category

    })
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    </>)
}



const SearchBar: React.FC<{textProperties:{searchText: string; setText: React.Dispatch<React.SetStateAction<string>>; isOnlyStoked:boolean; setOnlyStocked: React.Dispatch<React.SetStateAction<boolean>>}}> = (properties) => {

    const setSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        properties.textProperties.setText(event.target.value)
        console.log(properties.textProperties.searchText)
    }
    const setIsOnlyStocked = (event: React.ChangeEvent<HTMLInputElement>) => {
        properties.textProperties.setOnlyStocked(!properties.textProperties.isOnlyStoked)
    }

    return (
        <>
            <input type={"text"} placeholder={"Search..."} value={properties.textProperties.searchText} onChange={setSearchText}/>
            <p><label><input type={"checkbox"} onChange={setIsOnlyStocked}/>Only show products in stock</label>
            </p>
        </>
    )
}


