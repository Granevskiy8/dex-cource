import Select from 'react-select';
import './MultiSelect.css'


interface IProps {
    options: any
    onChange?: any
    defaultValue?: any
    value?: any
}


function MultiSelect(s: IProps) {
    return (
                <Select 
                options={s.options}
                onChange={s.onChange}
                defaultValue={s.defaultValue}
                value={s.value}
                classNamePrefix="react-select-multi"
                isMulti
                />
    )
}

export default MultiSelect;