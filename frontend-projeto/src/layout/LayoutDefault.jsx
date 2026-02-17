import Footer from "../components/Footer";
import Header from "../components/Header";

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