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
            "Domicile": {
                "nom": "Paris Saint-Germain",
                "logo": "./psg.png"
            },
            "Exterieur": {
                "nom": "Madrid",
                "logo": "./Réal.png"
            },
            "Score": "4 - 0"
        }
    },
    {
        "Numero": 2,
        "Context": "1/2 finale de Champion's League",
        "Data": {
            "Domicile": {
                "nom": "Olympique Marseille",
                "logo": "./om.svg.png"
            },
            "Exterieur": {
                "nom": "Madrid",
                "logo": "./Réal.png"
            },
            "Score": "0 - 2"
        }
    },
    {
        "Numero": 4,
        "Context": "1/4 finale de Champion's League",
        "Data": {
            "Domicile": {
                "nom": "Paris Saint-Germain",
                "logo": "./psg.png"
            },
            "Exterieur": {
                "nom": "Madrid",
                "logo": "./Réal.png"
            },
            "Score": "4 - 0"
        }
    },
]

