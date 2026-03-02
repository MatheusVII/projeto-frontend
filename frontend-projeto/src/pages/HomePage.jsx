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
                            name: "Nome do produto",
                            image: "public/product-thumb-1.jpeg",
                            price: 200,
                            priceDiscount: 149.9
                            },
                            {
                            name: "Nome do produto",
                            image: "public/product-thumb-2.jpeg",
                            price: 49.9
                            }
                        ]
                    }/>
                </Section>
            </LayoutDefault>
        </>
    )
}

export default HomePage;