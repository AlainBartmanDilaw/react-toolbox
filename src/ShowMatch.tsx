import { Card } from 'antd';
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
            <Card title="Affichage des matchs" className="Card">
                <SelectMatch onChange={onChange} value={numMatch}/>
                <Match numMatch={numMatch}></Match>
            </Card>
        </div>
    )
}
export default ShowMatch;
