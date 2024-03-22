/// <reference types="cypress"/>
import ProductsAPIPage from "../pages/ProductsAPIPage";

describe("API Tests", () => {
  it("Retrieve and validate all products", () => {
    ProductsAPIPage.getAllProducts().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.include('application/json');
      expect(response.body.products).to.be.an("array").that.is.not.empty;
      response.body.products.forEach((product: any) => {
        expect(product).to.have.property("id");
        expect(product).to.have.property("title");
        expect(product).to.have.property("price");
      });
    });
  });

  it("Fetch and verify a single product", () => {
    const productId: number = 1;
    ProductsAPIPage.getSingleProduct(productId).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id").to.equal(productId);
      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("price");
    });
  });

  it("Validate product search functionality", () => {
    const query: string = "phone"; 
    ProductsAPIPage.searchProducts(query).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.products).to.be.an("array").that.is.not.empty;
    });
  });

  it("Paginate product retrieval", () => {
    ProductsAPIPage.limitAndSkipProducts(10, 10).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.products).to.be.an("array").that.has.lengthOf(10);

      response.body.products.forEach((product: any, index: number) => {
        if (!product.hasOwnProperty("title") || !product.hasOwnProperty("id")) {
          console.log(
            `Product at index ${index} does not have expected keys:`,
            product
          );
        }
        console.log(product);
        expect(product).to.have.all.keys("id", "title", "title");
      });
    });
  });

  it("Retrieve all categories of product", () => {
    ProductsAPIPage.getAllProductCategories().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array").that.is.not.empty;
    });
  });

  it("Fetch products by category", () => {
    const category: string = "smartphones";
    ProductsAPIPage.getProductCategory(category).then((response) => {
      console.log(response.body);
      expect(response.status).to.equal(200);
      expect(response.body.products).to.be.an("array").that.is.not.empty;
    });
  });

  it("Verify product addition functionality", () => {
    ProductsAPIPage.addNewProduct({
      title: "BMW Pencil",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("title");
    });
  });

  it("Verify the modification of product title", () => {
    const productId: number = 1;
    const newTitle: string = "iPhone Galaxy +1";
    ProductsAPIPage.updateProductTitle(productId, newTitle).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id").to.equal(productId);
      expect(response.body).to.have.property("title").to.equal(newTitle);
    });
  });

  it("Verify the Remove a Product functionality", () => {
    const productId: number = 1;
    ProductsAPIPage.deleteProduct(productId).then((response) => {
      console.log("deleted: ", response);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("isDeleted").to.equal(true);
      expect(response.body).to.have.property("deletedOn");
    });
  });
});
