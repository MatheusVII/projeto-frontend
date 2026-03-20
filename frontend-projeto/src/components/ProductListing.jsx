import styled from "styled-components";
import ProductCard from "./ProductCard";

const ListaProdutos = styled.section`
    width:100%;
    padding: ${props => props.$padding ?? "4rem 1rem 1rem 1rem"};
`

const Lista = styled.ul`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    gap:3rem;
    margin:0;

    @media (max-width: 480px) {
        gap:10px;
        padding:0;
    }
`

function ProductListing({products, width, padding}){
    return(
        <ListaProdutos $padding={padding}>
            <Lista>
                {products.map((p, index) => (
                    <ProductCard image={p.image} price={p.price} name={p.name} priceDiscount={p.priceDiscount} width={width} index={index} />
                ))}
            </Lista>
        </ListaProdutos>
    )
}

export default ProductListing;