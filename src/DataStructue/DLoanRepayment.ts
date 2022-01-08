export class DLoanRepayment{
    repaymentAmountOneMonth : bigint;
    repaymentInterest : bigint;
    round : number;

    constructor(round : number , amount : bigint , interest : bigint){
        this.round = round;
        this.repaymentAmountOneMonth = amount;
        this.repaymentInterest = interest;
    }
}