import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import LayoutDefault from "../layout/LayoutDefault";
import styled from "styled-components";

const Produtos = styled.section`
    width:100%;
    height:100%;
    padding: 0rem 6rem 1rem 6rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

`

const Filters = styled.div`
    width: 500px;
    padding: 1rem 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    background: var(--white);
`

const PriceFilter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10rem;
    margin-bottom: 2rem;
    align-items: flex-end;

    & h4{
        margin: 0 0 10px 0;
    }

    & select{
        width: 24rem;
        border-radius: 4px;
        background: none;
        height: 60px;
        font-size: 16px;
        color: var(--dark-gray-2);
        padding: 5px 10px;
        cursor: pointer;
    }
`

const CheckboxFilters = styled.div`
    width: 100%;

    & h4{
        font-size: 18px;
        margin: 0 0 10px 0;
    }

    & hr{
        border-color: var(--light-gray-3);
    }
`   

function ProductListingPage(){
    return(
        <LayoutDefault>
            <PriceFilter>
                <div>
                    <h4>Ordenar por</h4 >
                    <select name="price" id="price">
                        <option value="asc">Preço mais barato</option>
                        <option value="desc">Preço mais caro</option>
                    </select>
                </div>

            </PriceFilter>
            <Produtos>

                <Filters>

                    <CheckboxFilters>
                        <h4>Filtrar por</h4>
                        <hr />
                        <FilterGroup title="Marca" inputType="checkbox" options={
                            [
                                {"text": "Adidas", "value": "addidas"},
                                {"text": "Balenciaga"},
                                {"text": "K-Swiss", "value": "opt3"},
                                {"text": "Nike"},
                                {"text" : "Puma"}
                            ]
                        }/>
                        <FilterGroup title="Categoria" inputType="checkbox" options={
                            [
                                {"text": "Esporte e lazer", "value": "opt1"},
                                {"text": "Casual"},
                                {"text": "Utilitario", "value": "opt3"},
                                {"text": "Corrida"}
                            ]
                        }/>
                        <FilterGroup title="Estado" inputType="radio" options={
                            [
                                {"text": "Novo", "value": "opt1"},
                                {"text": "Usado"},
                            ]
                        }/>
                    </CheckboxFilters>

                </Filters>

                <Section>
                    <ProductListing padding="0" width="33%" products={
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
                            },
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
                            },
                        ]
                    }/>
                </Section>

            </Produtos>
        </LayoutDefault>
    )
}

export default ProductListingPage;