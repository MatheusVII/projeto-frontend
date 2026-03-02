import styled from "styled-components";

const Card = styled.div`
    width: calc(25% - 3rem);
    padding:1rem;
    background: var(--light-gray-2);
    border-radius: 10px;
    border:solid 1px var(--dark-gray-3);
`

const Image = styled.div`
    width:100%;
    height:20rem;
    display:flex;
    justify-content:center;

    & img{
        width:100%;
        height:100%;
        border-radius: 10px;
    }
`

const Title = styled.div`
    width:100%;

    & h3{
        margin:1rem 0 0 0;
    }
`

const Price = styled.div`
    width:100%;
    display:flex;
    gap: 1rem;

    & .preco{
        color: var(--dark-gray);
        font-size:30px;
    }

    & .desconto{
        color: var(--light-gray);
        font-size:30px;
    }
`

function ProductCard({image, price, name, priceDiscout}){
    return(
        <Card>
            <Image> 
                <img src={image} alt={image} />
            </Image>
            <Title>
                <h3>{name}</h3>
            </Title>
            <Price>
                <h2 className="preco">{price}</h2>
                <h2 className="desconto"><s>{priceDiscout}</s></h2>
            </Price>
        </Card>
    )
}

export default ProductCard;