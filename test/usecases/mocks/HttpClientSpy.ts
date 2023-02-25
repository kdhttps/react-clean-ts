import { EHttpStatusCode, IHttpClient, THttpRequest, THttpResponse } from '@/usecases/protocols'

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
