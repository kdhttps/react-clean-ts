import { GetUsers } from '@/usecases/GetUsers'
import type { IGetUsers } from '@/domain/i-usecases/IGetUsers'
import { makeApiBackendUrl, makeAxiosHttpClient } from '@/frameworks/factories'

export const makeGetUsers = (): IGetUsers => {
  return new GetUsers(makeApiBackendUrl(`/users`), makeAxiosHttpClient())
}
