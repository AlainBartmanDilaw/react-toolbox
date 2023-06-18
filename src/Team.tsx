import { Image } from 'antd';
import React from 'react';
import './Team.css';

interface ThisProps {
    nom: string;
    logo: string;
}

const Team: React.FC<ThisProps> =  ({nom, logo}) => {

    console.log(logo)
    return (
        <>
            <div className="team">
                <Image className="image"
                       src={require(`${logo}`)}
                       preview={false}
                />
                <div>
                    {nom}
                </div>
            </div>
        </>
    );

}
export default Team;
