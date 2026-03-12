import Galery from "../components/Galery";
import LayoutDefault from "../layout/LayoutDefault";
import styled from "styled-components";

const View = styled.section`
    width: 100%;
    display: flex;
`

const Images = styled.div`
    width: 50%;
`

function ProductViewPage() {
    return (
        <LayoutDefault>
            <View>
                <Images>
                    <Galery width="700px" height="570px" radius="4px" showthumbs={true} images={
                        [
                
                            {"src": "../../public/produc-image-1.jpeg"},
                            {"src": "../../public/produc-image-2.jpeg"}
                
                        ]
                    }/>
                </Images>
            </View>
        </LayoutDefault>
    )
}

export default ProductViewPage;