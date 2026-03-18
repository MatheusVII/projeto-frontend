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
    padding: 2rem 0;
`

const Images = styled.div`
    width: 50%;
`

function ProductViewPage() {
    return (
        <LayoutDefault>
            <View>
                <Images>
                    <Galery width="700px" height="570px" radius="4px" showthumbs={true} images={
                        [
                            {"src": "../../public/produc-image-1.jpeg"},
                            {"src": "../../public/produc-image-2.jpeg"}
                        ]
                    }/>
                </Images>
                <BuyBox />
            </View>
            <Section title={"Produtos Recomendados"} link={{"text": "Ver todos" ,"href": "/produto"}}>
                <ProductListing products={
                      [
                        {
                            name: "Nome do produto 1",
                            image: "https://url.imagem/do/produto1.png",
                            price: 200,
                            priceDiscount: 149.9
                        },
                        {
                            name: "Nome do produto 2",
                            image: "https://url.imagem/do/produto2.png",
                            price: 49.9
                        }
                    ]
                }/>
            </Section>
        </LayoutDefault>
    )
}

export default ProductViewPage;