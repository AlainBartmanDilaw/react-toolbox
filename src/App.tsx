import { ConfigProvider } from 'antd';
import React from 'react';
import './App.css';

import logo from "./psg.png";
import logoRéalMadrid from "./Réal.png";
import Team from './Team';

const App: React.FC = () => (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#0b557e',
            },
        }}
    >
        <div className="AppDiv">
            <div className="Score">Finale de Champion's League</div>
            <Team nom={"Paris Saint-Germain"} logo={logo}/>
            <div className="Score">3 - 0</div>
            <Team nom={"Madrid"} logo={logoRéalMadrid}/>
        </div>
    </ConfigProvider>
);

export default App;
