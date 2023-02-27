import { TUser } from '@/domain/entities/TUsers'

export interface IGetUsers {
  execute(acccessToken: string): Promise<TUser[] | Error>
}
