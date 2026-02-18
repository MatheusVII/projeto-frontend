import styled from "styled-components";

const Section2 = styled.section`
    width:100%;
    padding: 1rem 8rem;
    background: var(--light-gray-2);

    & .header{
        width: 100%;
        display:grid;
        grid-template-columns: 1fr 1fr;
        align-items:center;

        & h2{
            width:100%;
            color:var(--dark-gray-2);
            font-size:24px;
        }

        & .center{
            text-align:right;
        }

        & .left{
            text-align:left;
        }

        & a{
            text-align:right;
            color: var(--primary);
            font-size:18px;
        }
    }
`

const Lista = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top:2rem;
`

function Section({title, titlePosition, link, children}){
    const align = "center";
    console.log(children);
    return(
        <Section2>
            <div className="header">
                <h2 className={align}>Titulo</h2>
                <a href="/">Link</a>
            </div>
            <Lista>
                {children}
            </Lista>
        </Section2>
    )
}

export default Section;