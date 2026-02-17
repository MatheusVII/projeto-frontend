import styled from 'styled-components';
import Img from '../assets/logo-header.svg';

const Logotipo = styled.div`

`

function Logo(){
    return(
        <>
            <Logotipo>
                <img src={Img} alt='logo'/>
            </Logotipo>
        </>
    )
}

export default Logo;