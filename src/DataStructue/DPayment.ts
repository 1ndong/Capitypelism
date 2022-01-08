class DPayment{
    targetBeing : CBeing;
    targetService : DServiceItem;

    constructor(being : CBeing , service : DServiceItem){
        this.targetBeing = being;
        this.targetService = service;
    }
}