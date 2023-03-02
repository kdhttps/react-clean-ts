import type { THttpRequest, THttpResponse } from '@/usecases/protocols'
import { AxiosHttpClient } from '@/drivers/AxiosHttpClient'

vi.mock('axios', () => ({
  default: async () => mockRequestMethod(),
}))

const mockRequestMethod = vi.fn()

const mockRequestData: THttpRequest = {
  method: 'get',
  url: 'https://test.com/users',
}

const mockResponseData: THttpResponse = {
  status: 200,
  data: [
    {
      name: 'valid user',
      email: 'valid@mail.com',
    },
  ],
}

describe('Axios Http Client', () => {
  test('should return correct values', async () => {
    const sut = new AxiosHttpClient()
    mockRequestMethod.mockImplementationOnce(async () => mockResponseData)
    const response = await sut.request(mockRequestData)
    expect(response).toEqual(mockResponseData)
  })

  test('should return status 404 if axios returns 404', async () => {
    const sut = new AxiosHttpClient()
    mockResponseData.status = 404
    mockRequestMethod.mockImplementationOnce(async () =>
      Promise.reject({ response: mockResponseData }),
    )
    const response = await sut.request(mockRequestData)
    expect(response.status).toBe(mockResponseData.status)
  })

  test('should return status 500 if axios returns 500', async () => {
    const sut = new AxiosHttpClient()
    mockResponseData.status = 500
    mockRequestMethod.mockImplementationOnce(async () =>
      Promise.reject({ response: mockResponseData }),
    )
    const response = await sut.request(mockRequestData)
    expect(response.status).toBe(mockResponseData.status)
  })

  test('should return error message in data if axios returns', async () => {
    const sut = new AxiosHttpClient()
    const message = 'Internet not working'

    mockRequestMethod.mockImplementationOnce(async () => Promise.reject({ message, status: 500 }))
    const response = await sut.request(mockRequestData)
    expect(response.data).toBe(message)
  })
})
