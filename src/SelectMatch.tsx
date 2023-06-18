import React from 'react';
import { InputNumber } from 'antd';
import { stockData } from './data';
import './SelectMatch.css';

interface ThisComponentProps {
    value: number;
    onChange: (value: number) => void;
}
const SelectMatch: React.FC<ThisComponentProps> = ({value, onChange}) => {

    const maxValue = Math.max(...stockData.map(x => x.Numero));

    const handleInputChange = (newValue: any) => {
        onChange(Number(newValue));
    };

    return (
        <InputNumber className={"input-number"} min={1} max={maxValue} defaultValue={1} onChange={handleInputChange}/>
        );
}

export default SelectMatch;
