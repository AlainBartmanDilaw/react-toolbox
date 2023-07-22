import { Carousel, ConfigProvider } from 'antd';
import React from 'react';
import 'src/App.css';
import { version } from 'src/autobuild_version';
import images from 'src/images';
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
            <div className="carousel-container">
                <Carousel autoplay autoplaySpeed={3000}>
                    {
                        images.map(
                            (image: string, index: number) => (
                                <div key={index}>
                                    <img src={image} alt={`${index + 1}`}/>
                                </div>
                            )
                        )
                    }
                </Carousel>
            </div>
            <ShowMatch/>
            <ShowContrats/>

            <footer>
                Version courante : {version}
            </footer>

        </ConfigProvider>

    );

}


export default App;

