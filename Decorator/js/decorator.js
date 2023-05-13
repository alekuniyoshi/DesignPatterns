//component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

//Decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

//Decorator 2
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `<h1>Product Information</h1>
      <p>
        ${super.getDetail()}
      </p>`;
  }
}

class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetail() {
    return `${super.getDetail()} ${this.price}`;
  }
}

//Ejecution
//component
const productComponent = new ProductComponent("Beer");
console.log(productComponent.getDetail());

//decorator 1 with component
const comercialInfoProduct = new ComercialInfoProductDecorator(
  productComponent,
  "London Porter",
  "Fuller's"
);
console.log(comercialInfoProduct.getDetail());

//decorator 2 with component
const storeProduct = new StoreProductDecorator(productComponent, 11.2);
console.log(storeProduct.getDetail());

//decorator 2 con decorator 1
const product = new StoreProductDecorator(comercialInfoProduct, 90);
console.log(product.getDetail());

//decorator 3 with decorator 2 with decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();
