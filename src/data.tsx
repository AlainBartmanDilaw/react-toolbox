import { ILineData, ITeamData } from './DataInterface';

export const teamData: ITeamData[] = [
    {
        idt: 1,
        nom: "Paris Saint-Germain",
        logo: "./psg.png"
    },
    {
        idt: 2,
        nom: "Real Madrid",
        logo: "./Réal.png"
    },
    {
        idt: 3,
        nom: "Olympique de Marseille",
        logo: "./om.svg.png"
    },
]

export const stockData: ILineData[] = [
    {
        "Numero": 1,
        "Context": "Finale de Champion's League",
        "Data": {
            Team_Home: 1,
            Team_Away: 2,
            "Score": "4 - 0"
        }
    },
    {
        "Numero": 2,
        "Context": "1/2 finale de Champion's League",
        "Data": {
            Team_Home: 2,
            Team_Away: 1,
            "Score": "0 - 2"
        }
    },
    {
        "Numero": 4,
        "Context": "1/4 finale de Champion's League",
        "Data": {
            Team_Home: 3,
            Team_Away: 2,
            "Score": "4 - 0"
        }
    },
]

