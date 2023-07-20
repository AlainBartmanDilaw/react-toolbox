import React, { useState } from 'react';
import Match from 'src/Match';
import SelectMatch from 'src/SelectMatch';

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
