export class DServiceItem{
    propertyList : string[];

    constructor(sector : string , major : string , model : string , price : string , brand : string){
        this.propertyList[EServicePropertyType.Sector] = sector;
        this.propertyList[EServicePropertyType.Major] = major;
        this.propertyList[EServicePropertyType.Model] = model;
        this.propertyList[EServicePropertyType.Price] = price;
        this.propertyList[EServicePropertyType.Brand] = brand;
    }

    public getProperty(type:EServicePropertyType) : string{
        return propertyList[type];
    }
}