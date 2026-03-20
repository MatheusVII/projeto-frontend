import styled from "styled-components";

const Card = styled.a`
    width: calc(${props => props.$width || "25%"} - 3rem);
    padding:1rem;
    border-radius: 5px;
    text-decoration: none;
    transition: all 200ms ease;
    border:solid 2px var(--background);

    &:hover{
      transform: translateY(-10px);
      border-color: var(--light-gray-2);
      box-shadow: var(--shadow);
    } 

    @media (max-width: 480px) {
      width: calc(50% - 10px);
      padding: 0;
      border-radius: 4px;
      border: none;
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

    @media (max-width: 480px) {
        height: 11rem;
        & img{
          border-radius: 4px;
        }
        
    }
`

const Title = styled.div`
    width:100%;
    margin-top: 2rem;

    & h3{
        margin:1rem 0 0 0;
        color: var(--light-gray);
        font-size:23px;
    }

     @media (max-width: 480px) {
        & h3{
          font-size: 14px;
        }

        margin-top: 10px;
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

    @media (max-width: 480px) {
      gap:10px;

      & .preco{
        color: var(--dark-gray);
        font-size:16px;
      }

      & .desconto{
        color: var(--light-gray);
        font-size:16px;
      }
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