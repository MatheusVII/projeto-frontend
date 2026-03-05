import styled from "styled-components";
import ProductCard from "./ProductCard";

const ListaProdutos = styled.section`
    width:100%;
    padding:4rem 1rem 1rem 1rem;
`

const Lista = styled.ul`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    gap:3rem;
`

function ProductListing({products}){
    return(
        <ListaProdutos>
            <Lista>
                {products.map((p, index) => (
                    <ProductCard image={p.image} price={p.price} name={p.name} priceDiscount={p.priceDiscount}/>
                ))}
            </Lista>
        </ListaProdutos>
    )
}

export default ProductListing;