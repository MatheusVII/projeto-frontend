import styled from 'styled-components';
import LogoFooter from '../assets/logo-footer.svg';
import Logo from './Logo';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Informations from './Informations';

const Rodape = styled.footer`
    width:100%;
    height:17rem;
    background:var(--dark-gray);
    padding: 1rem 3rem;
    color:var(--white);
    display: flex;
    gap:5rem;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:18rem;
`

const SocialMidias = styled.div`
    width:100%;
    display:flex;
    gap:2rem;
`

const Infos = styled.ul`
    display:flex;
    gap:3rem;
    width:80%;
`

function Footer() {
    return (
        <>  
            <Rodape>
                <Container>
                    <Logo img={LogoFooter}/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, id facilis nesciunt ipsam animi incidunt dolorem asperiores dolorum pariatur, deserunt, voluptate natus officia sint. Tempora aut nemo molestias possimus sint.</p>
                    <SocialMidias>
                        <a href="/"><img src={Instagram} alt="Instagram" /></a>
                        <a href="/"><img src={Facebook} alt="Instagram" /></a>
                        <a href="/"><img src={Twitter} alt="Instagram" /></a>
                    </SocialMidias>
                </Container>
                <Infos>
                    <Informations />
                </Infos>
            </Rodape>
        </>
    )
}

export default Footer;