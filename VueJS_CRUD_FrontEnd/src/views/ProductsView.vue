<template>
  <div>
    <router-link :to="'/addproduct'"
      ><button class="btn btn-primary">Add product</button></router-link
    >
    <br />
    <table class="table" :style="{ width: '400px' }">
      <thead>
        <tr>
          <th>Name</th>
          <th>Created Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product">
          <td>{{ product.name }}</td>
          <td>
            {{ moment(product.createdDate).format("YYYY-MM-DD") }}
          </td>
          <td :style="{ width: '38px' }">
            <font-awesome-icon
              title="Edit"
              icon="edit"
              class="actionBtn"
              v-on:click="editProduct(product._id)"
            />
          </td>
          <td :style="{ width: '38px' }">
            <font-awesome-icon
              title="Delete"
              icon="trash"
              class="actionBtn"
              v-on:click="deleteProduct(product._id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from "../services/ProductService";
import moment from "moment";
import swal from "sweetalert2";

export default {
  name: "products",
  data() {
    return {
      products: [],
      moment: moment,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      this.products = await ProductService.getProducts();
    },

    async deleteProduct(id) {
      new swal({
        title: "Delete?",
        text: "Are you sure to delete?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then(async (res) => {
        if (res.isConfirmed) {
          await ProductService.deleteProduct(id);
          this.getProducts();
        }
      });
    },

    editProduct(id) {
      this.$router.push({ path: "addproduct", query: { id: id } });
    },
  },
};
</script>
<style scoped>
.actionBtn {
  font-size: 20px;
  cursor: pointer;
}
</style>