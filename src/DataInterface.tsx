export interface ITeamData {
    idt: number;
    nom: string;
    logo: string;
}
export interface ILineData {
    Numero: number,
    Context:string,
    Data: {
        Team_Home: number,
        Team_Away: number,
        Score: string
    }
}

