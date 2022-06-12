import { createRouter, createWebHistory } from "vue-router";
import products from "../views/ProductsView.vue";
import addproduct from "../views/AddProductView.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: products,
  },
  {
    path: "/addproduct/:id?",
    name: "addproduct",
    component: addproduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
