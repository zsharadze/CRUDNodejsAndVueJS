<template>
  <p class="h5 m-2">{{ addEditProductText }}:</p>
  <div class="m-2">
    <form @submit="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          v-model="name"
          name="name"
          :style="{ width: '250px' }"
          :class="['form-control', invalidInput ? 'invalidInput' : '']"
          @keyup="inputChange"
        />
      </div>
      <button
        class="btn btn-primary"
        type="submit"
        :style="{ 'margin-top': '10px', width: '70px' }"
      >
        {{ submitBtnText }}
        <img
          src="../assets/images/loading.gif"
          :style="[{ display: imgLoadingDisplay }]"
        />
      </button>
    </form>
  </div>
</template>

<script>
import ProductService from "../services/ProductService";

export default {
  name: "addproduct",
  data() {
    return {
      name: "",
      submitBtnText: "Add",
      addEditProductText: "",
      imgLoadingDisplay: "none",
      invalidInput: false,
      editProductId: "",
    };
  },
  async mounted() {
    this.editProductId = this.$route.query.id;

    if (this.editProductId) {
      let productToEdit = await ProductService.getProduct(this.editProductId);
      this.name = productToEdit.name;
      this.submitBtnText = "Save";
      this.addEditProductText = "Edit Product";
    } else {
      this.addEditProductText = "Add Product";
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      if (!this.name) {
        this.invalidInput = true;
        return;
      }
      let newProduct = {
        name: this.name,
        createdDate: new Date(),
      };
      this.submitBtnText = "";
      this.imgLoadingDisplay = "inline";
      if (!this.editProductId) {
        await ProductService.addProduct(newProduct);
      } else {
        newProduct = { ...newProduct, id: this.editProductId };
        await ProductService.updateProduct(newProduct);
      }
      this.name = "";
      this.createdDate = "";
      this.$router.push("/");
    },
    inputChange() {
      if (this.name) {
        this.invalidInput = false;
      }
    },
  },
};
</script>

<style scoped>
.invalidInput {
  border: 1px solid #ff0000;
}
</style>