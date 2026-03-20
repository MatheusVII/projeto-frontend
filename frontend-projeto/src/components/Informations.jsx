import styled from "styled-components";

const Info = styled.li`
    width:20%;
    height:100%;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    gap: 2rem;

    & h2{   
        margin: 0;
        width:100%;
        padding-bottom: 10px;
    }

    & a{
      text-decoration: none;
    }

    @media (max-width: 480px) {
      padding: 0;
      width: calc(50% - 3rem);
    }
`

function Informations({ title, informations }) {
  return (
    <Info>
      <h2>{title}</h2>

      {informations.map((info, index) => (
        <div key={index}>
          <a href={info.link || null}>{info.text}</a>
        </div>
      ))}
    </Info>
  );
}


export default Informations;