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
