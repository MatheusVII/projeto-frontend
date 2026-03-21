import styled from 'styled-components';
import Logo from './Logo';
import Carrinho from '../assets/mini-cart.svg'
import LogoHeader from '../assets/logo-header.svg';
import MenuPng from '../assets/menu.png';
import Lupa from '../assets/lupa.png';
import { Link, useNavigate } from 'react-router-dom';
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
    position: fixed;
    top: 0;
    left: 0;
    background: var(--white);
    flex-direction: column; 
    z-index:9999;
    gap: 1rem;

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

const Auth = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    border-top: solid 2px var(--light-gray-2);
    padding-top: 1.5rem;

    & button{
        width: 100%;
        height: 2.5rem;
        border-radius: 8px;
        border: none;
        font-size: 18px;
        font-weight: bold;
        color: var(--white);
        background: var(--primary);
    }

    & a{
        text-align: center;
        font-size: 18px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MobileSearch = styled.div`
    width: 100%;
    position: relative;

    & input{
        width: 79%;
        height: 4rem;
        border: none;
        border-radius: 8px;
        background: var(--light-gray-3);
        padding:0 3rem 0 1.5rem;
        font-size: 18px;
    }

    & img{
        width:2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        right: 23%;
        transform: translateY(-50%);
    }
`

function Header() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const navigate = useNavigate();

    function mobileSearch(){
        if(search === false){
            navigate("/produto")
            setOpen(false);
            setSearch(true);
        } else{
            setSearch(false);
        }
    }

    function mobileNav() {
        if(open === false){
            setOpen(true);
            setSearch(false);
        } else{
            setOpen(false);
        }   
    }

    return (
        <>
            <MenuMobile>
                <Top>
                    <Menu>
                        <img src={MenuPng} alt="menu" onClick={mobileNav}/>
                    </Menu>
                    <Logo img={LogoHeader}/>
                    <Pesquisa>
                        <img src={Lupa} alt=""  onClick={mobileSearch}/>
                        <img src={Carrinho} alt='carrinho'/>
                    </Pesquisa>
                </Top>

                {search && (                   
                    <MobileSearch>
                        <input type="text" placeholder='Pesquisar produto...' onClick={() => {navigate("/produto")}}/>
                        <img src={Lupa} alt="" />
                    </MobileSearch>
                )}
            </MenuMobile>
            <HeaderStyled>
                <ContainerTop>
                    <Logo img={LogoHeader}/>
                    <Search>
                        <input type='search' placeholder='Buscar Produtos' onClick={() => {navigate("/produto")}}/>
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

                        <Auth>
                            <button>Entrar</button>
                            <a href="/">Cadastre-se</a>
                        </Auth>
                    </NavMobile>
                </Overlay>
            )}
        </>
    )
}

export default Header;