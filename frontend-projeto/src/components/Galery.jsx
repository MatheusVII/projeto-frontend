import styled from "styled-components";
import { useState } from "react";
import Arrowleft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

const ImagesGalery = styled.section`
    width: ${props => props.$width || '100%'};
    position:relative;
    margin:auto;

    @media (max-width: 480px) {
        width:90%;
    }
`

const Images = styled.div`
    overflow:hidden;
    width:100%;
    border-radius: ${props => props.$radius || '0px'};
    height: ${props => props.$height || 'auto'};
    position:relative;
    box-shadow: var(--shadow);  

    @media (max-width: 480px) {
        height: 23rem;
    }
`

const Track = styled.div`
    display:flex;
    transition: transform 0.2s ease;
    height: 100%;

    & img{
        width:100%;
        height: 100%;
        flex-shrink: 0;
        object-fit: cover;
    }
`

const PreviosButton = styled.button`
    position: absolute;
    top:50%;
    transform:translateY(-50%);
    background:none;
    border:none;
    left: 10px;
    z-index:9998;

    &:disabled{
        opacity: 0.3;
    }
`

const NextButton = styled.button`
    position: absolute;
    top:50%;
    transform:translateY(-50%);
    background:none;
    border:none;
    right: 10px;

    &:disabled{
        opacity: 0.3;
    }
`

const Thumbnails = styled.div`
    display: flex;
    gap:8px;
    margin-top:12px;
    justify-content:center;

    & img{
        width: 120px;
        height: 120px;
        object-fit: cover;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: ${props => props.$radius};

        &.active{       
            border: 2px solid var(--primary);
        }   
    }
`
function Galery({width, height, radius, showthumbs = false, images}){

    const [index, setIndex ] = useState(0);

    const nextImage = () => {
        if(index < images.length - 1){
            setIndex(index + 1);
        }
    }

    const previosImage = () => {
        if(index > 0){
            setIndex(index - 1) 
        }
    }

    const selectImage = (selIndex) => {
        setIndex(selIndex);
    }

    return(
        <ImagesGalery  $width={width}>
            <Images  $height={height} $radius={radius} id="images">
                <PreviosButton onClick={previosImage} disabled={index === 0}>
                    <img src={Arrowleft} alt="Previos" />
                </PreviosButton>
                <Track style={{ transform: `translateX(-${index * 100}%)` }}>
                    {images.map((img, i) => (
                        <img key={i} src={img.src} alt={`Imagem ${i}`} />
                    ))}
                </Track>
                <NextButton onClick={nextImage} disabled={index === images.length - 1}>
                    <img src={ArrowRight} alt="Next" />
                </NextButton>
            </Images>
            {showthumbs && (
                <Thumbnails $radius={radius}>
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={`Miniatura ${i}`}
                            onClick={() => selectImage(i)}
                            className={index === i ? "active" : ""}
                        />
                    ))}
                </Thumbnails>
            )}
        </ImagesGalery>
    )
}

export default Galery;