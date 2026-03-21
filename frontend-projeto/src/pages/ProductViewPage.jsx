import BuyBox from "../components/BuyBox";
import Galery from "../components/Galery";
import LayoutDefault from "../layout/LayoutDefault";
import styled from "styled-components";
import Section from '../components/Section';
import ProductListing from "../components/ProductListing";

const View = styled.section`
    width: 100%;
    display: flex;
    background: var(--light-gray-3);
    padding: 2rem 3rem;

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 10px;
        gap: 2rem;
    }
`

const Images = styled.div`
    width: 50%;

    @media (max-width: 480px) {
        width: 100%;
    }
`

function ProductViewPage() {
    return (
        <LayoutDefault>
            <View>
                <Images>
                    <Galery width={"75%"}radius="4px" showthumbs={true} images={
                        [
                            {"src": "/produc-image-1.jpeg"},
                            {"src": "/produc-image-2.jpeg"}
                        ]
                    }/>
                </Images>
                <BuyBox />
            </View>
            <Section title={"Produtos Relacionados"} link={{"text": "Ver todos" ,"href": "/produto"}}>
                <ProductListing padding={"0"} products={
                      [
                        {
                            name: "Tenis original da nike",
                            image: "/product-thumb-1.jpeg",
                            price: 200,
                            priceDiscount: 149.9
                        },
                        {
                            name: "Tenis do mike tyson",
                            image: "/product-thumb-2.jpeg",
                            price: 49.9
                        }
                    ]
                }/>
            </Section>
        </LayoutDefault>
    )
}

export default ProductViewPage;