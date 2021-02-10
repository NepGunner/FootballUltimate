import {Pipe, PipeTransform} from "@angular/core";
import { DateUtil } from "../util/date-util";

@Pipe({name: 'stringToDate'})
export class StringToDatePipe implements PipeTransform {

    /**
     * Constructor
     */
    constructor() {
    }

    /**
     * Transform a date that is passed as string into a date
     * @param value The date passed as string
     * @returns {Date} The Date object
     */
    transform(value: string, format: string): Date {
        return DateUtil.fromStringToDate(value, format);
    }
}