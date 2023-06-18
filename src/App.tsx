import { ConfigProvider } from 'antd';
import React, { useState } from 'react';
import './App.css';
import SelectMatch from './SelectMatch';
import Match from './Match';



const App: React.FC = () => {

    const [numMatch, setNumMatch] = useState(1);
    const onChange = (value: any) => {
        setNumMatch(value);
    };
    return (

    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#0b557e',
            },
        }}
    >
        <SelectMatch onChange={onChange} value={numMatch}/>
        <Match numMatch={numMatch}></Match>
    </ConfigProvider>

    );

}


export default App;
