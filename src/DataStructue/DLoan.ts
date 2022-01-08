export class DLoan{
    loanMonth : number;
    repaymentDuty : bigint;

    constructor(loanMonth : int , repaymentDuty : bigint){
        this.loanMonth = loanMonth;
        this.repaymentDuty = repaymentDuty;
    }
}