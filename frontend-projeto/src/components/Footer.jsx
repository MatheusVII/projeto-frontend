import styled from 'styled-components';
import LogoFooter from '../assets/logo-footer.svg';
import Logo from './Logo';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Informations from './Informations';

const Rodape = styled.footer`
    width:100%;
    background:var(--dark-gray);
    padding: 1rem 3rem;
    color:var(--white);
    display: flex;
    flex-direction:column;
    position: relative;
    margin-top:10rem;
`

const Container = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    gap:5rem;
`

const Container2 = styled.div`
    display:flex;
    align-items:center;
    width:18rem;
    flex-direction:column;
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

const Direitos = styled.div`
    width:100%;
    3rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    bottom: 0;
    left:0;
    margin-top:1rem;

    & hr{
        width:100%;
    }
`

function Footer() {
    const blog = [
        {
            text: "Blog sobre nos",
            link: "/blog"
        }
    ]
    return (
        <>  
            <Rodape>
                <Container>
                    <Container2>
                        <Logo img={LogoFooter}/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, id facilis nesciunt ipsam animi incidunt dolorem asperiores dolorum pariatur, deserunt, voluptate natus officia sint. Tempora aut nemo molestias possimus sint.</p>
                        <SocialMidias>
                            <a href="/"><img src={Instagram} alt="Instagram" /></a>
                            <a href="/"><img src={Facebook} alt="Instagram" /></a>
                            <a href="/"><img src={Twitter} alt="Instagram" /></a>
                        </SocialMidias>
                    </Container2>
                    <Infos>
                        <Informations title={"Sobre Nos"} informations={blog}/>
                    </Infos>
                </Container>
                <Direitos>
                    <hr />
                    <p>© 2024 Digital Store</p>
                </Direitos>
            </Rodape>
        </>
    )
}

export default Footer;