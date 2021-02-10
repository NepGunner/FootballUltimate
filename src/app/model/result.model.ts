export class Result{
    public resultId: number;
    public date: string;
    public team1Id:number;
    public team1name: string;
    public team2Id:number;
    public team2name: string;
    public score1:number;
    public score2:number;
}


export class ResultGroup{
    public date: string;
    public games: [];
}