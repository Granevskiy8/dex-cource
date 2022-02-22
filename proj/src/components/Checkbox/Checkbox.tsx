import styled from 'styled-components';

interface IProps {
    id?: string
    label?: string
    value?: any
    onChange?: any
  }


const InputCheckbox = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: inline-flex;
    align-items: center;
    user-select: none;
    &:before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #9C9C9C;
        border-radius: 1px;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
        background-color: #FFFF;
    }
    &:checked+label::before {
        border-color: #E4163A;
        background-color: #E4163A;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }
    &:not(:disabled):not(:checked)+label:hover::before {
        border-color: #E4163A;
`;
const LabelCheckbox = styled.label`
    color: #707070;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    user-select: none;
    &:before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #9C9C9C;
        border-radius: 1px;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
        background-color: #FFFF;
    }

`;

function CheckBox(s: IProps) {
    return(
        <>
            <InputCheckbox type="checkbox" id={s.id} value={s.value} onChange={s.onChange}/>
            <LabelCheckbox htmlFor={s.id}>{s.label}</LabelCheckbox>
        </>
    )
};
export default CheckBox;