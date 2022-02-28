import styled from 'styled-components';
import { NavLink } from "react-router-dom";

interface IProps {
    disabled?: boolean
  }

export const Link = styled(NavLink)<IProps>`
    color: ${props => props.disabled ? '#D1D1D1' : '#E4163A'}
    font-size: 14px;
    line-height: 19px;
    text-decoration-line: underline;
    :visited {
        color: ${props => props.disabled ? '#D1D1D1' : '#E4163A'}
    }
`;