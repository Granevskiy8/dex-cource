import styled from 'styled-components';

export const Input = styled.input`
    width: 366px;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
    background: #FFFFFF;
    border: 0.5px solid #D1D1D1;
    padding-left: 12px;
    color: #707070;
    &:focus {
        background: #FFF;;
        box-shadow: 0.5px solid #D1D1D1;
        outline: none;
    }

`;
export const Label = styled.label`
    position: relative;
    &:after {
        content: '';
        position: absolute;
        right: 12px;
        top: 6px;
        bottom: 0;
        width: 16px;
        height: 16px;
        background: url("assets/icons/search_rounded.svg") center / contain no-repeat;
    }
`;

function InputSearch() {
    return(
        <Label>
            <Input placeholder="Search..."/>
        </Label>
    );
}

export default InputSearch;