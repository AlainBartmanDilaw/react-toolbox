import { ConfigProvider } from 'antd';
import React from 'react';
import 'src/App.css';
import Version from 'src/Components/Version';
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
            <Version/>
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

