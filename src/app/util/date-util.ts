import * as moment from 'moment';
export class DateUtil {

    static evoBaseDate = moment("1899-12-30 00:00");
    static fromStringToDate(value: string, format: string): Date{
        if(value == null){
            return null;
        }
        return moment(value, format).toDate();
    }

    static fromEvoDateStringToDate(value: string): Date{
        if(value == null){
            return null;
        }

        // A date comming from the webservice is in the format: /Date(-62135596800000)/
        // where the number is a unix timestamp in miliseconds
        try {
        let reggie = /\/Date\((-?\d*)\)\//;
        let matches = reggie.exec(value);
        let timestamp = (+matches[1]);

        if(timestamp == -62135596800000){
            return null;
        }
        else{
            return moment(timestamp).toDate();
        }
    }
    catch(ex){
          // during two way binding, after user select different date than above format is not found.
          //It throws an error
        if (DateUtil.isDateValid(value)){
           // console.log("fromEvoDateStringToDate : valid" + value);
                return moment(new Date(value).toString()).toDate();
        }
        else {
           //console.log("fromEvoDateStringToDate : not valid" + value);
            return moment(new Date().toString()).toDate();
        }

    }
    }

    static fromDateToEvoDateString(value: Date): string{
        if(value == null){
            return `/Date(-62135596800000)/`;
        }

        // A date comming from the webservice is in the format: /Date(-62135596800000)/
        // where the number is a unix timestamp in miliseconds
        let timestamp = moment(value).valueOf();
        return `/Date(${timestamp})/`;
    }

    static fromEvoDateStringToEvoInt(value: string): number{
        if(value == null){
            return 0;
        }

        let date = DateUtil.fromEvoDateStringToDate(value);
        //let diffInMinutes = moment(date).diff(this.evoBaseDate) / 1000 / 60;
        //return diffInMinutes;
        let timezoneOffset = date.getTimezoneOffset() / (60 * 24);
        let msDateObj = (date.getTime() / 86400000) + (25569 - timezoneOffset);
        // console.log("Converted date :" + msDateObj);
        return Math.trunc(msDateObj);
    }
    static isDateValid(value:string):boolean{

        try  {
            let d = new Date(value)
            return (d.getDate !== undefined) ? true: false;

        }
        catch(ex) {
            return false;
        }

    }
}
