import styled from 'styled-components';

const Logotipo = styled.div`

`

function Logo({img}){
    return(
        <>
            <Logotipo>
                <img src={img} alt='logo'/>
            </Logotipo>
        </>
    )
}

export default Logo;