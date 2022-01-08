class DTime{
    year : number;
    month : number;
    day : number;
    dayoftheweek : string = "";

    constructor(year : number , month : number , day : number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    getYear() : number{
        return this.year;
    } 
    
    setYear(year : number){
        this.year = year;
    }

    getMonth() : number{
        return this.month;
    }

    setMonth(month : number){
        this.month = month;
    }

    getDay() : number{
        return this.day;
    }

    setDay(day : number){
        this.day = day;
    }

    getDayOfTheWeek() : string{
        return this.dayoftheweek;
    }

    toString() : string{
        return this.year + "/" + this.month + "/" + this.dayoftheweek + "요일";
    }

    str_day = ["일","월","화","수","목","금","토"];
    month_day = [31,28,31,30,31,30,31,31,30,31,30,31];

    isLeapYear(year : number){
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            this.month_day[1] = 29;
        }else{
            this.month_day[1] = 28;
        }
    }

    findDayOfTheWeek(year:number,month:number,day:number){
        let totalDay = 0;
        if(year < 2020){
            for(let i = 2019 ; i > 2019;i--){
                this.isLeapYear(i);
                for(let j =0 ; j <=11 ; j++){
                    totalDay += this.month_day[j];
                }
            }
            this.isLeapYear(year);
            for(let i = month ; i <=month ; i++){
                totalDay += this.month_day[i];
            }
            totalDay += this.month_day[month-1] - day+1;
            this.dayoftheweek = this.str_day[(10 - (totalDay) % 7) % 7];
        }else{
            for(let i = 2020 ; i< year ; i++){
                this.isLeapYear(i);
                for(let j =0 ; j <=11 ; j++){
                    totalDay += this.month_day[j];
                }
            }
            this.isLeapYear(year);
            for(let i = 0 ; i < month-1 ; i++){
                totalDay+=this.month_day[i];
            }

            totalDay+=day-1;
            this.dayoftheweek = this.str_day[(totalDay+3)%7];
        }
    }
}