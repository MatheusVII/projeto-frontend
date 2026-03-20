import styled from "styled-components";
import StarWhite from '../assets/star-white.png'
import StarYellow from '../assets/star-yellow.png'
import ProductOptions from "./ProductOptions";

const BuyBoxSection = styled.section`
    width: 50%;
    height: auto;
`


const Name = styled.div`
    width:100%;
    font-size: 32px;
    color: var(--dark-gray);

    & h2{
        margin:0;
    }
`

const Reference = styled.div`
    width:100%;
    font-size: 12px;
    color: var(--dark-gray-3);   
`

const Rating = styled.div`
    width: 100%;
    display: flex;
    gap:1rem;
    align-items:center;
`

const Stars = styled.div`
    display:flex;
    gap:5px;

    & img{
        width: 15px;
        height: 15px;
    }
`

const StarsTotal = styled.div`
    padding: 5px;
    display: flex;
    font-size:14px;
    align-items: center;
    background: var(--warning);
    border-radius: 4px;
    justify-content:center;

    & img{
        width:15px;
        height:15px;
    }

    & p{
        margin: 0;
        color: white;
        font-weight: bold;
        padding: 0 5px;
    }
`

const Rates = styled.div`
    width:50%;
    font-size: 14px;
    
    & p{
        color: var(--light-gray);
    }
`

const Prices = styled.div`
    width: 100%;
    display: flex;
    gap:1rem;
    align-items:baseline;

    & #price{
        font-size: 35px;
        color: var(--dark-gray-2);

        & span{
            font-size: 16px;
            font-weight: light;
        }
    }

    & #priceDiscount{
        font-size: 16px;
        color: var(--light-gray-2);
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 14px;
    color: var(--dark-gray-2);

    & #descTitle{
        color: var(--light-gray);
        font-weight: bold;
    }
`

const Options = styled.div`
    width: 100%;
    margin-top:2rem;

    & #optTitle{
        color: var(--light-gray);
        font-weight: bold;   
    }
`

const Button = styled.div`
    width:100%;
    margin-top: 1rem;

    & button{
        width:13rem;
        height: 3rem;
        background: var(--warning);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        transition: all 0.2s ease;
        font-weight: bold;

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
                    <img src={StarYellow} alt="estrela" />
                    <img src={StarYellow} alt="estrela" />
                    <img src={StarYellow} alt="estrela" />
                    <img src={StarYellow} alt="estrela" />
                    <img src={StarYellow} alt="estrela" />
                </Stars>

                <StarsTotal>
                    <p>4.9</p>
                    <img src={StarWhite} alt="estrela" />
                </StarsTotal>

                <Rates>
                    <p>(569 Avaliacoes)</p>
                </Rates>
            </Rating>

            <Prices>
                <h2 id="price"><span>R$</span>299<span>,00</span></h2>
                <h2 id="priceDiscount"><s>R$399.99</s></h2>
            </Prices>

            <Description>
                <p id="descTitle">Descrição do produto</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tenetur! Facere non repellendus ullam voluptatum explicabo tenetur dolores placeat quidem, laboriosam inventore adipisci molestiae enim impedit beatae itaque quae autem.</p>
            </Description>

            <Options>
                <p id="optTitle">Tamanho</p>
                <ProductOptions options={["39", "40", "41", "42", "43"]} shape={"square"} radius={"4px"} type={"text"}/>
                <p id="optTitle">Cor</p>
                <ProductOptions options={["#ffff", "rgb(186, 136, 0)", "#ff0000", "#00e5ff", "#0051ff"]} shape={"circle"} type={"color"}/>
            </Options>

            <Button>
                <button type="button">Comprar</button>
            </Button>
        </BuyBoxSection>
    )
}

export default BuyBox;