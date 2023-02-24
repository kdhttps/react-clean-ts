export interface IGetUsers {
  execute(acccessToken: string): Promise<TUser[] | Error>
}

export interface TUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    city: string
    zipcode: string
  }
}

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

export class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalid credentials")
    this.name = "InvalidCredentialsError"
  }
}

export class UnexpectedError extends Error {
  constructor() {
    super("Something went wrong! Try again soon.")
    this.name = "UnexpectedError"
  }
}

export class HttpClientSpy implements IHttpClient {
  url?: string
  method?: string
  requestData?: any
  responseData?: any
  requestHeaders?: any
  responseHeaders?: any = {}
  status: EHttpStatusCode = EHttpStatusCode.created

  async request(httpRequest: THttpRequest): Promise<THttpResponse> {
    this.url = httpRequest.url
    this.method = httpRequest.method
    this.requestData = httpRequest.data
    this.requestHeaders = httpRequest.headers
    return {
      status: this.status,
      data: this.responseData,
      headers: this.responseHeaders,
    }
  }
}

class GetUsers implements IGetUsers {
  constructor(private readonly url: string, private readonly httpClient: IHttpClient) {}

  async execute(acccessToken: string): Promise<Error | TUser[]> {
    const { data, status } = await this.httpClient.request({
      url: this.url,
      method: "get",
      headers: {
        Authorization: `Bearer ${acccessToken}`,
      },
    })

    if (status === EHttpStatusCode.unauthorized) {
      throw new InvalidCredentialsError()
    } else if (status !== EHttpStatusCode.ok) {
      throw new UnexpectedError()
    }

    return data as TUser[]
  }
}

const makeSUT = () => {
  const users: TUser[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "city": "Gwenborough",
        "zipcode": "92998-3874",
      },
    },
  ]

  const httpClient = new HttpClientSpy()
  httpClient.responseData = users

  const url = "https://localhost/users"
  const sut = new GetUsers(url, httpClient)
  const accessToken = "dsds343rdsd3"

  return {
    sut,
    accessToken,
    httpClient,
    users,
  }
}

export const throwError = (): never => {
  throw new Error()
}

describe("Get Users", () => {
  test("should call httpClient with correct header access token", async () => {
    const { sut, accessToken, httpClient } = makeSUT()
    httpClient.status = EHttpStatusCode.ok
    await sut.execute(accessToken)
    expect(httpClient.requestHeaders.Authorization).toBe(`Bearer ${accessToken}`)
  })

  test("should throw error if HttpClient throws", async () => {
    const { sut, accessToken, httpClient } = makeSUT()
    vi.spyOn(httpClient, "request").mockImplementationOnce(throwError)
    const promise = sut.execute(accessToken)
    expect(promise).rejects.toThrow()
  })

  test("should throw InvalidCredentialsError error if HttpClient returns status 401", async () => {
    const { sut, httpClient, accessToken } = makeSUT()
    httpClient.status = EHttpStatusCode.unauthorized
    const promise = sut.execute(accessToken)
    expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})
