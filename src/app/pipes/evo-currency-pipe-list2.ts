import { Pipe, PipeTransform } from "@angular/core";

const PADDING = "000000";

@Pipe({ name: "evoCurrencyList2" })
export class EvoCurrencyPipeList2 implements PipeTransform {


  private PREFIX: string
  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;
  private SUFFIX: string

  constructor() {
    // TODO comes from configuration settings
    this.PREFIX = ''
    this.DECIMAL_SEPARATOR = ",";
    this.THOUSANDS_SEPARATOR = ".";
    this.SUFFIX = ' '
  }

// differance in compering to EvoCurrencyPipeList is returning 0 if the value is null or 0

  transform(value: string, fractionSize: number = 2): string {

    if (value==''  || +value==0 ) {
      return '0,00';
    }
    else {
      let [ integer, fraction = "" ] = (value || "").toString()
        .split(".");

      fraction = fractionSize > 0
        ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
        : this.DECIMAL_SEPARATOR +"00";

      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR) || "0";

      return this.PREFIX + integer + fraction + this.SUFFIX;
    }
  }

  parse(value: string, fractionSize: number = 2): string {
    let [ integer, fraction = "" ] = (value || "").replace(this.PREFIX, "")
      .replace(this.SUFFIX, "")
      .split(this.DECIMAL_SEPARATOR);

    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : this.DECIMAL_SEPARATOR +"00";

    return integer + fraction;
  }

}
