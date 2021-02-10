export class Utilities {

  static cast<T>(obj, cl): T {
    obj.__proto__ = cl.prototype;
    return obj;
  }

  /**
   * It does both negative number and positive rounding 
   * @param n  : input number for rounding
   * @param digits : rouding number
   */

  static roundTo(n, digits) {
    var negative = false;
    if (digits === undefined) {
      digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(2);
    if (negative) {
      n = (n * -1).toFixed(2);
    }
    return n;
  }

  /**
   * format text so that it can be appropriately displayed in html content.
   * @param value 
   */
  static formatText(value: string): string {
    if (!value) return value;
    if ((value === null) || (value === '')) {
      return '';
    }
    
    else {
      try {
      var output = value
        //replace possible line breaks.
        .replace(/(\r\n|\r|\n)/g, '<br/>')
        //replace tabs
        .replace(/\t/g, '&nbsp;&nbsp;&nbsp;')
        //replace spaces.
        .replace(/ /g, '&nbsp;');
      
      return output;
    }catch(e) {
    
      return value;
      }
    }
  }


  /**
   * convert array of object  and its chosen columns into csv output.
   */
  static convertArrayOfObjects(jsonData, jsonColumnDefArray) {
    var outputCsv = "";
    // set the column names
    for (var columnIndex = 0; columnIndex < jsonColumnDefArray.length; columnIndex++) {
      outputCsv += "\"" + jsonColumnDefArray[columnIndex].toString().trim() + "\",";
    }
    outputCsv = outputCsv.slice(0, outputCsv.length - 1);
    outputCsv += "\r\n";
    // set the data
    for (var objectIndex = 0; objectIndex < jsonData.length; objectIndex++) {
      var eachLine = "";
      var row = jsonData[objectIndex];
      for (var columnIndex = 0; columnIndex < jsonColumnDefArray.length; columnIndex++) {
        var columnName = jsonColumnDefArray[columnIndex];
        eachLine += "\"" + row[columnName].toString().trim() + "\",";
      }
      eachLine = eachLine.slice(0, eachLine.length - 1);
      outputCsv += eachLine + "\r\n";
    }
    return outputCsv;
  }
  static xml2json(srcDOM) {
  let children = [...srcDOM.children];

  // base case for recursion. 
  if (!children.length) {
    return srcDOM.innerHTML
  }

  // initializing object to be returned. 
  let jsonResult = {};

  for (let child of children) {

    // checking is child has siblings of same name. 
    let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

    // if child is array, save the values as array, else as strings. 
    if (childIsArray) {
      if (jsonResult[child.nodeName] === undefined) {
        jsonResult[child.nodeName] = [Utilities.xml2json(child)];
      } else {
        jsonResult[child.nodeName].push(Utilities.xml2json(child));
      }
    } else {
      jsonResult[child.nodeName] = Utilities.xml2json(child);
    }
  }

  return jsonResult;
}

}