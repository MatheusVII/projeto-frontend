import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import LayoutDefault from "../layout/LayoutDefault";
import styled from "styled-components";
import FiltroPng from '../assets/filtro.png';
import XPng from '../assets/x.png';
import { useState } from "react";

const Produtos = styled.section`
    width:100%;
    height:100%;
    padding: 0rem 6rem 1rem 6rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 480px) {
        padding: 10px;
    }

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

    @media (max-width: 480px) {
        display: none;
    }
`

const PriceFilter = styled.div`
    width: 100%;
    display: flex;
    padding: 0 10rem;
    margin-bottom: 2rem;
    justify-content: flex-end;
    gap: 1rem;
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

    @media (max-width: 480px) {
        padding: 10px 25px 10px 10px;
        justify-content: space-between;

        & #price{
            width: 80%;

            & select{
                width: 100%;
            }
        }
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

const MobileFilter = styled.div`
    display: none;

    & button{
        height: 3.8rem;
        width: 3.8rem;
        border-radius: 10px;
        border: none;
        background: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 100ms ease; 

        & img{
            width: 2rem;
            height: 2rem
        }

        &:active{   
            transform: scale(0.97);
        }
    }

    @media (max-width: 480px) {
        display: block;
    }
`   

const FilterModal = styled.div`
    width: 23rem;
    height: 100%;
    position: fixed;
    top: 0;
    left:0;
    background: var(--white);
    padding: 1rem;
    z-index: 9999;
    padding-top: 7rem;
    animation: entrar 200ms ease;
    display: none;

    @keyframes entrar {
    from {
        opacity: 0;
        transform: translateX(-500px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
    }

    @media (max-width: 480px) {
        display: block;
    }
`

const FilterModalOverflow = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9998;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: none;

    @media (max-width: 480px) {
        display: block;
    }
`

const MobileFilterTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    & img{
        width: 1rem;
        height: 1rem;
        transition: all 100ms ease;

        &:active{   
            transform: scale(0.97);
        }
    }

    & h4{
        display: flex;
        align-items: center;
        margin:0;
    }
`

function ProductListingPage(){
    const [filterOpen, setFilterOpen] = useState(false);

    return(
        <LayoutDefault>
            {filterOpen && (
                <FilterModalOverflow>
                    <FilterModal>
                        <CheckboxFilters>
                            <MobileFilterTitle>
                                <h4>Filtrar por</h4>
                                <img src={XPng} alt="" onClick={() => {filterOpen === false ? setFilterOpen(true) : setFilterOpen(false)}}/>
                            </MobileFilterTitle>
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
                    </FilterModal>
                </FilterModalOverflow>
            )}
            <PriceFilter>
                <div id="price">
                    <h4>Ordenar por</h4 >
                    <select name="price" id="price">
                        <option value="asc">Preço mais barato</option>
                        <option value="desc">Preço mais caro</option>
                    </select>
                </div>
                <MobileFilter>
                    <button onClick={() => {filterOpen === false ? setFilterOpen(true) : setFilterOpen(false)}}><img src={FiltroPng} alt=""/></button>
                </MobileFilter>
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
                            image: "/product-thumb-1.jpeg",
                            price: 200,
                            priceDiscount: 149.9
                            },
                            {
                            name: "Tenis do mike tyson",
                            image: "/product-thumb-2.jpeg",
                            price: 49.9
                            },
                            {
                            name: "Sapato de couro de javali",
                            image: "/product-thumb-3.jpeg",
                            price: 400,
                            priceDiscount: 599.9
                            },
                            {
                            name: "Sapato com sola de aço Inox",
                            image: "/product-thumb-4.jpeg",
                            price: 149.99
                            },
                            {
                            name: "Tenis com o chulé do cristiano ronaldo",
                            image: "/product-thumb-5.jpeg",
                            price: 799.99,
                            priceDiscount: 1299.99
                            },
                            {
                            name: "Tenis com o tecido raro de dubai",
                            image: "/produc-image-3.jpeg",
                            price: 1699.99
                            },
                            {
                            name: "Sapato ortopedico para canto de unha",
                            image: "/produc-image-2.jpeg",
                            price: 400,
                            priceDiscount: 599.9
                            },
                            {
                            name: "Tenis usado pelo matue e encontrado no lixo",
                            image: "/produc-image-1.jpeg",
                            price: 399.99
                            },
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
                            },
                            {
                            name: "Sapato de couro de javali",
                            image: "/product-thumb-3.jpeg",
                            price: 400,
                            priceDiscount: 599.9
                            },
                            {
                            name: "Sapato com sola de aço Inox",
                            image: "/product-thumb-4.jpeg",
                            price: 149.99
                            },
                            {
                            name: "Tenis com o chulé do cristiano ronaldo",
                            image: "/product-thumb-5.jpeg",
                            price: 799.99,
                            priceDiscount: 1299.99
                            },
                            {
                            name: "Tenis com o tecido raro de dubai",
                            image: "/produc-image-3.jpeg",
                            price: 1699.99
                            },
                            {
                            name: "Sapato ortopedico para canto de unha",
                            image: "/produc-image-2.jpeg",
                            price: 400,
                            priceDiscount: 599.9
                            },
                            {
                            name: "Tenis usado pelo matue e encontrado no lixo",
                            image: "/produc-image-1.jpeg",
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