export class DHCentralBank extends DHistory{
    makeMoneyAmount : bigint;

    constructor(time :DTime , amount : bigint){
        super(time);
        this.makeMoneyAmount = amount;
    }
}