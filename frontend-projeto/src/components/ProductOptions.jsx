import styled from "styled-components";
import { useState } from "react";

const Options = styled.div`
    width: 100%;
    display: flex;
    gap:1rem;
`

const Opt = styled.div`
    width: ${props => props.$type === "color" ? "46px" : "46px"};
    height: 46px;
    padding:5px;
    background:${props => props.$color || "var(--light-gray-3)"};
    display: flex;
    justify-content: center;
    align-items: center;
    border:solid 2px var(--background);
    border-radius: ${props => props.$radius || "0"};
    cursor: pointer;
    transition: all 0.2s ease;   
    font-weight: bold;

    &.active{
        border-color: var(--primary);
        background: ${props => props.$color || "var(--primary)"};
        color: white;
        transform: scale(1.1);
    }
`

function ProductOptions({options, radius, shape, type}){

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Options>
            {type === "text" && options.map((opt, index) => (
                <Opt key={index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)} $radius={shape === "square" ? radius : "9999px"}>
                    <p>{opt}</p>
                </Opt>
            ))}

            {type === "color" && options.map((opt, index) => (
                <Opt key={index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)} $radius={shape === "square" ? radius : "9999px"}  $type={type} $color={opt}>

                </Opt>
            ))}
        </Options>
    )
}

export default ProductOptions;