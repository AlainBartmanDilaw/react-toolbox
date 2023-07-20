import { ConfigProvider } from 'antd';
import React from 'react';
import './App.css';
import ShowContrats from './ShowContrats';
import ShowMatch from './ShowMatch';
import {version} from './autobuild_version';


const App: React.FC = () => {

    return (

    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#0b557e',
            },
        }}
    >
        <ShowMatch/>
        <ShowContrats/>

        <footer>
            Version courante : {version}
        </footer>

    </ConfigProvider>

    );

}


export default App;
