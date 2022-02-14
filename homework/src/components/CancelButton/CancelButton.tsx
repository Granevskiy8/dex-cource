import styled from 'styled-components';

export const CancelButton = styled.button`
    width: 171px;
    height: 40px;
    font-size: 15px;
    color: #9C9C9C;
    background: #ffff;
    border-radius: 4px;
    border: 1px solid #9C9C9C;
    :hover {
        background: #D1D1D1;
    }
    :active {
        color: #707070;
        background: #9C9C9C;
        border: 1px solid #707070;
    }
    :disabled {
        color: #D1D1D1;
        background: #F6F6F6;
    }
`;