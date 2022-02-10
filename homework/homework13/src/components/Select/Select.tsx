import styled from 'styled-components';

const Select = styled.select`
    width: 366px;
    height: 40px;
    border-radius: 4px;
    background: #F6F6F6;
    font-size: 14px;
    color: #707070;
    border: none;
    padding: 8px 0px 8px 12px;
    &:focus {
        outline: none;
        border: none;
    }
    :active {
        outline: none;
    }
    
`;
const Option = styled.option`
    background: #FFFFFF;
    border: 0.5px solid #D1D1D1;
    border-radius: 4px;
    color: #9C9C9C;
    outline: none;
`;

function SelectInput() {
    return (
        <Select>
            <Option disabled selected>Select...</Option>
            <Option>Select 1</Option>
            <Option>Select 2</Option>
            <Option>Select 3</Option>
        </Select>
    )
};

export default SelectInput;