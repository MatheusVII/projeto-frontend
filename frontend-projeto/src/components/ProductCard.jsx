import styled from "styled-components";

const Card = styled.a`
    width: calc(${props => props.$width || "25%"} - 3rem);
    padding:1rem;
    background: var(--light-gray-3);
    border-radius: 10px;
    border:solid 1px var(--light-gray);
    text-decoration: none;
    box-shadow: var(--shadow);
    transition: all 200ms ease;

    &:hover{
      transform: translateY(-10px);
    } 
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

function ProductCard({ image, price, name, priceDiscount, width, index}) {

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

    const formattedDiscount = priceDiscount
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        }).format(Number(priceDiscount))
    : null;
    


  return (
    <Card $width={width} href={"produto/" + index}>
      <Image>
        <img src={image} alt={name} />
      </Image>

      <Title>
        <h3>{name}</h3>
      </Title>

      <Price>
        <h2 className="preco">{formattedPrice}</h2>
        {formattedDiscount && (
            <h2 className="desconto"><s>{formattedDiscount || ""}</s></h2>
        )}
      </Price>
    </Card>
  );
}

export default ProductCard;