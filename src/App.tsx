import { ConfigProvider } from 'antd';
import React from 'react';
import 'src/App.css';
import { version } from 'src/autobuild_version';
import EditableCells from 'src/Components/EditableCells';
import MasterDetailForm from 'src/Components/MasterDetailForm';
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
            <header>
                <div>
                    Version courante : {version}
                </div>
            </header>
            <EditableCells/>
            <MasterDetailForm/>
            {/*<BetsCarousel/>*/}
            <ShowMatch/>
            <ShowContrats/>

            <footer>
            </footer>

        </ConfigProvider>

    );

}


export default App;

