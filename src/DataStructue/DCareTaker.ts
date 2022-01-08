export class DCareTaker{
    list : DHistory[];

    addMemento(history:DHistory){
        this.list.push(history);
    }
}