import { InputNumber } from 'antd';
import { useState } from 'react';

interface ThisProps {
    defaultValue: number;
}

const InputNumberPositif: React.FC<ThisProps> = ({defaultValue}) => {

    const [ value, setValue ] = useState<string | number | null>(defaultValue);

    return (
        <InputNumber min={0} max={100}
                     value={value}
                     onChange={setValue}
        />
    );
}
export default InputNumberPositif;
