import styled from 'styled-components';

const Logotipo = styled.a`
    & img{
        @media (max-width: 480px) {
            height: auto;
            width: 10rem;
        }
    }
`

function Logo({img}){
    return(
        <>
            <Logotipo href='/'>
                <img src={img} alt='logo'/>
            </Logotipo>
        </>
    )
}

export default Logo;