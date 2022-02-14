import Select from 'react-select';
import styled from 'styled-components';
import './SimpleSelect.css'


interface IProps {
    options: any
    onChange?: any
    defaultValue?: any
    value?: any
    id?: string
    label?: string
}

const Label = styled.label`
    font-size: 14px;
    color: #707070;
    padding-bottom: 8px;
    line-height: 24px;

`;
function SimpleSelect(s: IProps) {
    return (
            <Label htmlFor={s.id}>
            {s.label}
                <Select 
                options={s.options}
                onChange={s.onChange}
                defaultValue={s.defaultValue}
                value={s.value}
                id={s.id}
                classNamePrefix="react-select"
                />
            </Label>
    )
}

export default SimpleSelect