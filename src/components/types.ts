export type Category = {
    id: number
    name: string
}

export type Prodact = {
    id: number
      title: String
      price: number
      description:string
      categoryId: number
      image: string
}

export type BasketItem = {
    id: number
    productId: number
    quantity: number
    product: Prodact
}