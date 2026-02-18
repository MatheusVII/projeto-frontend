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

function Informations({ title, informations }) {
  return (
    <Info>
      <h2>{title}</h2>

      {informations.map((info, index) => (
        <div key={index}>
          <h4>{info.text}</h4>
          <a href="/">{info.link}</a>
        </div>
      ))}
    </Info>
  );
}


export default Informations;