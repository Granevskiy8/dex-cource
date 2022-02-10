import styled from 'styled-components';

interface IProps {
    error?: boolean
  }

export const Input = styled.input<IProps>`
    width: 366px;
    height: 40px;
    border-radius: 4px;
    background: #F6F6F6;
    border: ${props => props.error ? '1px solid #FF768E' : 'none'};
    padding-left: 12px;
    font-size: 14px;
    color: #303030;
    :hover {
        background: #D1D1D1;
    }
    &:focus {
        background: #F6F6F6;
        box-shadow: 0px 0px 5px #D9D9D9;
        outline: none;
    }
    :disabled {
        color: #D1D1D1;
        background: #F6F6F6;
    }
`;