import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const Main = styled.main`
    flex:1;
`

function LayoutDefault({children}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default LayoutDefault;