import styled from "styled-components";
import { Link } from 'react-router-dom';

const Section2 = styled.section`
    width:100%;
    padding: ${props => !props.$title ? "" : "1rem 3rem"};

    & .header{
        width: 100%;
        display: ${props => !props.$title ? "none" : "flex"};
        position:relative;
        align-items:center;

        & h2{
            width:100%;
            color:var(--dark-gray-2);
            font-size:24px;

            @media (max-width: 480px) {
                font-size: 18px;
            }
        }

        & .center{
            text-align:center;
        }

        & .left{
            text-align:left;
        }

        & a{
            text-align:right;
            color: var(--primary);
            font-size:18px;
            position:absolute;
            right:0;
            top:29%;

            @media (max-width: 480px) {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 480px) {
        padding: 10px
    }
`

const Lista = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

function Section({title, titlePosition, link, children}){
    return(
        <Section2 $title={title}>
            <div className="header">
                <h2 className={titlePosition || "left"}>{title}</h2>
                {link && (
                    <Link to={link.href || ""}>{link.text || ""}</Link>
                )}
            </div>
            <Lista>
                {children}
            </Lista>
        </Section2>
    )
}

export default Section;