import { ConfigProvider } from 'antd';
import React from 'react';
import 'src/App.css';
import { version } from 'src/autobuild_version';
import BetsCarousel from 'src/Components/betsCarousel';
import ChatMessage from 'src/Components/ChatMessage';
import ShowContrats from 'src/ShowContrats';
import ShowMatch from 'src/ShowMatch';


const App: React.FC = () => {

    return (

        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0b557e',
                },
            }}
        >
            <BetsCarousel/>
            <ShowMatch/>
            <ShowContrats/>

            <ChatMessage />

            <footer>
                Version courante : {version}
            </footer>

        </ConfigProvider>

    );

}


export default App;

