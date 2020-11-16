import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {throwError} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class ResponseParser
{
  constructor(
    protected toastr: ToastrService,
  )
  {
  }


  parseError(response: HttpErrorResponse)
  {
    if (response.error && response.error.errorMessage)
    {
      this.toastr.error(response.error.errorMessage);
    }
    /**
     * Check UnAuthorize Error
     */
    if (response.status === 401)
    {
    }

    /**
     * Check UnProcessable  Error
     */
    if (response.status === 422)
    {
      if (response.error && response.error.can_show_message && response.error.message)
      {
        if (response.error.status == 'warning')
        {
          this.toastr.warning(response.error.message, response.error.status);
        } else
        {
          this.toastr.error(response.error.message, response.error.status);
        }

        return throwError(response.error.message);
      } else
      {
        return throwError('please fill required item(s)');
      }


    }
    /**
     * Check Forbidden Error
     */
    if (response.status === 403)
    {
      return throwError('Forbidden');
    }
    /**
     * Check not valid Error
     */
    if (response.status === 400)
    {
    }

    try
    {
      //console.log(response);
      //response.error.error.message
      //this.toastr.error('Unexpected error');
    } catch (err)
    {
      console.log(err);
    }

    if (response.error instanceof ErrorEvent)
    {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', response.error.message);
    } else
    {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (response && response.error && response.error.error)
      {
        console.error(
          `Backend returned code ${response.status}, ` +
          `body was: ${response.error.error.message}`
        );
      }
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
