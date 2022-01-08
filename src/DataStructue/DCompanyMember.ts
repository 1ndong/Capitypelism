export class DCompanyMember{
    member : CPeople;
    salaryAccount : PAAccount;
    companyPosition : ECompanyPosition;

    constructor(people : CPeople , account : PAAccount , position : ECompanyPosition){
        this.member = people;
        this.salaryAccount = account;
        this.companyPosition = position;
    }
}