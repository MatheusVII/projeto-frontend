import styled from 'styled-components';

const Logotipo = styled.a`

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