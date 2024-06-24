export interface ErrorResponse {
  message: string;
  success: boolean;
}

export interface ResponseBase extends ErrorResponse {}
