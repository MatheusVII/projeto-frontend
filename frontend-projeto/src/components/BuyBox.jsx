import styled from "styled-components";
import Star from '../assets/star-icon.svg'
import ProductOptions from "./ProductOptions";

const BuyBoxSection = styled.section`
    width: 50%;
    height: auto;
`


const Name = styled.div`
    width:100%;
    font-size: 32px;
    color: var(--dark-gray);
`

const Reference = styled.div`
    width:100%;
    font-size: 12px;
    color: var(--dark-gray-3);   
`

const Rating = styled.div`
    width: 100%;
    display: flex;
    gap:2rem;
`

const Stars = styled.div`
    padding: 5px;
    display: flex;
    gap:5px;
    font-size:14px;
    align-items: center;
    background: var(--warning);
    border-radius: 4px;

    & img{
        width:15px;
        height:15px;
    }

    & p{
        margin: 0;
    }
`

const Rates = styled.div`
    width:50%;
    font-size: 14px;
    color: var(light-gray);
`

const Prices = styled.div`
    width: 100%;
    display: flex;
    gap:2rem;
    font-size: 16px;
    align-items:center;
`

const Description = styled.div`
    width: 100%;
    font-size: 14px;
    color: var(--dark-gray-2)
`

const Options = styled.div`
    width: 100%;
`

const Button = styled.div`
    width:100%;
    margin-top: 1rem;

    & button{
        width:7rem;
        height: 3rem;
        background: var(--warning);
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        transition: all 0.2s ease;

        &:hover{
            background: var(--warning-hover);
        }
    }
`

function BuyBox() {
    return(
        <BuyBoxSection>
            <Name>
                <h2>Tenis do matue</h2>
            </Name>

            <Reference>
                <p>Referencia</p>
            </Reference>

            <Rating>
                <Stars>
                    <img src={Star} alt="estrela" />
                    <p>4.9</p>
                </Stars>

                <Rates>
                    <p>569 Avaliacoes</p>
                </Rates>
            </Rating>

            <Prices>
                <h2>R$299,00</h2>
                <h2><s>R$399.99</s></h2>
            </Prices>

            <Description>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tenetur! Facere non repellendus ullam voluptatum explicabo tenetur dolores placeat quidem, laboriosam inventore adipisci molestiae enim impedit beatae itaque quae autem.</p>
            </Description>

            <Options>
                <ProductOptions options={["43", "44", "45"]} shape={"square"} radius={"10px"} type={"text"}/>
            </Options>

            <Button>
                <button type="button">Comprar</button>
            </Button>
        </BuyBoxSection>
    )
}

export default BuyBox;