import LayoutDefault from "../layout/LayoutDefault";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import Galery from "../components/Galery";
import styled from "styled-components";

const Colecoes = styled.div`
    width:100%;
    display:flex;
    gap:1rem;
    align-items:center;
    justify-content:space-between;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

const Colecao = styled.div`
    width: calc(33% - 1rem);
    position: relative;
    height: 20rem;
    padding: 0.5rem 3rem;

    & img{
        width: 100%;
        height: 100%;
        box-shadow: var(--shadow);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 4px;
        z-index: 0;
    }


    & p{
        z-index: 1;
        position: relative;
        background: var(--success);
        width: 6rem;
        display:flex;
        justify-content: center;
        align-items:center;
        padding: 5px;
        border-radius: 15px;
        font-weight: bold;
    }

    & button{
        position:relative;
        z-index: 1;
        width: 15rem;
        height: 3.5rem;
        margin-top: 9rem;
        background: var(--white);
        border: none;
        font-size: 20px;
        color: var(--primary);
        border-radius: 8px;
        transition: all 200ms ease;

        &:hover{
            background: var(--light-gray-3);
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 18rem;
        padding: 0.4rem 1rem;

        & button{
            margin-top: 8rem;
            width: 12rem;
            font-weight: bold;
        }
    }
`

function HomePage(){
    return (
        <>
            <LayoutDefault>
                <Galery  width="1440px" height="681px" images={
                [
                    {"src": "public/home-slide-1.jpeg"},
                    {"src": "public/home-slide-2.jpeg"}
                ]
                }/>
                <Section title="Coleções em destaque" titlePosition="left">
                    <Colecoes>
                        <Colecao>
                            <img src="public/collection-1.png" alt="cole" />
                            <p>30% OFF</p>
                            <button>Comprar</button>
                        </Colecao>
                        <Colecao>
                            <img src="public/collection-2.png" alt="cole" />
                            <p>30% OFF</p>
                            <button>Comprar</button>
                        </Colecao>
                        <Colecao>
                            <img src="public/collection-3.png" alt="cole" />
                            <p>30% OFF</p>
                            <button>Comprar</button>
                        </Colecao>
                    </Colecoes>
                </Section>

                <Section title='Produtos em alta' titlePosition="left" link={{text: "Ver todos", href: "produto"}}>
                    <ProductListing padding={"0"} products={
                        [
                            {
                            name: "Tenis original da nike",
                            image: "public/product-thumb-1.jpeg",
                            price: 200,
                            priceDiscount: 149.9
                            },
                            {
                            name: "Tenis do mike tyson",
                            image: "public/product-thumb-2.jpeg",
                            price: 49.9
                            },
                            {
                            name: "Sapato de couro de javali",
                            image: "public/product-thumb-3.jpeg",
                            price: 400,
                            priceDiscount: 599.9
                            },
                            {
                            name: "Sapato com sola de aço Inox",
                            image: "public/product-thumb-4.jpeg",
                            price: 149.99
                            },
                            {
                            name: "Tenis com o chulé do cristiano ronaldo",
                            image: "public/product-thumb-5.jpeg",
                            price: 799.99,
                            priceDiscount: 1299.99
                            },
                            {
                            name: "Tenis com o tecido raro de dubai",
                            image: "public/produc-image-3.jpeg",
                            price: 1699.99
                            },
                            {
                            name: "Sapato ortopedico para canto de unha",
                            image: "public/produc-image-2.jpeg",
                            price: 400,
                            priceDiscount: 599.9
                            },
                            {
                            name: "Tenis usado pelo matue e encontrado no lixo",
                            image: "public/produc-image-1.jpeg",
                            price: 399.99
                            }
                        ]
                    }/>
                </Section>
            </LayoutDefault>
        </>
    )
}

export default HomePage;