export class DBankMember{
    client : CBeing;
    accountList : CBAccount[];

    constructor(client :CBeing){
        this.client = client;
    }
}