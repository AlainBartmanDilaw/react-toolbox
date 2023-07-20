import { ConfigProvider } from 'antd';
import React from 'react';
import 'src/App.css';
import ShowContrats from 'src/ShowContrats';
import ShowMatch from 'src/ShowMatch';
import {version} from 'src/autobuild_version';


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
