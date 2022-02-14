import styled from 'styled-components';

interface IProps {
    add?: boolean
  }

export const Button = styled.button<IProps>`
    width: ${props => props.add ? '104px' : '366px'};
    height: 40px;
    background: #E4163A;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-size: 15px;
    :hover {
        background: #FF5761;
    }
    :active {
        background: #C60E2E;;
    }
    :disabled {
        color: #D1D1D1;
        background: #F6F6F6;
    }
`;