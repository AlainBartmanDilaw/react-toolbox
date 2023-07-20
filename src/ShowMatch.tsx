import React, { useState } from 'react';
import Match from './Match';
import SelectMatch from './SelectMatch';

const ShowMatch: React.FC = () => {

    const [numMatch, setNumMatch] = useState(1);
    const onChange = (value: any) => {
        setNumMatch(value);
    };

    return (
        <div>
            <SelectMatch onChange={onChange} value={numMatch}/>
            <Match numMatch={numMatch}></Match>
        </div>
    )
}
export default ShowMatch;
