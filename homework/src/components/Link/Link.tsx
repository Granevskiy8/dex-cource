import styled from 'styled-components';

interface IProps {
    disabled?: boolean
  }

export const Link = styled.a<IProps>`
    color: ${props => props.disabled ? '#D1D1D1' : '#E4163A'}
    font-size: 14px;
    line-height: 19px;
    text-decoration-line: underline;
    :visited {
        color: ${props => props.disabled ? '#D1D1D1' : '#E4163A'}
    }
`;