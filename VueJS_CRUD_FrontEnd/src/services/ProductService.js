import axios from "axios";

var baseApiUrl = "http://localhost:3000";

export default class ProductService {
  static async getProducts() {
    const res = await axios.get(baseApiUrl + "/");
    return res.data;
  }

  static async getProduct(id) {
    const res = await axios.get(baseApiUrl + "/product/" + id);
    return res.data;
  }

  static async addProduct(data) {
    const res = await axios.post(baseApiUrl + "/addproduct", data);
    return res.data;
  }

  static async updateProduct(data) {
    const res = await axios.put(baseApiUrl + "/updateproduct", data);
    return res.data;
  }

  static async deleteProduct(id) {
    const res = await axios.delete(baseApiUrl + "/deleteproduct", { data: { id: id } });
    return res.data;
  }
}
