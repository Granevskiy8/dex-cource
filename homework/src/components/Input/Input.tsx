import styled from 'styled-components';

interface IProps {
    error?: boolean
    errorMes?: string
    id?: string
    label?: string
    disabled?: boolean
    icon?: boolean
    type?: string
    value?: any
    onChange?: any
    iconName?: string
  }

const Input1 = styled.input<IProps>`
    width: 96%;
    height: 40px;
    border-radius: 4px;
    background: #F6F6F6;
    border: ${props => props.error ? '1px solid #FF768E' : 'none'};
    padding-left: 12px;
    font-size: 14px;
    color: ${props => props.disabled ? '#D1D1D1' : '#303030'};
    :hover {
        background: #D1D1D1;
    }
    &:focus {
        background: #F6F6F6;
        box-shadow: 0px 0px 5px #D9D9D9;
        outline: none;
    }
`;
const Label = styled.label`
    font-size: 14px;
    color: #707070;
    padding-bottom: 8px;
    line-height: 24px;

`;

const LabelIcon = styled.label<IProps>`
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: 330px;
        bottom: 0;
        width: 16px;
        height: 16px;
        background: url("assets/icons/${props => props.iconName}.svg") center / contain no-repeat;
    }
`;
const Errors = styled.span`
    font-size: 12px;
    line-height: 18px;
    color: #FF768E;
`;


export default function Input(s: IProps) {
    let icons
    let errors
    if (s.icon) {
        icons = <LabelIcon iconName={s.iconName}/>
    }
    if (s.error) {
        errors = <Errors>{s.errorMes}</Errors>
    }
    return (
        <Label htmlFor={s.id}>
            {s.label}
            <div>
                {icons}
                <Input1 
                icon={s.icon}
                id={s.id} 
                error={s.error} 
                disabled={s.disabled} 
                type={s.type} 
                value={s.value}
                onChange={s.onChange}
                iconName={s.iconName}/>
            </div>
            {errors}
        </Label>
    )
}



