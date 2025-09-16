export class ApiError extends Error {
  statusCode: number;
  success: boolean;

  constructor(statusCode: number, message = "Something went wrong") {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;
    this.success = false;

    // Fix prototype chain (important when targeting ES5)
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
