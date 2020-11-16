import {DatePipe} from '@angular/common';

export class StringHelper
{


  /**
   * Remove all characters in the char set from right and left sides of the string
   */
  static trim(string, charSet = [])
  {
    /**
     * Return an empty string if given string is not defined
     */
    if (!string)
    {
      return '';
    }

    /**
     * Trim left side of the string
     */
    string = StringHelper.leftTrim(string, charSet);

    /**
     * Trim right side of the string
     */
    string = StringHelper.rightTrim(string, charSet);

    /**
     * Return value
     */
    return string;
  }


  /**
   * Remove all characters in the char set from left side of the string
   */
  static leftTrim(string, charSet = [])
  {
    /**
     * Return an empty string if given string is not defined
     */
    if (!string)
    {
      return '';
    }

    /**
     * Add white spaces to list of characters set
     */
    charSet.push(' ');
    charSet.push('\r');
    charSet.push('\n');
    charSet.push('\t');

    /**
     * Remove all characters in the Char Set from left side of the string
     */
    while (string.length > 0 && charSet.indexOf(string[0]) !== -1)
    {
      string = string.slice(1);
    }

    return string;
  }


  /**
   * Remove all characters in the char set from right side of the string
   */
  static rightTrim(string, charSet = [])
  {
    /**
     * Return an empty string if given string is not defined
     */
    if (!string)
    {
      return '';
    }

    /**
     * Add white spaces to list of characters set
     */
    charSet.push(' ');
    charSet.push('\r');
    charSet.push('\n');
    charSet.push('\t');

    /**
     * Remove all characters in the Char Set from right side of the string
     */
    while (string.length > 0 && charSet.indexOf(string[string.length - 1]) !== -1)
    {
      string = string.slice(0, -1);
      ;
    }

    return string;
  }

  /**
   * Convert file size to human readable string
   * @param {number} fileSize The number of bytes
   * @return {String} Human readable file size
   */
  static getReadableFileSize(fileSize: number)
  {
    let K = 1024,
        M = K * 1024,
        G = M * 1024,
        T = G * 1024;


    if (fileSize >= T)
    {
      return Math.round(fileSize / T) + ' TB';
    } else if (fileSize >= G)
    {
      return Math.round(fileSize / G) + ' GB';
    } else if (fileSize >= M)
    {
      return Math.round(fileSize / M) + ' MB';
    } else if (fileSize >= K)
    {
      return Math.round(fileSize / K) + ' KB';
    } else
    {
      return fileSize + ' B';
    }

  }

  /**
   * Convert file size to human readable string
   * @param {Integer} fileSize The number of bytes
   * @return {String} Human readable file size
   */
  static getReadableFileSizeInPersian(fileSize)
  {
    let K = 1024,
        M = K * 1024,
        G = M * 1024,
        T = G * 1024;


    if (fileSize >= T)
    {
      return Math.round(fileSize / T) + ' ترابایت';
    } else if (fileSize >= G)
    {
      return Math.round(fileSize / G) + ' گیگابایت';
    } else if (fileSize >= M)
    {
      return Math.round(fileSize / M) + ' مگابایت';
    } else if (fileSize >= K)
    {
      return Math.round(fileSize / K) + ' کیلوبایت';
    } else
    {
      return fileSize + ' بایت';
    }

  }

  /**
   * Get time from given UTC till now in human readable format
   */
  static getTimeTillNow(pastTime: number)
  {
    let pipe = new DatePipe('en-US');

    let currentTime: number = Math.round(Date.now()),
        differenceTime      = currentTime - pastTime;

    if (differenceTime < 30)
    {
      return 'a few seconds ago';
    } else if (differenceTime < 60)
    {
      return 'less than one minute ago';
    } else if (differenceTime < 3600)
    {
      let minutes = Math.round(differenceTime / 60);

      return ` about ${minutes} minutes ago `;
    } else if (differenceTime < 86400)
    {
      let hours = Math.round(differenceTime / 3600);

      return ` about  ${hours} hours ago`;

    } else if (differenceTime < 604800)
    {
      let days = Math.round(differenceTime / 86400);

      return `about
					${days} days ago `;
    } else
    {
      let date = new Date(pastTime * 1000);

      return pipe.transform(date, 'short');
    }
  }

  /**
   * Generate random string
   *
   * @return {String} The 32 characters random string
   */
  static getRandomString(length: number = 32)
  {
    let randomString    = '',
        legalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        timestamp       = Date.now().toString();

    /**
     * Create 19 characters string just with alphabetic characters and numbers
     */
    for (var i = 0; i < length - timestamp.length; i++)
    {
      randomString += legalCharacters.charAt(Math.floor(Math.random() * legalCharacters.length));
    }

    /**
     * Append current timestamp to guarantee the uniqueness
     */
    randomString += timestamp;


    /**
     * Return the random string
     */
    return randomString;
  }


  /**
   * Getting all regex matches
   */
  static getAllRegexMatches(str, pattern)
  {
    let matches,
        regexResults = [];

    do
    {
      /**
       * Execute regex search
       */
      matches = pattern.exec(str);


      if (matches !== null)
      {
        /**
         * Add matches to list
         */
        regexResults.push(matches);
      }
    }
    while (matches); //Check whether anything matched or not

    /**
     * Return list of matches
     */
    return regexResults;
  }


  static getFixedNumber(value: any, toFixed: number = 8): string
  {
    //let num = parseFloat(String(value).replace(/,/g, ''));
    //if (!isNaN(Number(num)))
    //{
    //  return Number(Number(num).toFixed(toFixed)).toLocaleString('fullwide', { useGrouping: false })
    //}

    let num    = parseFloat(String(value).replace(/,/g, ''));
    let x: any = Number(num).toFixed(toFixed);

    if (Math.abs(x) < 1.0)
    {
      let e = parseInt(x.toString().split('e-')[1]);
      if (e)
      {
        x *= Math.pow(10, e - 1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else
    {
      let e = parseInt(x.toString().split('+')[1]);
      if (e > 20)
      {
        e -= 20;
        x /= Math.pow(10, e);
        x += (new Array(e + 1)).join('0');
      }
    }
    return x;

  }

}
