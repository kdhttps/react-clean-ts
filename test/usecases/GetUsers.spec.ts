import { GetUsers } from "@/usecases/GetUsers"
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors"
import { TUser } from "@/domain/i-usecases"
import { EHttpStatusCode } from "@/usecases/protocols"
import { HttpClientSpy } from "@test/usecases/mocks"

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
  httpClient.responseData = [ ...users ]

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

  test("should throw UnexpectedError error if HttpClient returns status except 200", async () => {
    const { sut, httpClient, accessToken } = makeSUT()
    httpClient.status = EHttpStatusCode.serverError
    const promise = sut.execute(accessToken)
    expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test("should return correct users if HttpClient returns 200", async () => {
    const { sut, httpClient, accessToken, users } = makeSUT()
    httpClient.status = EHttpStatusCode.ok
    const response: TUser[] = (await sut.execute(accessToken)) as TUser[]
    expect(response.pop()?.id).toBe(users.pop()?.id)
    expect(response).toEqual(users)
  })
})
