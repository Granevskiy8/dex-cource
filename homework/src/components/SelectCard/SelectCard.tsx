import Select from 'react-select';
import './SelectCard.css'


interface IProps {
    options: any
    onChange?: any
    defaultValue?: any
    value?: any
}


function SelectCard(s: IProps) {
    return (
                <Select 
                options={s.options}
                onChange={s.onChange}
                defaultValue={s.defaultValue}
                value={s.value}
                classNamePrefix="react-select-page"
                />
    )
}

export default SelectCard;