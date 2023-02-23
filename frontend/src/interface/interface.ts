export interface IPayloadDecodeToken {
    id: string,
    username: string
}

export enum EStatusProduct {
    "NEW" = 1,
    "OLD" = 0
}


export interface IProduct {
  id: string
  name: string
  quantity: number
  cost: number
  status: number
  discount: number
  shoeBrand: string
  pathImage: string
}