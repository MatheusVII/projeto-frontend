import styled from 'styled-components';
import Logo from './Logo';
import Carrinho from '../assets/mini-cart.svg'
import LogoHeader from '../assets/logo-header.svg';

const HeaderStyled = styled.header`
    height: 10rem;
    width: 100%;
    background: var(--dark-gray);
    padding: 1rem 5rem;
    position: fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

`

const ContainerTop = styled.section`
    width:100%;
    display:flex;
    align-items:center;
    gap:3rem;
    justify-content:center;
`

const ContainerBottom = styled.section`
    width:100%;
    display:flex;
    align-items:center;
`

const Search = styled.div`
    width: 45rem;

    & input{
        width:100%;
        height:3rem;
        border-radius:10px;
        border:none;
        padding: 0 1rem;
        font-size: 18px;
    }
`

const BtnCadastrar = styled.div`
     & a{
        width: 10rem;
        height:3rem;
        border-radius:10px;
        font-size:16px;
        color:var(--dark-gray-2);
        background: none;
        border:none;
        text-decoration:underline;
    }
`

const BtnLogin = styled.div`
    & button{
        width:7.125rem;
        height:3rem;
        border-radius:10px;
        background: var(--primary);
        color: var(--white);
        font-weight:bold;
        border:none;
        font-size:16px;
    }
`

const Cart = styled.div`
    position:relative;
`

const Links = styled.ul`
    display: flex;
    gap:3rem;
    color: var(--white);
    font-size:18px;

    & a{
        border-bottom: solid 2px var(--dark-gray);
        padding:0 5px;
        text-decoration: none;
        transition:border 200ms ease;

        &:hover{
            border-color: var(--primary);
        }

        &.active{
            border-color: var(--primary);
        }
    }
`

function Header() {
    return (
        <>
            <HeaderStyled>
                <ContainerTop>
                    <Logo img={LogoHeader   }/>
                    <Search>
                        <input type='search' placeholder='Buscar Produtos'/>
                    </Search>
                    <BtnCadastrar>
                        <a href='/'>Cadastrar</a>
                    </BtnCadastrar>
                    <BtnLogin>
                        <button>Login</button>
                    </BtnLogin>
                    <Cart>
                        <img src={Carrinho} alt='carrinho'/>
                    </Cart>
                </ContainerTop>
                <ContainerBottom>
                    <Links>
                        <a href='/'>Inicio</a>
                        <a>Produtos</a>
                        <a>Categorias</a>
                        <a>Meus Pedidos</a>
                    </Links>
                </ContainerBottom>
            </HeaderStyled>
        </>
    )
}

export default Header;