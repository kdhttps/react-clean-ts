import type { IHttpClient, THttpRequest, THttpResponse } from '@/usecases/protocols'
import * as axios from 'axios'

export class AxiosHttpClient implements IHttpClient {
  async request(httpRequest: THttpRequest): Promise<THttpResponse> {
    let response: any = {}
    try {
      response = await axios.request({
        url: httpRequest.url,
        method: httpRequest.method,
        data: httpRequest.data,
        headers: httpRequest.headers,
      })
    } catch (error: any) {
      if (error.response) {
        response = error.response
      } else {
        response.data = error.message
      }
    }

    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    }
  }
}
