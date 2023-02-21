

export interface IPayloadCreateToken {
  id: string
  username: string
}

export interface IInforUser {
  id: string
  username: string
  password: string
}

export interface IProduct {
  id?: string
  name: string
  quantity: number
  cost: number
  discount: number
  stocking: boolean
  shoeBrand: string
  pathImage: string
}