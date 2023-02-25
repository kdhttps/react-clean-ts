import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'
import { IGetUsers, TUser } from '@/domain/i-usecases'
import { EHttpStatusCode, IHttpClient } from '@/usecases/protocols'

export class GetUsers implements IGetUsers {
  constructor(private readonly url: string, private readonly httpClient: IHttpClient) {}

  async execute(acccessToken: string): Promise<Error | TUser[]> {
    const { data, status } = await this.httpClient.request({
      url: this.url,
      method: 'get',
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
