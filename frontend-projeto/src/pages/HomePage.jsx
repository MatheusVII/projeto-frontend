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

    & img{
        border-radius: 4px;
        width: calc(33% - 1rem); 
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
                <Section title="Coleções em destaque" titlePosition="center">
                    <Colecoes>
                        <img src="public/collection-1.png" alt="" />
                        <img src="public/collection-2.png" alt="" />
                        <img src="public/collection-3.png" alt="" />
                    </Colecoes>
                </Section>

                <Section title='Produtos em alta' titlePosition="left">
                    <ProductListing products={
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