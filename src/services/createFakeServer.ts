
import { createServer } from "miragejs"
import { products } from '../assets/products';

export const createFakeServer = () => {
  createServer({
    routes() {
      this.get("/api/products", () => products)
    },
  })
}