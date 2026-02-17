import styled from "styled-components";

const Info = styled.li`
    width:20%;
    height:100%;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: var(--dark-gray-2);
    border-radius: 10px;

    & h2{   
        margin: 0 0 1.5rem 0;
        border-bottom: solid 2px var(--dark-gray-3);
        width:100%;
        padding-bottom: 10px;
    }
`

function Informations({title, informations}){
    return(
        <>
            <Info>
                <h2>{title}</h2>

                <div>
                    <h4>Sobre nos Digital Store</h4>
                    <a href="/">about</a>
                </div>
            </Info>
        </>
    )
}

export default Informations;