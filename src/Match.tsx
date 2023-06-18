import React from 'react';

import { stockData } from "./data";
import { ILineData } from './DataInterface';
import Team from './Team';
import './Team.css';

interface lineData {
    "Numero": number,
    "Context": string,
    "Data": {
        "Domicile": {
            "nom": string,
            "logo": string
        },
        "Exterieur": {
            "nom": string,
            "logo": string
        },
        "Score": string
    }
}

interface ThisProps {
    numMatch: number;
}

const getMatch = (num: number) => {

    const defaultLine: ILineData = {
        Context: "Not Found",
        Data: {
            Domicile: {nom: "Not Found", logo: "./none.png",},
            Exterieur: {nom: "Not Found", logo: "./none.png",},
            Score: "-",
        },
        Numero: 0,
    };

    return stockData.find((m: lineData) => m.Numero === num) ?? defaultLine;
}

const Match: React.FC<ThisProps> = ({numMatch}) => {
    const data: ILineData = getMatch(numMatch)

    const { Domicile, Exterieur, Score } = data.Data;
    const Context = data.Context;
    return (
        <div className="AppDiv">
            <div className="Score">{Context}</div>
            <Team nom={Domicile.nom} logo={Domicile.logo}/>
            <div className="Score">{Score}</div>
            <Team nom={Exterieur.nom} logo={Exterieur.logo}/>
        </div>
    );

}
export default Match;
