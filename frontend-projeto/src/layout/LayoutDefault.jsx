import Footer from "../components/Footer";
import styled from "styled-components";

const Main = styled.main`
    flex:1;
    height: 100%;
    width:100%;
`

function LayoutDefault({children}) {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default LayoutDefault;