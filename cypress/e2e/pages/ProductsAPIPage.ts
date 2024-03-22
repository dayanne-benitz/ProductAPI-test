class ProductsAPIPage {
  getAllProducts() {
    return cy.request("GET", "https://dummyjson.com/products");
  }

  getSingleProduct(id: number) {
    return cy.request("GET", `https://dummyjson.com/products/${id}`);
  }

  searchProducts(query: string) {
    return cy.request("GET", `https://dummyjson.com/products/search?q=${query}`);
  }

  limitAndSkipProducts(limit: number, skip: number) {
    return cy.request("GET", `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`);
  }

  getAllProductCategories() {
    return cy.request("GET", "https://dummyjson.com/products/categories");
  }

  getProductCategory(category: string) {
    return cy.request("GET", `https://dummyjson.com/products/category/${category}`);
  }

  addNewProduct(productData: any) {
    return cy.request({
      method: "POST",
      url: "https://dummyjson.com/products/add",
      headers: { "Content-Type": "application/json" },
      body: productData,
    });
  }

  updateProductTitle(id: number, newTitle: string) {
    return cy.request({
      method: "PUT",
      url: `https://dummyjson.com/products/${id}`,
      headers: { "Content-Type": "application/json" },
      body: { title: newTitle },
    });
  }

  deleteProduct(id: number) {
    return cy.request({
      method: "DELETE",
      url: `https://dummyjson.com/products/${id}`,
    });
  }
}

export default new ProductsAPIPage();
