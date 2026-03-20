import styled from 'styled-components';
import Logo from './Logo';
import Carrinho from '../assets/mini-cart.svg'
import LogoHeader from '../assets/logo-header.svg';
import MenuPng from '../assets/menu.png';
import Lupa from '../assets/lupa.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderStyled = styled.header`
    height: 10rem;
    width: 100%;
    background: var(--white);
    padding: 1rem 5rem;
    position: fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    z-index:9999;

    @media (max-width: 480px) {
        display: none;
    }
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
        padding: 2rem 1rem;
        font-size: 16px;
        background: var(--light-gray-3);
    }
`

const BtnCadastrar = styled.div`
     & a{
        width: 10rem;
        height:3rem;
        border-radius:10px;
        font-size:16px;
        color:var(--dark-gray-3);
        background: none;
        border:none;
        text-decoration:underline;
        transition: all 200ms ease;

        &:hover{
            color: var(--light-gray);
        }
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
        transition: all 200ms ease;

        &:hover{
            background: var(--primary-hover);
        }
    }
`

const Cart = styled.div`
    position:relative;
`

const Links = styled.ul`
    display: flex;
    gap:3rem;
    font-size:18px;
    color: var(--light-gray);

    & a{
        border-bottom: solid 2px var(--light-gray);
        padding:0 5px;
        text-decoration: none;
        transition:border 200ms ease;
        font-weight: bold;

        &:hover{
            border-color: var(--primary);
            color: var(--primary);
        }

        &.active{
            border-color: var(--primary);
        }
    }
`

const Menu = styled.div`
    width: auto;
    height: auto;

    & img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 15px;
        padding: 3px;
        cursor: pointer;
        transition: all 200ms ease;

        &:active{
            background: var(--light-gray-3);
            transform: scale(0.95);
        }
    }
`

const MenuMobile = styled.header`
    width: 100%;
    height: auto;
    padding: 1rem;
    display: none;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--white);
    align-items: center;
    z-index:9999;

    @media (max-width: 480px) {
        display: flex;
    }
`

const Pesquisa = styled.div`
    width: auto;
    height: auto;
    display: flex;
    gap: 10px;

    & img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 15px;
        padding: 3px;
        cursor: pointer;
        transition: all 200ms ease;

        &:active{
            background: var(--light-gray-3);
            transform: scale(0.95);
        }
    }   
`
const Overlay = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9998;
`

const NavMobile = styled.div`
    width: 20rem;
    height: 100%;
    background: var(--white);
    z-index: 9999;
    position: fixed;
    left:0;
    top:0;
    padding: 2rem;
    animation: entrar 0.3s ease;
    padding-top: 8rem;

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
`

const Paginas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    & h4{
        font-size: 18px;
    }
`

const MobileLinks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & a{
        font-size: 18px;
        text-decoration: none;

        &.active{
            border-bottom: solid 2px var(--primary);
        }
    }
`

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <MenuMobile>
                <Menu>
                    <img src={MenuPng} alt="menu" onClick={() => open === false ? setOpen(true) : setOpen(false)}/>
                </Menu>
                <Logo img={LogoHeader}/>
                <Pesquisa>
                    <img src={Lupa} alt="" />
                    <img src={Carrinho} alt='carrinho'/>
                </Pesquisa>
            </MenuMobile>
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
                        <button>Entrar</button>
                    </BtnLogin>
                    <Cart>
                        <img src={Carrinho} alt='carrinho'/>
                    </Cart>
                </ContainerTop>
                <ContainerBottom>
                    <Links>
                        <Link to="/">Inicio</Link>
                        <Link to="/produto">Produtos</Link>
                        <a>Categorias</a>
                        <a>Meus Pedidos</a>
                    </Links>
                </ContainerBottom>
            </HeaderStyled>
            {open && (
                <Overlay>
                    <NavMobile>
                        <Paginas>
                            <h4>Paginas</h4>

                            <MobileLinks>
                                <Link to="/">Inicio</Link>
                                <Link to="/produto">Produtos</Link>
                                <a>Categorias</a>
                                <a>Meus Pedidos</a>
                            </MobileLinks>
                        </Paginas>
                    </NavMobile>
                </Overlay>
            )}
        </>
    )
}

export default Header;