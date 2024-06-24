import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { ErrorResponse } from "@interfaces/index";

export const httpErrorHandler = (err: HttpErrorResponse): Observable<{
  error: boolean, msg: string
}> => {
  let errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
  if (err.error?.message) {
    errorMessage = err.error?.message
  }
  try {
    err.error as unknown as ErrorResponse;
    if (err.error.errors) {
      errorMessage = err.error.errors[0].detail;
    }
  } catch {}
  return of({ error: true, msg: errorMessage });
}
