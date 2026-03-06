import styled from "styled-components";

const Filters = styled.div`
    width: 100%;
    padding:1rem;  
    background-color: white;
    margin-bottom:10px;

    & h4{
        color: var(--dark-gray-2);
        font-size: 16px;
    }

    & hr{
        border-color: var(--light-gray-2);
        height: 1px;
    }
`

const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    & .input {
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;

        & input{
            width: 22px;
            height: 22px;

            &:checked{
                accent-color: var(--primary);
            }
        }
    }
`

function FilterGroup({title, inputType, options}){
    return(
        <Filters>
            <h4>{title}</h4>
            <hr />
            <Inputs>
                {options.map((opt, index) => (
                    <div className="input">
                        <input type={inputType} value={opt.value || ""}/>
                        <label htmlFor="">{opt.text}</label>
                    </div>
                ))}

            </Inputs>
        </Filters>
    )
}

export default FilterGroup;