export type THttpMethod = "post" | "get" | "put" | "delete" | "patch"

export enum EHttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
  unProcessableEntity = 422,
  conflict = 409,
  notModified = 304,
  paymentRequired = 402,
}

export type THttpRequest = {
  url: string
  method: THttpMethod
  data?: any
  headers?: any
}

export type THttpResponse<T = any> = {
  status: EHttpStatusCode
  data?: T
  headers?: any
}

export interface IHttpClient {
  request(httpRequest: THttpRequest): Promise<THttpResponse>
}
