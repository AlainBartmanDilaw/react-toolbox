export interface ITeamData {
    idt: number;
    nom: string;
    logo: string;
}
export interface ILineData {
    Numero: number,
    Context:string,
    Data: {
        Domicile: {
            nom: string,
            logo: string
        },
        Exterieur: {
            nom: string,
            logo: string
        },
        Score: string
    }
}

