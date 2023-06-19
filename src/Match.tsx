import React from 'react';

import { stockData, teamData } from "./data";
import { ILineData, ITeamData } from './DataInterface';
import Team from './Team';
import './Team.css';

interface ThisProps {
    numMatch: number;
}

const getMatch = (num: number) => {

    const defaultLine: ILineData = {
        Context: "Not Found",
        Data: {
            Team_Home: 0,
            Team_Away: 0,
            Score: "-",
        },
        Numero: 0,
    };

    return stockData.find((m: ILineData) => m.Numero === num) ?? defaultLine;
}

const Match: React.FC<ThisProps> = ({numMatch}) => {
    const data: ILineData = getMatch(numMatch)

    const Score = data.Data.Score;
    const Team_Home = teamData.find((t:ITeamData) => t.idt === data.Data.Team_Home);
    const Team_Away = teamData.find((t:ITeamData) => t.idt === data.Data.Team_Away);
    const Context = data.Context;
    return (
        <div className="AppDiv">
            <div className="Score">{Context}</div>
            <Team nom={Team_Home?.nom??"Not found"} logo={Team_Home?.logo??"./none.png"}/>
            <div className="Score">{Score}</div>
            <Team nom={Team_Away?.nom??"Not found"} logo={Team_Away?.logo??"./none.png"}/>
        </div>
    );

}
export default Match;
